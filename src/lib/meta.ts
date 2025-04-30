// lib/meta.ts
import { getDBPool } from '@/lib/db'

export type SlugType =
  | { slug: string }
  | { secondPage: string; thirdPage: string }

export async function getMetaOrThrow(
  slug: string,
  type: 'blog' | 'category' | 'serviceSecond' | 'serviceThird'
): Promise<{ meta_title: string; meta_description: string; meta_keywords: string }> {
  const pool = await getDBPool()
  let query = ''

  if (type === 'blog') {
    query = 'SELECT meta_title, meta_description, meta_keywords FROM blogs WHERE slug = ? LIMIT 1'
  } else if (type === 'category') {
    query = 'SELECT meta_title, meta_description, meta_keywords FROM categories WHERE slug = ? LIMIT 1'
  } else if (type === 'serviceSecond') {
    query = 'SELECT meta_title, meta_description, meta_keywords FROM service_second WHERE slug = ? LIMIT 1'
  } else if (type === 'serviceThird') {
    query = 'SELECT meta_title, meta_description, meta_keywords FROM service_third WHERE slug = ? LIMIT 1'
  }

  const [rows]: any = await pool.query(query, [slug])
  const data = rows[0]
  if (!data) throw new Error('NOT_FOUND')
  return data
}

export async function getAllSlugs(
  type: 'blog' | 'category' | 'serviceSecond' | 'serviceThird'
): Promise<SlugType[]> {
  const pool = await getDBPool()
  let query = ''

  if (type === 'blog') {
    query = 'SELECT slug FROM blogs'
  } else if (type === 'category') {
    query = 'SELECT slug FROM categories'
  } else if (type === 'serviceSecond') {
    query = 'SELECT slug FROM service_second'
  } else if (type === 'serviceThird') {
    query = 'SELECT slug, parent_slug FROM service_third'
  }

  const [rows]: any[] = await pool.query(query)

  if (type === 'serviceThird') {
    return rows.map((row: any) => ({
      secondPage: row.parent_slug,
      thirdPage: row.slug,
    }))
  }

  return rows.map((row: any) => ({ slug: row.slug }))
}
