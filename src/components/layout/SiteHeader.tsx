import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, PhoneCall, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-charcoal-900 text-sand-50 shadow-soft">
        <span className="font-serif text-sm">MA</span>
      </div>
      <div className="leading-tight">
        <div className="font-serif text-base font-semibold">Madeira Art</div>
        <div className="text-xs text-charcoal-700/80">Artesanato em madeira</div>
      </div>
    </div>
  )
}

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/produtos', label: 'Catálogo' },
  { to: '/contato', label: 'Contato' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isContact = useMemo(() => location.pathname === '/contato', [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200/70 bg-sand-50/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-charcoal-800/80 transition-colors hover:text-charcoal-900',
                  isActive && 'text-charcoal-900',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/contato" className="inline-flex">
            <Button variant={isContact ? 'secondary' : 'primary'}>
              <PhoneCall className="h-4 w-4" />
              Fazer orçamento
            </Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sand-200 bg-sand-50 text-charcoal-900 transition hover:bg-sand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-sand-200/70 bg-sand-50 md:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-3 py-2 text-sm font-medium text-charcoal-800/80 hover:bg-sand-100 hover:text-charcoal-900',
                      isActive && 'bg-sand-100 text-charcoal-900',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contato" onClick={() => setOpen(false)}>
                <Button className="w-full">
                  <PhoneCall className="h-4 w-4" />
                  Fazer orçamento
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

