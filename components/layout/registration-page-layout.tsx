"use client"

import Image from "next/image"
import { ProgressCircle } from "@/components/ui/progress-circle"
import { StepIndicator } from "@/components/ui/step-indicator"
import { Button } from "@/components/ui/button"
import { registrationSteps, recruiterRegistrationSteps } from "@/lib/data"
import Link from "next/link"
import type { ReactNode } from "react"
import { usePathname } from "next/navigation"

interface RegistrationPageLayoutProps {
  title: string
  nextHref: string
  currentStep: number
  children: ReactNode
  onPrevious?: () => void
  onNext?: () => void
  nextButtonText?: string
  onNextClick?: () => void
}

export function RegistrationPageLayout({
  title,
  nextHref,
  currentStep,
  children,
  onPrevious,
  onNext,
  nextButtonText = "Next",
  onNextClick,
}: RegistrationPageLayoutProps) {
  const pathname = usePathname()

  const isRecruiterFlow = pathname.includes("/recruiter/")
  const stepsToUse = isRecruiterFlow ? recruiterRegistrationSteps : registrationSteps

  const currentSteps = stepsToUse.map((step, index) => ({
    ...step,
    completed: index < currentStep,
  }))

  const progressPercentage = ((currentStep + 1) / stepsToUse.length) * 100

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <div className="relative mb-10">
        {/* Title aligned to the left */}
        <h1 className="text-4xl font-semibold text-white">{title}</h1>

        {/* Centered Next button */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          {onNextClick ? (
            <Button
              onClick={onNextClick}
              className="pointer-events-auto bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-8 py-2 rounded-md shadow-md hover:opacity-90"
            >
              {nextButtonText}
            </Button>
          ) : (
            <Link href={nextHref}>
              <Button className="pointer-events-auto bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-8 py-2 rounded-md shadow-md hover:opacity-90">
                {nextButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-[60px_500px_60px_1fr] gap-x-8 items-start">
        {/* Left Arrow */}
        <div className="flex justify-start mt-50">
          <button className="p-2 hover:bg-red-500/10 transition-colors" aria-label="Previous" onClick={onPrevious}>
            <Image src="/images/arrowleft.png" alt="Left Arrow" width={50} height={50} priority />
          </button>
        </div>

        {/* Main Content Card */}
        <div className="rounded-xl p-6 w-full min-h-[500px]">{children}</div>

        {/* Right Arrow */}
        <div className="flex justify-start mt-50">
          <button className="p-2 hover:bg-red-500/10 transition-colors" aria-label="Next" onClick={onNext}>
            <Image src="/images/arrowright.png" alt="Right Arrow" width={50} height={50} priority />
          </button>
        </div>

        {/* Progress Section */}
        <div className="bg-white/10 border border-white rounded-2xl p-4 w-full max-w-xs mx-auto min-h-[400px] flex flex-col justify-center items-center">
          <div className="flex justify-center mb-6">
            <ProgressCircle percentage={progressPercentage} />
          </div>

          <StepIndicator steps={currentSteps} currentStep={currentStep} className="space-y-4 text-white" />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-10">
        <div className="bg-slate-800 border-2 border-dashed border-red-500 rounded-xl p-8 min-h-[450px] w-full max-w-md mx-auto">
          {children}
        </div>

        <div className="backdrop-blur-md rounded-2xl p-2">
          <div className="flex justify-center mb-6">
            <ProgressCircle percentage={progressPercentage} />
          </div>

          <StepIndicator steps={currentSteps} currentStep={currentStep} className="space-y-4 text-white" />
        </div>
      </div>
    </div>
  )
}
