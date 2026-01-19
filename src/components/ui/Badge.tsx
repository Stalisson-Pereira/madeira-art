import { cn } from '@/lib/utils'

export default function Badge({
  children,
  tone = 'neutral',
  className,
}: {
  children: React.ReactNode
  tone?: 'neutral' | 'success' | 'warning'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium',
        tone === 'neutral' && 'border-sand-200 bg-sand-50 text-charcoal-800',
        tone === 'success' && 'border-sage-500/30 bg-sage-500/10 text-sage-600',
        tone === 'warning' && 'border-wood-600/30 bg-wood-600/10 text-wood-700',
        className,
      )}
    >
      {children}
    </span>
  )
}

