"use client"

import { useRouter } from "next/navigation"
import { PageLayout } from "@/components/layout/page-layout"
import { RegistrationPageLayout } from "@/components/layout/registration-page-layout"
import { PhoneInput } from "@/components/ui/phone-input"
import { Button } from "@/components/ui/button"
import { candidateNavigationItems } from "@/lib/data"

export default function PhoneVerificationPage() {
  const router = useRouter()

  const handleRequestOTP = () => {
    router.push("/candidate/register/otp-verification")
  }

  return (
    <PageLayout navigationItems={candidateNavigationItems}>
      <RegistrationPageLayout title="Register" nextHref="/candidate/register/otp-verification" currentStep={1}>
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Verify Phone Number</h2>
          <p className="text-gray-400 text-sm">Enter your phone to receive a one-time verification code</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Phone No.</label>
            <PhoneInput />
          </div>

          <div className="text-sm text-green-400">Message has been successfully sent to your Given number.</div>

          <Button onClick={handleRequestOTP} className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:bg-red-600 py-3 rounded-lg font-medium">
            Request OTP
          </Button>
        </div>
      </RegistrationPageLayout>
    </PageLayout>
  )
}
