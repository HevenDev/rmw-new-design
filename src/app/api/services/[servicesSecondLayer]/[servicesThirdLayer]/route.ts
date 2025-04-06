import { NextRequest, NextResponse } from 'next/server';
import { getDBPool } from '@/lib/db';
import { RowDataPacket } from 'mysql2';

type ThirdLayerCard = RowDataPacket & {
  title: string;
  description: string;
};

// @ts-ignore - Temporary bypass for Next.js type conflict
export async function GET(
  request: NextRequest,
  { params }: { params: { servicesSecondLayer: string; servicesThirdLayer: string } }
): Promise<NextResponse> {
  try {
    const { servicesSecondLayer, servicesThirdLayer } = params;

    if (!servicesSecondLayer || !servicesThirdLayer) {
      return NextResponse.json(
        { error: 'Missing route parameters' }, 
        { status: 400 }
      );
    }

    const pool = await getDBPool();

    // Get service ID
    const [services] = await pool.query<RowDataPacket[]>(
      'SELECT id FROM services WHERE link = ? LIMIT 1',
      [servicesSecondLayer]
    );

    if (services.length === 0) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    const serviceId = services[0].id;

    // Get service second layer details
    const [serviceSeconds] = await pool.query<RowDataPacket[]>(
      `SELECT id, s3heading1, s3para, s3endtag 
       FROM service_second 
       WHERE link = ? AND service_id = ? 
       LIMIT 1`,
      [servicesThirdLayer, serviceId]
    );

    if (serviceSeconds.length === 0) {
      return NextResponse.json(
        { error: 'Service second layer not found' },
        { status: 404 }
      );
    }

    const serviceSecond = serviceSeconds[0];
    const serviceSecondId = serviceSecond.id;

    // Get third layer cards
    const [thirdLayerCards] = await pool.query<ThirdLayerCard[]>(
      'SELECT title, description FROM service_third WHERE service2_id = ?',
      [serviceSecondId]
    );

    return NextResponse.json({
      s3heading1: serviceSecond.s3heading1,
      s3para: serviceSecond.s3para,
      s3endtag: serviceSecond.s3endtag,
      cards: thirdLayerCards,
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}