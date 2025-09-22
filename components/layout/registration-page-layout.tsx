"use client"

import Image from "next/image"
import { ProgressCircle } from "@/components/ui/progress-circle"
import { StepIndicator } from "@/components/ui/step-indicator"
import { Button } from "@/components/ui/button"
import { registrationSteps } from "@/lib/data"
import Link from "next/link"
import type { ReactNode } from "react"

interface RegistrationPageLayoutProps {
  title: string
  nextHref: string
  currentStep: number
  children: ReactNode
  onPrevious?: () => void
  onNext?: () => void
}

export function RegistrationPageLayout({
  title,
  nextHref,
  currentStep,
  children,
  onPrevious,
  onNext,
}: RegistrationPageLayoutProps) {
  const currentSteps = registrationSteps.map((step, index) => ({
    ...step,
    completed: index < currentStep,
  }))

  const progressPercentage = ((currentStep + 1) / registrationSteps.length) * 100

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <div className="flex items-center mb-10">
        <h1 className="text-4xl font-semibold text-white flex-1 text-left">{title}</h1>

        <div className="flex-1 flex justify-center">
          <Link href={nextHref}>
            <Button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-8 py-2 rounded-md shadow-md hover:opacity-90">
              Next
            </Button>
          </Link>
        </div>

        <div className="flex-1"></div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-[auto_500px_auto_1fr] gap-x-12 items-start">
        {/* Left Arrow */}
        <div className="flex justify-center mt-50">
          <button className="p-2 hover:bg-red-500/10 transition-colors" aria-label="Previous" onClick={onPrevious}>
            <Image src="/images/arrowleft.png" alt="Left Arrow" width={50} height={50} priority />
          </button>
        </div>

        {/* Main Content Card */}
        <div className="rounded-xl p-6 w-full min-h-[500px]">{children}</div>

        {/* Right Arrow */}
        <div className="flex justify-center mt-50">
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
