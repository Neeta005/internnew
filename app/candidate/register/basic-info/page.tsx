"use client"

import { useRouter } from "next/navigation"
import { PageLayout } from "@/components/layout/page-layout"
import { RegistrationPageLayout } from "@/components/layout/registration-page-layout"
import { CandidateBasicInfoContent } from "@/components/pages/candidate/candidate-basic-info-content"
import { candidateNavigationItems } from "@/lib/data"

export default function BasicInfoPage() {
  const router = useRouter()

  return (
    <PageLayout navigationItems={candidateNavigationItems}>
      <RegistrationPageLayout title="Register" nextHref="/candidate/register/educational-details" currentStep={3}>
        <CandidateBasicInfoContent />
      </RegistrationPageLayout>
    </PageLayout>
  )
}
