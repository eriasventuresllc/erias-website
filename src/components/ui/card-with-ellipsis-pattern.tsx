
import { cn } from '@/lib/utils'

interface PatternCardProps {
  children: React.ReactNode
  className?: string
  patternClassName?: string
  gradientClassName?: string
}

export function PatternCard({ 
  children, 
  className,
  patternClassName,
  gradientClassName
}: PatternCardProps) {
  return (
    <div className={cn(
      "border w-full rounded-xl overflow-hidden",
      "bg-background",
      "border-border",
      "p-2",
      className
    )}>
      <div className={cn(
        "size-full bg-repeat bg-[length:30px_30px]",
        "bg-dot-pattern-light dark:bg-dot-pattern",
        patternClassName
      )}>
        <div className={cn(
          "size-full bg-gradient-to-tr",
          "from-background/90 via-background/40 to-background/10",
          gradientClassName
        )}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function PatternCardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-left p-3 md:p-4", className)} {...props} />;
}
