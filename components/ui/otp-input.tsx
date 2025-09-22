"use client"

import { useState, useRef, type KeyboardEvent } from "react"
import { Input } from "./input"

interface OTPInputProps {
  length?: number
  onComplete: (otp: string) => void
  className?: string
}

export function OTPInput({ length = 4, onComplete, className = "" }: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false

    const newOtp = [...otp]
    newOtp[index] = element.value
    setOtp(newOtp)

    // Focus next input
    if (element.value && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }

    // Call onComplete when all fields are filled
    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""))
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div className={`flex gap-3 justify-center ${className}`}>
      {otp.map((digit, index) => (
        <Input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 text-center text-lg font-semibold bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      ))}
    </div>
  )
}
