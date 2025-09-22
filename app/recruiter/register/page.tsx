import { PageLayout } from "@/components/layout/page-layout"
import { RecruiterRegisterContent } from "@/components/pages/recruiter/recruiter-register-content"
import { recruiterNavigationItems } from "@/lib/data"

export default function RecruiterRegisterPage() {
  return (
    <PageLayout navigationItems={recruiterNavigationItems}>
      <RecruiterRegisterContent />
    </PageLayout>
  )
}
