import { Search, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import Container from '@/components/ui/Container'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import ProductCard from '@/components/catalog/ProductCard'
import ProductQuickView from '@/components/catalog/ProductQuickView'
import type { Product, ProductCategory } from '@/data/products'
import { useProducts } from '@/hooks/useProducts'
import Button from '@/components/ui/Button'

type Sort = 'recent' | 'priceAsc' | 'priceDesc'
type CategoryValue = 'all' | ProductCategory

export default function Produtos() {
  const [q, setQ] = useState('')
  const [category, setCategory] = useState<'all' | ProductCategory>('all')
  const [sort, setSort] = useState<Sort>('recent')
  const [priceMin, setPriceMin] = useState<string>('')
  const [priceMax, setPriceMax] = useState<string>('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<Product | null>(null)

  const parsedPriceMin = useMemo(() => {
    const v = Number(priceMin)
    return Number.isFinite(v) && priceMin.trim() !== '' ? v : undefined
  }, [priceMin])

  const parsedPriceMax = useMemo(() => {
    const v = Number(priceMax)
    return Number.isFinite(v) && priceMax.trim() !== '' ? v : undefined
  }, [priceMax])

  const { loading, items } = useProducts({
    q,
    category,
    sort,
    priceMin: parsedPriceMin,
    priceMax: parsedPriceMax,
  })

  const onOpen = (p: Product) => {
    setActive(p)
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
    setActive(null)
  }

  return (
    <div>
      <div className="border-b border-sand-200 bg-sand-50">
        <Container className="py-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-3xl font-semibold text-charcoal-900 md:text-4xl">Catálogo</h1>
            <p className="mt-2 text-sm text-charcoal-700/80">
              Explore colheres, tábuas e itens personalizados em madeira. Clique em um item para ver detalhes e pedir orçamento.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <div className="text-xs font-medium text-charcoal-700/80">Buscar</div>
              <div className="relative mt-2">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-700/60" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Ex.: colher grande, tábua, gravação…"
                  className="pl-9"
                  aria-label="Buscar produtos"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="text-xs font-medium text-charcoal-700/80">Categoria</div>
              <Select
                className="mt-2"
                value={category}
                onChange={(e) => {
                  const v = e.target.value as CategoryValue
                  if (v === 'all' || v === 'colheres' || v === 'tabuas' || v === 'personalizados') {
                    setCategory(v)
                  }
                }}
              >
                <option value="all">Todas</option>
                <option value="colheres">Colheres</option>
                <option value="tabuas">Tábuas</option>
                <option value="personalizados">Personalizados</option>
              </Select>
            </div>

            <div className="md:col-span-2">
              <div className="text-xs font-medium text-charcoal-700/80">Ordenar</div>
              <Select className="mt-2" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
                <option value="recent">Mais recentes</option>
                <option value="priceAsc">Preço (menor)</option>
                <option value="priceDesc">Preço (maior)</option>
              </Select>
            </div>

            <div className="md:col-span-2">
              <div className="text-xs font-medium text-charcoal-700/80">Preço (R$)</div>
              <div className="mt-2 flex items-center gap-2">
                <Input
                  inputMode="numeric"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  placeholder="Min"
                  aria-label="Preço mínimo"
                />
                <Input
                  inputMode="numeric"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  placeholder="Max"
                  aria-label="Preço máximo"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-charcoal-700/80">
            <SlidersHorizontal className="h-4 w-4" />
            <span>{loading ? 'Carregando…' : `${items.length} item(ns)`}</span>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setQ('')
              setCategory('all')
              setSort('recent')
              setPriceMin('')
              setPriceMax('')
            }}
          >
            Limpar filtros
          </Button>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="animate-pulse overflow-hidden rounded-2xl border border-sand-200 bg-sand-50 shadow-soft"
                >
                  <div className="aspect-[4/3] bg-sand-100" />
                  <div className="p-4">
                    <div className="h-3 w-24 rounded bg-sand-100" />
                    <div className="mt-3 h-4 w-40 rounded bg-sand-100" />
                    <div className="mt-3 h-3 w-full rounded bg-sand-100" />
                    <div className="mt-2 h-3 w-3/4 rounded bg-sand-100" />
                  </div>
                </div>
              ))
            : items.map((p) => <ProductCard key={p.slug} product={p} onOpen={onOpen} />)}
        </div>

        {!loading && items.length === 0 && (
          <div className="mt-10 rounded-2xl border border-sand-200 bg-sand-50 p-8 text-center shadow-soft">
            <div className="font-serif text-xl font-semibold text-charcoal-900">Nenhum produto encontrado</div>
            <p className="mt-2 text-sm text-charcoal-700/80">Tente ajustar a busca ou limpar os filtros.</p>
          </div>
        )}
      </Container>

      <ProductQuickView open={open} product={active} onClose={onClose} />
    </div>
  )
}

