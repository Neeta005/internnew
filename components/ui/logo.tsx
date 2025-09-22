interface LogoProps {
  className?: string
  showText?: boolean
  textColor?: string
}

export function Logo({ className = "", showText = true, textColor = "text-white" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm">🎓</span>
      </div>
      {showText && (
        <span className={`font-bold text-sm ${textColor}`}>
          WORLD OF
          <br />
          INTERNS
        </span>
      )}
    </div>
  )
}
