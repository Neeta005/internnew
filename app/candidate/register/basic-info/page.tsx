import { PageLayout } from "@/components/layout/page-layout"
import { CandidateBasicInfoContent } from "@/components/pages/candidate/candidate-basic-info-content"
import { candidateNavigationItems } from "@/lib/data"

export default function BasicInfoPage() {
  return (
    <PageLayout navigationItems={candidateNavigationItems}>
      <CandidateBasicInfoContent />
    </PageLayout>
  )
}
