import { RecruiterLayout } from "@/components/layout/recruiter-layout"
import { RecruiterDashboardContent } from "@/components/pages/recruiter/recruiter-dashboard-content"

export default function RecruiterDashboardPage() {
  return (
    <RecruiterLayout userProfile={{ name: "Jane Smith", avatar: "" }}>
      <RecruiterDashboardContent />
    </RecruiterLayout>
  )
}
