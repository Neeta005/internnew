import type { ReactNode } from "react"

interface RegistrationLayoutProps {
  children: ReactNode
  title: string
  nextButton?: ReactNode
}

export function RegistrationLayout({ children, title, nextButton }: RegistrationLayoutProps) {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        {nextButton}
      </div>
      {children}
    </div>
  )
}
