import { ArrowRight, Hammer, Sparkles, Trees, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { PRODUCTS } from '@/data/products'

function CategoryCard({
  title,
  description,
  to,
  imageUrl,
}: {
  title: string
  description: string
  to: string
  imageUrl: string
}) {
  return (
    <Link
      to={to}
      className="group overflow-hidden rounded-2xl border border-sand-200 bg-sand-50 shadow-soft transition hover:-translate-y-0.5 hover:bg-sand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="font-serif text-lg font-semibold text-charcoal-900">{title}</div>
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-sand-200 bg-sand-50 text-charcoal-900 transition group-hover:bg-sand-100">
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-2 text-sm text-charcoal-700/80">{description}</div>
      </div>
    </Link>
  )
}

export default function Home() {
  const featured = PRODUCTS.slice(0, 4)

  return (
    <div>
      <div className="bg-gradient-to-b from-sand-50 to-sand-100/40">
        <Container className="py-12 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-sand-50 px-3 py-1 text-xs font-medium text-charcoal-700/80">
                <Sparkles className="h-4 w-4 text-wood-600" />
                Feito à mão, com acabamento premium
              </div>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-charcoal-900 md:text-5xl">
                Artesanato em madeira que transforma o cotidiano em ritual
              </h1>
              <p className="mt-4 max-w-xl text-sm text-charcoal-700/80 md:text-base">
                Colheres de pau em variados tamanhos, tábuas para carne e peças personalizadas sob medida. Madeira selecionada, bordas suaves e durabilidade.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/produtos">
                  <Button size="lg">
                    Ver catálogo
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button size="lg" variant="secondary">
                    Personalizar uma peça
                  </Button>
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-sand-200 bg-sand-50 p-4 shadow-soft">
                  <div className="flex items-center gap-2 text-sm font-semibold text-charcoal-900">
                    <Trees className="h-4 w-4 text-sage-600" />
                    Madeira responsável
                  </div>
                  <div className="mt-1 text-xs text-charcoal-700/70">Origem cuidada e seleção por lote.</div>
                </div>
                <div className="rounded-2xl border border-sand-200 bg-sand-50 p-4 shadow-soft">
                  <div className="flex items-center gap-2 text-sm font-semibold text-charcoal-900">
                    <Hammer className="h-4 w-4 text-wood-600" />
                    Feito à mão
                  </div>
                  <div className="mt-1 text-xs text-charcoal-700/70">Acabamento suave e pegada confortável.</div>
                </div>
                <div className="rounded-2xl border border-sand-200 bg-sand-50 p-4 shadow-soft">
                  <div className="flex items-center gap-2 text-sm font-semibold text-charcoal-900">
                    <Sparkles className="h-4 w-4 text-wood-600" />
                    Sob medida
                  </div>
                  <div className="mt-1 text-xs text-charcoal-700/70">Gravação, dimensões e estilo.</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-sand-200 bg-sand-50 shadow-soft">
                <img
                  src={featured[3]?.images[0]?.url}
                  alt="Textura e artesanato em madeira"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/25 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-sand-200/60 bg-sand-50/80 p-4 backdrop-blur">
                  <div className="font-serif text-lg font-semibold text-charcoal-900">Detalhes que você sente</div>
                  <div className="mt-1 text-sm text-charcoal-700/80">
                    Bordas suaves, acabamento food-safe e durabilidade para o dia a dia.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-medium text-charcoal-700/80">Categorias</div>
            <div className="mt-2 font-serif text-2xl font-semibold text-charcoal-900">Escolha seu estilo de peça</div>
          </div>
          <Link to="/produtos" className="hidden text-sm font-medium text-wood-700 hover:text-wood-600 md:inline">
            Ver todos <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <CategoryCard
            title="Colheres"
            description="Tamanhos variados para cada tipo de preparo."
            to="/produtos"
            imageUrl={featured[0]?.images[0]?.url}
          />
          <CategoryCard
            title="Tábuas"
            description="Cortes, preparo e servir com presença na mesa."
            to="/produtos"
            imageUrl={featured[3]?.images[0]?.url}
          />
          <CategoryCard
            title="Personalizados"
            description="Gravação, medidas e desenho sob medida."
            to="/produtos"
            imageUrl={featured[5]?.images[0]?.url ?? featured[2]?.images[0]?.url}
          />
        </div>
      </Container>

      <Container className="py-12">
        <div className="grid gap-8 rounded-3xl border border-sand-200 bg-sand-50 p-8 shadow-soft md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="text-xs font-medium text-charcoal-700/80">Personalização</div>
            <div className="mt-2 font-serif text-2xl font-semibold text-charcoal-900">Sua ideia, do seu jeito</div>
            <p className="mt-3 text-sm text-charcoal-700/80">
              Quer uma tábua com gravação, medidas específicas ou um conjunto de colheres para presente? Eu desenho com você e envio opções de madeira e acabamento.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-charcoal-700/80">
              <div>• Gravação (nomes, datas e logos simples)</div>
              <div>• Madeira e acabamento conforme uso</div>
              <div>• Dimensões sob medida</div>
            </div>
          </div>
          <div className="md:col-span-5 md:flex md:justify-end">
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link to="/contato">
                <Button size="lg">Pedir orçamento</Button>
              </Link>
              <Link to="/produtos">
                <Button size="lg" variant="secondary">
                  Ver produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-12">
        <div className="rounded-3xl border border-sand-200 bg-gradient-to-r from-sand-50 to-sand-100/40 p-10 shadow-soft">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <div className="font-serif text-2xl font-semibold text-charcoal-900">Conte sua ideia e eu preparo um orçamento</div>
              <div className="mt-2 text-sm text-charcoal-700/80">
                Envie detalhes do produto desejado e eu retorno com preço e prazo.
              </div>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <Link to="/contato">
                <Button size="lg">Ir para contato</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
