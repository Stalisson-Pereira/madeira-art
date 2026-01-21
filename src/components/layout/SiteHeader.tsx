import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, PhoneCall, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-sand-50 shadow-soft ring-1 ring-sand-200">
        <img src="/favicon.svg" alt="Madeira Art" className="h-7 w-7" />
      </div>
      <div className="leading-tight">
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

