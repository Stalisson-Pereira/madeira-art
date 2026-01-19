import { type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50 disabled:pointer-events-none disabled:opacity-50',
        variant === 'primary' && 'bg-wood-600 text-sand-50 hover:bg-wood-700',
        variant === 'secondary' &&
          'border border-sand-200 bg-sand-50 text-charcoal-900 hover:bg-sand-100',
        variant === 'ghost' && 'text-charcoal-900 hover:bg-sand-100',
        size === 'sm' && 'h-9 px-3 text-sm',
        size === 'md' && 'h-10 px-4 text-sm',
        size === 'lg' && 'h-12 px-5 text-base',
        className,
      )}
      {...props}
    />
  )
}

