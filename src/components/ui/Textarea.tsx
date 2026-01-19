import { type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export default function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'min-h-28 w-full rounded-lg border border-sand-200 bg-sand-50 px-3 py-2 text-sm text-charcoal-900 placeholder:text-charcoal-700/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-50',
        className,
      )}
      {...props}
    />
  )
}

