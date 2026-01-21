import { Instagram, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-sand-200 bg-sand-50">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-serif text-lg font-semibold">
              <img src="/favicon.svg" alt="Madeira Art" className="h-6 w-6" />
              <div className="flex items-center gap-2">
                <span className="text-wood-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-4 w-4 relative top-[1px]"
                  >
                    <path d="M8 3.25c-2.35 0-4.25 1.95-4.25 4.55 0 2.85 1.9 5.05 4.25 5.05S12.25 10.65 12.25 7.8C12.25 5.2 10.35 3.25 8 3.25Z" />
                    <path d="M9.6 12.35c.25 4.55 2.9 7.85 9.4 9.4" />
                    <path d="M6.65 6.55c.55-.45 1.2-.68 1.95-.68" />
                  </svg>
                </span>
                <span className="font-semibold">Madeira Art</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-charcoal-700/80">
              Colheres, tábuas e peças personalizadas em madeira. Feito à mão com cuidado e acabamento premium.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-charcoal-900">Links</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-charcoal-800/80 hover:text-charcoal-900" to="/">
                Home
              </Link>
              <Link className="text-charcoal-800/80 hover:text-charcoal-900" to="/produtos">
                Catálogo
              </Link>
              <Link className="text-charcoal-800/80 hover:text-charcoal-900" to="/contato">
                Contato
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-charcoal-900">Contato</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-charcoal-700/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-wood-600" />
                <span>(73) 98875-5391</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail strokeWidth={1.75} className="h-4 w-4 shrink-0 text-wood-600" />
                <span>madeiraart@madeiraart.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-wood-600" />
                <span>@madeiraart</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-wood-600">CNPJ:</span>
                <span>41.982.543/0001-39</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-sand-200 pt-6 text-xs text-charcoal-700/70 md:flex-row md:items-center md:justify-between">
          <div>© {year} Madeira Art. Todos os direitos reservados.</div>
          <div>Feito com cuidado e madeira de origem responsável.</div>
        </div>
      </Container>
    </footer>
  )
}

