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
              <span>Madeira Art</span>
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

