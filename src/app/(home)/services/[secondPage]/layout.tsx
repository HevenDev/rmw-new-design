import { ReactNode } from 'react';
import { Metadata } from 'next';
import { RowDataPacket } from 'mysql2';
import { getDBPool } from '@/lib/db'; 
type Props = {
  children: ReactNode;
  params: { secondPage: string };
};

interface MetaDataRow extends RowDataPacket {
  meta_title: string;
  meta_description: string;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { secondPage } = await params;  
  const slug = secondPage;  

  const pool = await getDBPool();

  const [rows] = await pool.query<MetaDataRow[]>(
    'SELECT meta_title, meta_description FROM services WHERE link = ?',
    [slug]
  );

  const data = rows.length > 0 ? rows[0] : null;

  if (!data) {
    return {
      title: 'Page Not Found',
      description: 'This page does not exist.',
    };
  }

  return {
    title: data.meta_title,
    description: data.meta_description,
  };
}

export default function ServiceSecondLayout({ children }: Props) {
  return <>{children}</>;
}
