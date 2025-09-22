"use client"

import { useRouter } from "next/navigation"
import { Navigation } from "@/components/ui/navigation"
import { ProgressCircle } from "@/components/ui/progress-circle"
import { StepIndicator } from "@/components/ui/step-indicator"
import { PhoneInput } from "@/components/ui/phone-input"
import { Button } from "@/components/ui/button"
import { candidateNavigationItems, registrationSteps } from "@/lib/data"

export default function PhoneVerificationPage() {
  const router = useRouter()

  const handleRequestOTP = () => {
    router.push("/candidate/register/otp-verification")
  }

  const handleNext = () => {
    router.push("/candidate/register/otp-verification")
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation items={candidateNavigationItems} />

      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Register</h1>
          <Button onClick={handleNext} className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg">
            Next
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Navigation Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <button className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500/10 transition-colors">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Verify Phone Number</h2>
              <p className="text-gray-400 text-sm">Enter your phone to receive a one-time verification code</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone No.</label>
                <PhoneInput />
              </div>

              <div className="text-sm text-green-400">Message has been successfully sent to your Given number.</div>

              <Button
                onClick={handleRequestOTP}
                className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-medium"
              >
                Request OTP
              </Button>
            </div>
          </div>

          {/* Right Side - Progress and Steps */}
          <div className="flex flex-col items-center space-y-6">
            {/* Right Navigation Arrow */}
            <div className="hidden lg:flex justify-end w-full">
              <button className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500/10 transition-colors">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Circle */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 w-full max-w-sm">
              <div className="flex justify-center mb-6">
                <ProgressCircle percentage={20} />
              </div>

              <StepIndicator steps={registrationSteps} currentStep={2} className="space-y-4" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <span>you agree to our</span>
            <a href="#" className="text-blue-400 hover:underline">
              Terms of use
            </a>
            <span>,</span>
            <a href="#" className="text-blue-400 hover:underline">
              Privacy and policy
            </a>
          </div>
          <div>
            © 2025 - Copyright: <span className="text-white">World of Interns</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
