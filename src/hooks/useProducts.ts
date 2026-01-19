import { useEffect, useMemo, useState } from 'react'
import { PRODUCTS, type Product, type ProductCategory } from '@/data/products'
import { getSupabaseClient } from '@/lib/supabaseClient'

type Sort = 'recent' | 'priceAsc' | 'priceDesc'

export type ProductsQuery = {
  q: string
  category: 'all' | ProductCategory
  sort: Sort
  priceMin?: number
  priceMax?: number
}

type DbProduct = {
  id: string
  name: string
  category: ProductCategory
  short_description: string | null
  description: string | null
  price_from: number | null
  price_on_request: boolean | null
  wood_type: string | null
  finish: string | null
  dimensions: string | null
  available: boolean | null
  slug: string
  created_at: string | null
}

type DbImage = {
  product_id: string
  storage_path: string
  sort_order: number | null
}

export function useProducts(query: ProductsQuery) {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    let cancelled = false
    let timer: number | null = null
    const run = async () => {
      setLoading(true)
      const supabase = getSupabaseClient()

      if (supabase) {
        try {
          const { data: products, error: productsError } = await supabase
            .from('products')
            .select('*')

          if (productsError) throw productsError
          const typedProducts = (products ?? []) as DbProduct[]
          const ids = typedProducts.map((p) => p.id)

          const { data: images, error: imagesError } = await supabase
            .from('product_images')
            .select('*')
            .in('product_id', ids)
            .order('sort_order', { ascending: true })

          if (imagesError) throw imagesError

          const typedImages = (images ?? []) as DbImage[]

          const byProduct: Record<string, DbImage[]> = {}
          for (const img of typedImages) {
            const pid = img.product_id
            byProduct[pid] = byProduct[pid] ?? []
            byProduct[pid].push(img)
          }

          const mapped: Product[] = typedProducts.map((p) => {
            const imgs = (byProduct[p.id] ?? []).map((img, idx) => ({
              url: img.storage_path,
              alt: `${p.name} — imagem ${idx + 1}`,
            }))

            return {
              id: p.id,
              name: p.name,
              category: p.category,
              slug: p.slug,
              shortDescription: p.short_description ?? '',
              description: p.description ?? '',
              priceFrom: p.price_from ?? undefined,
              priceOnRequest: Boolean(p.price_on_request),
              woodType: p.wood_type ?? undefined,
              finish: p.finish ?? undefined,
              dimensions: p.dimensions ?? undefined,
              available: Boolean(p.available),
              images: imgs.length ? imgs : [{ url: PRODUCTS[0].images[0].url, alt: p.name }],
              createdAt: p.created_at ?? new Date().toISOString(),
            }
          })

          if (!cancelled) {
            setItems(mapped)
            setLoading(false)
          }
          return
        } catch {
          if (!cancelled) {
            setItems(PRODUCTS)
            setLoading(false)
          }
          return
        }
      }

      timer = window.setTimeout(() => {
        if (cancelled) return
        setItems(PRODUCTS)
        setLoading(false)
      }, 250)
    }

    void run()
    return () => {
      cancelled = true
      if (timer != null) window.clearTimeout(timer)
    }
  }, [])

  const filtered = useMemo(() => {
    const normalizedQ = query.q.trim().toLowerCase()

    let list = items

    if (query.category !== 'all') {
      list = list.filter((p) => p.category === query.category)
    }

    if (normalizedQ) {
      list = list.filter((p) => {
        const haystack = `${p.name} ${p.shortDescription} ${p.description}`.toLowerCase()
        return haystack.includes(normalizedQ)
      })
    }

    if (query.priceMin != null || query.priceMax != null) {
      list = list.filter((p) => {
        if (p.priceOnRequest) return true
        const price = p.priceFrom ?? 0
        if (query.priceMin != null && price < query.priceMin) return false
        if (query.priceMax != null && price > query.priceMax) return false
        return true
      })
    }

    const sorted = [...list]
    sorted.sort((a, b) => {
      if (query.sort === 'recent') return b.createdAt.localeCompare(a.createdAt)
      if (query.sort === 'priceAsc') return (a.priceFrom ?? 0) - (b.priceFrom ?? 0)
      if (query.sort === 'priceDesc') return (b.priceFrom ?? 0) - (a.priceFrom ?? 0)
      return 0
    })

    return sorted
  }, [items, query.category, query.priceMax, query.priceMin, query.q, query.sort])

  return { loading, items: filtered }
}

