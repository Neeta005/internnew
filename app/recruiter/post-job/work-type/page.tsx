"use client"

import { useState } from "react"
import { JobPostingLayout } from "@/components/layout/job-posting-layout"
import { RecruiterHeader } from "@/components/layout/recruiter-header"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Video, User } from "lucide-react"

export default function WorkTypePage() {
  const [selectedWorkMode, setSelectedWorkMode] = useState("freelancer")
  const [workType, setWorkType] = useState("part-time")
  const [interviewMode, setInterviewMode] = useState("face-to-face")

  return (
    <div className="min-h-screen bg-slate-900">
      <RecruiterHeader userProfile={{ name: "Arun", avatar: "" }} />

      <JobPostingLayout title="Work Type" nextHref="/recruiter/post-job/responsibilities" currentStep={1}>
        <div className="space-y-8">
          <div className="space-y-4">
            <Label className="text-white text-base">Choose your work type</Label>

            <RadioGroup value={selectedWorkMode} onValueChange={setSelectedWorkMode}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Freelancer Card */}
                <Card
                  className={`cursor-pointer transition-colors ${
                    selectedWorkMode === "freelancer"
                      ? "border-red-500 bg-slate-800"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600"
                  }`}
                  onClick={() => setSelectedWorkMode("freelancer")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="freelancer" className="mt-1" />
                      <div className="space-y-2">
                        <h3 className="text-white font-medium">Freelancer</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          This mode is for executing a specific job in a defined period. This has more clear requirement
                          given for delivery to be done.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hybrid Card */}
                <Card
                  className={`cursor-pointer transition-colors ${
                    selectedWorkMode === "hybrid"
                      ? "border-red-500 bg-slate-800"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600"
                  }`}
                  onClick={() => setSelectedWorkMode("hybrid")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="hybrid" className="mt-1" />
                      <div className="space-y-2">
                        <h3 className="text-white font-medium">Hybrid</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          This mode is to select a full time employee who would be working in Office and from home.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Remote Card */}
                <Card
                  className={`cursor-pointer transition-colors ${
                    selectedWorkMode === "remote"
                      ? "border-red-500 bg-slate-800"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600"
                  }`}
                  onClick={() => setSelectedWorkMode("remote")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="remote" className="mt-1" />
                      <div className="space-y-2">
                        <h3 className="text-white font-medium">Remote</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          This mode is to select a full time or parttime employee who would be working from anywhere.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-white text-base">Work Type</Label>

            <RadioGroup value={workType} onValueChange={setWorkType}>
              <div className="flex gap-4">
                <Card
                  className={`cursor-pointer transition-colors ${
                    workType === "part-time"
                      ? "border-red-500 bg-slate-800"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600"
                  }`}
                  onClick={() => setWorkType("part-time")}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="part-time" />
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="text-white">Part-time</span>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer transition-colors ${
                    workType === "full-time"
                      ? "border-red-500 bg-slate-800"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600"
                  }`}
                  onClick={() => setWorkType("full-time")}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="full-time" />
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="text-white">Full-time</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-white text-base">Mode of Interview</Label>

            <RadioGroup value={interviewMode} onValueChange={setInterviewMode}>
              <div className="flex gap-4">
                <Card
                  className={`cursor-pointer transition-colors ${
                    interviewMode === "face-to-face"
                      ? "border-red-500 bg-slate-800"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600"
                  }`}
                  onClick={() => setInterviewMode("face-to-face")}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="face-to-face" />
                      <User className="h-5 w-5 text-gray-400" />
                      <span className="text-white">Face-to-Face</span>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer transition-colors ${
                    interviewMode === "video-call"
                      ? "border-red-500 bg-slate-800"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600"
                  }`}
                  onClick={() => setInterviewMode("video-call")}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="video-call" />
                      <Video className="h-5 w-5 text-gray-400" />
                      <span className="text-white">Face-to-Face</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </div>
        </div>
      </JobPostingLayout>
    </div>
  )
}
