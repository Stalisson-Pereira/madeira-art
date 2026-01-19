import { type SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export default function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'h-10 w-full rounded-lg border border-sand-200 bg-sand-50 px-3 text-sm text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
}

