"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { AuthLayout } from "@/components/auth/auth-layout"
import { OTPInput } from "@/components/ui/otp-input"
import { Button } from "@/components/ui/button"

export default function OTPVerificationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || "company@example.com"
  const userType = (searchParams.get("userType") as "candidate" | "recruiter") || "candidate"
  const redirect =
    searchParams.get("redirect") || (userType === "recruiter" ? "/recruiter/register" : "/candidate/register")

  const [otp, setOtp] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)

  const handleOTPComplete = (otpValue: string) => {
    setOtp(otpValue)
  }

  const handleVerify = async () => {
    console.log("Verifying OTP:", otp)
    if (otp.length !== 6) {
      console.log("OTP length invalid")
      return
    }

    setIsVerifying(true)

    // Simulate API call and redirect after 1s
    setTimeout(async () => {
      setIsVerifying(false)
      console.log("Redirecting to:", redirect)
      await router.push(redirect)
    }, 1000)
  }

  const handleResendCode = () => {
    console.log("Resending OTP to:", email)
    // Implement resend logic here
  }

  const handleChangeEmail = () => {
    router.push("/")
  }

  return (
    <AuthLayout
      studentImage="/images/student-desk.png"
      backgroundImage="/images/background-pattern.png"
      logoText="WORLD OF INTERNS"
    >
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">OTP Verification</h1>

        <p className="text-gray-300 text-sm mb-6">
          Enter OTP code sent to <span className="text-white font-medium">{email}</span>{" "}
          <button onClick={handleChangeEmail} className="text-pink-400 hover:text-pink-300 underline ml-2">
            Change Email
          </button>
        </p>

        <div className="mb-6">
          <OTPInput onComplete={handleOTPComplete} />
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm mb-2">Don't receive OTP code?</p>
          <button onClick={handleResendCode} className="text-pink-400 hover:text-pink-300 text-sm underline">
            Resend Code
          </button>
        </div>

        <Button
          onClick={handleVerify}
          disabled={otp.length !== 6 || isVerifying}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-2 px-4 rounded-lg disabled:opacity-50"
        >
          {isVerifying ? "Verifying..." : "Verify"}
        </Button>

        <p className="mt-6 text-center text-sm text-gray-400">
          {"Don't have an account? "}
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Sign up
          </a>
        </p>
      </div>
    </AuthLayout>
  )
}
