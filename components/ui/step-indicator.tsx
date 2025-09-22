interface Step {
  id: string
  label: string
  completed: boolean
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep?: number
  className?: string
}

export function StepIndicator({ steps, currentStep = 0, className = "" }: StepIndicatorProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isCurrent = index === currentStep

        return (
          <div key={step.id} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                isCompleted
                  ? "bg-green-500 text-white"
                  : isCurrent
                    ? "bg-green-500 text-white"
                    : "bg-transparent border border-gray-500 text-gray-400"
              }`}
            >
              {isCompleted || isCurrent ? (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <span className={`text-sm font-medium ${isCompleted || isCurrent ? "text-green-400" : "text-gray-400"}`}>
              {step.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
