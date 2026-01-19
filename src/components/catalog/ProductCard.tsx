import { ArrowUpRight } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import type { Product } from '@/data/products'
import { formatBRL } from '@/utils/format'

export default function ProductCard({
  product,
  onOpen,
}: {
  product: Product
  onOpen: (p: Product) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(product)}
      className={cn(
        'group flex w-full flex-col overflow-hidden rounded-2xl border border-sand-200 bg-sand-50 text-left shadow-soft transition hover:-translate-y-0.5 hover:bg-sand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500',
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={product.images[0]?.url}
          alt={product.images[0]?.alt ?? product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {product.available ? <Badge tone="success">Disponível</Badge> : <Badge tone="warning">Sob encomenda</Badge>}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-medium text-charcoal-700/80">
              {product.category === 'colheres'
                ? 'Colheres'
                : product.category === 'tabuas'
                  ? 'Tábuas'
                  : 'Personalizados'}
            </div>
            <div className="mt-1 font-serif text-base font-semibold text-charcoal-900">
              {product.name}
            </div>
          </div>
          <div className="mt-1 rounded-lg border border-sand-200 bg-sand-50 p-2 text-charcoal-900 transition group-hover:bg-sand-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div className="text-sm text-charcoal-700/80">{product.shortDescription}</div>

        <div className="mt-auto pt-2 text-sm font-semibold text-charcoal-900">
          {product.priceOnRequest ? 'Sob consulta' : `A partir de ${formatBRL(product.priceFrom ?? 0)}`}
        </div>
      </div>
    </button>
  )
}

