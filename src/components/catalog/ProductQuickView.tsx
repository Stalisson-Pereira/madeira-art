import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import type { Product } from '@/data/products'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import { formatBRL } from '@/utils/format'
import { Link } from 'react-router-dom'

export default function ProductQuickView({
  open,
  product,
  onClose,
}: {
  open: boolean
  product: Product | null
  onClose: () => void
}) {
  const [activeImage, setActiveImage] = useState(0)

  const images = useMemo(() => product?.images ?? [], [product])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    setActiveImage(0)
  }, [product?.slug])

  if (!open || !product) return null

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute inset-0 bg-charcoal-900/40"
      />

      <div className="absolute inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:left-auto md:w-[560px]">
        <div className="h-[92dvh] overflow-hidden rounded-t-3xl border border-sand-200 bg-sand-50 shadow-soft md:h-full md:rounded-none md:rounded-l-3xl">
          <div className="flex items-center justify-between border-b border-sand-200 px-5 py-4">
            <div>
              <div className="text-xs font-medium text-charcoal-700/80">
                {product.category === 'colheres'
                  ? 'Colheres'
                  : product.category === 'tabuas'
                    ? 'Tábuas'
                    : 'Personalizados'}
              </div>
              <div className="font-serif text-lg font-semibold text-charcoal-900">{product.name}</div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sand-200 bg-sand-50 text-charcoal-900 transition hover:bg-sand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-[calc(92dvh-64px)] overflow-y-auto px-5 py-5 md:h-[calc(100dvh-64px)]">
            <div className="grid gap-5">
              <div className="grid gap-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-sand-200 bg-sand-100">
                  <img
                    src={images[activeImage]?.url}
                    alt={images[activeImage]?.alt ?? product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {images.slice(0, 4).map((img, idx) => (
                      <button
                        key={img.url}
                        type="button"
                        onClick={() => setActiveImage(idx)}
                        className={cn(
                          'relative aspect-[4/3] overflow-hidden rounded-xl border bg-sand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500',
                          idx === activeImage ? 'border-wood-600' : 'border-sand-200 hover:border-sand-300',
                        )}
                        aria-label={`Ver imagem ${idx + 1}`}
                      >
                        <img src={img.url} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {product.available ? <Badge tone="success">Disponível</Badge> : <Badge tone="warning">Sob encomenda</Badge>}
                <Badge tone="neutral">Acabamento: {product.finish ?? 'A definir'}</Badge>
                <Badge tone="neutral">Medidas: {product.dimensions ?? 'Sob medida'}</Badge>
              </div>

              <div className="grid gap-2">
                <div className="text-sm text-charcoal-700/80">{product.description}</div>
                <div className="grid gap-1 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-charcoal-700/80">Preço</span>
                    <span className="font-medium text-charcoal-900">
                      {product.priceOnRequest
                        ? 'Sob consulta'
                        : `A partir de ${formatBRL(product.priceFrom ?? 0)}`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                <Link to={`/contato?produto=${encodeURIComponent(product.slug)}`}>
                  <Button className="w-full" size="lg">
                    Pedir orçamento
                  </Button>
                </Link>
                <Button variant="secondary" className="w-full" onClick={onClose}>
                  Voltar ao catálogo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

