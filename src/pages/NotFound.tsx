import { Link } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-xl rounded-2xl border border-sand-200 bg-sand-50 p-8 text-center shadow-soft">
        <div className="font-serif text-2xl font-semibold text-charcoal-900">Página não encontrada</div>
        <p className="mt-2 text-sm text-charcoal-700/80">O endereço pode ter sido alterado ou está incorreto.</p>
        <div className="mt-6 flex justify-center">
          <Link to="/">
            <Button>Voltar para Home</Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

