import { CheckCircle2, Mail, MessageCircle, Phone, Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { PRODUCTS } from '@/data/products'
import { getSupabaseClient } from '@/lib/supabaseClient'

type Channel = 'whatsapp' | 'email' | 'telefone'

function isValidEmail(value: string) {
  if (!value) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function Contato() {
  const [params] = useSearchParams()
  const initialProductSlug = params.get('produto') ?? ''

  const productOptions = useMemo(
    () => PRODUCTS.map((p) => ({ slug: p.slug, label: p.name })),
    [],
  )

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [channel, setChannel] = useState<Channel>('whatsapp')
  const [productSlug, setProductSlug] = useState(initialProductSlug)
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(true)

  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const selectedProduct = useMemo(
    () => PRODUCTS.find((p) => p.slug === productSlug) ?? null,
    [productSlug],
  )

  const canSubmit = useMemo(() => {
    if (!consent) return false
    if (name.trim().length < 2) return false
    if (!isValidEmail(email.trim())) return false
    if (message.trim().length < 10) return false
    return true
  }, [consent, email, message, name])

  return (
    <div>
      <div className="border-b border-sand-200 bg-sand-50">
        <Container className="py-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-3xl font-semibold text-charcoal-900 md:text-4xl">Contato & Orçamento</h1>
            <p className="mt-2 text-sm text-charcoal-700/80">
              Conte sua ideia e eu retorno com um orçamento. Para pedidos personalizados, inclua medidas e referência do estilo.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-sand-200 bg-sand-50 p-6 shadow-soft">
              <div className="font-serif text-xl font-semibold text-charcoal-900">Como pedir seu orçamento</div>
              <div className="mt-4 grid gap-3 text-sm text-charcoal-700/80">
                <div>
                  <div className="font-medium text-charcoal-900">1) Escolha o tipo de peça</div>
                  <div>Colheres, tábuas ou um item sob medida.</div>
                </div>
                <div>
                  <div className="font-medium text-charcoal-900">2) Envie detalhes</div>
                  <div>Medidas, gravação, madeira desejada e prazo.</div>
                </div>
                <div>
                  <div className="font-medium text-charcoal-900">3) Eu retorno com opções</div>
                  <div>Prazo médio de resposta: até 24h úteis.</div>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <Button className="w-full" size="lg">
                    <MessageCircle className="h-4 w-4" />
                    Chamar no WhatsApp
                  </Button>
                </a>

                <div className="grid gap-2 rounded-xl border border-sand-200 bg-sand-50 p-4 text-sm text-charcoal-700/80">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-wood-600" />
                    <span>(00) 00000-0000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-wood-600" />
                    <span>contato@madeiraart.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border border-sand-200 bg-sand-50 p-6 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div className="font-serif text-xl font-semibold text-charcoal-900">Formulário</div>
                {selectedProduct && (
                  <div className="text-xs text-charcoal-700/80">
                    Produto: <span className="font-medium text-charcoal-900">{selectedProduct.name}</span>
                  </div>
                )}
              </div>

              {sent ? (
                <div className="mt-6 rounded-2xl border border-sage-500/30 bg-sage-500/10 p-6">
                  <div className="flex items-center gap-2 font-serif text-xl font-semibold text-sage-600">
                    <CheckCircle2 className="h-5 w-5" />
                    Mensagem enviada
                  </div>
                  <p className="mt-2 text-sm text-charcoal-700/80">
                    Obrigado! Eu retorno em até 24h úteis com as próximas etapas.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link to="/produtos">
                      <Button variant="secondary">Voltar ao catálogo</Button>
                    </Link>
                    <Button
                      onClick={() => {
                        setSent(false)
                        setError(null)
                      }}
                    >
                      Enviar outra mensagem
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  className="mt-6 grid gap-4"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    if (!canSubmit) return
                    setSubmitting(true)
                    setError(null)
                    try {
                      const supabase = getSupabaseClient()

                      if (supabase) {
                        const { error: insertError } = await supabase.from('contact_messages').insert({
                          name: name.trim(),
                          email: email.trim() ? email.trim() : null,
                          phone: phone.trim() ? phone.trim() : null,
                          preferred_channel: channel,
                          product_slug: productSlug.trim() ? productSlug.trim() : null,
                          message: message.trim(),
                        })

                        if (insertError) throw insertError
                      } else {
                        await new Promise((r) => setTimeout(r, 650))
                      }

                      setSent(true)
                    } catch {
                      setError('Não foi possível enviar agora. Tente novamente.')
                    } finally {
                      setSubmitting(false)
                    }
                  }}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="text-xs font-medium text-charcoal-700/80">Nome *</div>
                      <Input value={name} onChange={(e) => setName(e.target.value)} className="mt-2" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-charcoal-700/80">E-mail</div>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2"
                        type="email"
                      />
                      {!isValidEmail(email.trim()) && (
                        <div className="mt-2 text-xs text-wood-700">E-mail inválido.</div>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="text-xs font-medium text-charcoal-700/80">Telefone/WhatsApp</div>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-charcoal-700/80">Canal preferido</div>
                      <Select
                        value={channel}
                        onChange={(e) => setChannel(e.target.value as Channel)}
                        className="mt-2"
                      >
                        <option value="whatsapp">WhatsApp</option>
                        <option value="email">E-mail</option>
                        <option value="telefone">Telefone</option>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-charcoal-700/80">Produto (opcional)</div>
                    <Select
                      value={productSlug}
                      onChange={(e) => setProductSlug(e.target.value)}
                      className="mt-2"
                    >
                      <option value="">Selecione…</option>
                      {productOptions.map((opt) => (
                        <option key={opt.slug} value={opt.slug}>
                          {opt.label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <div className="text-xs font-medium text-charcoal-700/80">Mensagem *</div>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-2"
                      placeholder="Conte detalhes (medidas, madeira desejada, gravação, prazo)…"
                    />
                    <div className="mt-2 text-xs text-charcoal-700/60">Mínimo: 10 caracteres.</div>
                  </div>

                  <label className="flex items-start gap-3 rounded-xl border border-sand-200 bg-sand-50 p-4 text-sm text-charcoal-700/80">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-sand-300 text-wood-600 focus:ring-wood-500"
                    />
                    <span>Concordo em ser contatado(a) por este canal.</span>
                  </label>

                  {error && <div className="text-sm text-wood-700">{error}</div>}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-charcoal-700/60">* Campos obrigatórios</div>
                    <Button type="submit" disabled={!canSubmit || submitting}>
                      <Send className="h-4 w-4" />
                      {submitting ? 'Enviando…' : 'Enviar mensagem'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

