"use client"

import { JobPostingLayout } from "@/components/layout/job-posting-layout"
import { RecruiterHeader } from "@/components/layout/recruiter-header"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function InterviewDetailsPage() {
  const [interviewMethod, setInterviewMethod] = useState("")

  return (
    <div className="min-h-screen bg-slate-900">
      <RecruiterHeader userProfile={{ name: "Arun", avatar: "" }} />

      <JobPostingLayout
        title="Interview Details"
        nextHref="/recruiter/post-job/review"
        nextText="Review"
        currentStep={6}
      >
        <div className="space-y-8">
          <div className="text-gray-300 text-sm leading-relaxed">
            Below sections will not seen by the candidates. We collect data to help your interview process.
          </div>

          <div className="space-y-4">
            <label className="text-white text-base font-medium">Explain your interview method</label>

            <Textarea
              placeholder="Text field"
              value={interviewMethod}
              onChange={(e) => setInterviewMethod(e.target.value)}
              className="min-h-[200px] bg-slate-800 border-red-500 border-2 text-white placeholder:text-gray-400 resize-none focus:border-red-400 focus:ring-red-400"
            />
          </div>
        </div>
      </JobPostingLayout>
    </div>
  )
}
