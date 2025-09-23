"use client"

import { useState } from "react"
import { JobPostingLayout } from "@/components/layout/job-posting-layout"
import { RecruiterHeader } from "@/components/layout/recruiter-header"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Plus, Link, FileText, AlignLeft, CheckSquare } from "lucide-react"

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<string[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddQuestions = () => {
    setIsModalOpen(true)
  }

  const handleQuestionTypeSelect = (type: string) => {
    console.log(`Selected question type: ${type}`)
    setIsModalOpen(false)
    // TODO: Navigate to specific question creation page based on type
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <RecruiterHeader userProfile={{ name: "Arun", avatar: "" }} />

      <JobPostingLayout
        title="Questions to Filter Candidates"
        nextHref="/recruiter/post-job/interview-details"
        currentStep={5}
      >
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8">
          {/* Question Mark Icon */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-6xl font-bold text-white">?</span>
            </div>
            {/* Decorative elements around the question mark */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-blue-300 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-blue-500 rounded-full opacity-50"></div>
          </div>

          {/* No Questions State */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-300">No Question</h2>
            <p className="text-gray-400 text-lg">You have no question added yet</p>
          </div>

          {/* Add Questions Button */}
          <Button
            onClick={handleAddQuestions}
            className="bg-slate-700 hover:bg-slate-600 text-white border border-gray-600 px-8 py-3 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Add Questions
          </Button>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-slate-800 border-slate-700 max-w-md">
            <DialogHeader>
              <DialogTitle className="text-white text-xl font-semibold">Select Question Type</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {/* True/False */}
              <button
                onClick={() => handleQuestionTypeSelect("true-false")}
                className="flex flex-col items-center gap-3 p-6 bg-slate-700 hover:bg-slate-600 rounded-lg border border-slate-600 transition-colors group"
              >
                <Link className="h-8 w-8 text-gray-300 group-hover:text-white" />
                <span className="text-gray-300 group-hover:text-white font-medium">True/False</span>
              </button>

              {/* Single Word */}
              <button
                onClick={() => handleQuestionTypeSelect("single-word")}
                className="flex flex-col items-center gap-3 p-6 bg-slate-700 hover:bg-slate-600 rounded-lg border border-slate-600 transition-colors group"
              >
                <FileText className="h-8 w-8 text-gray-300 group-hover:text-white" />
                <span className="text-gray-300 group-hover:text-white font-medium">Single Word</span>
              </button>

              {/* Long Question */}
              <button
                onClick={() => handleQuestionTypeSelect("long-question")}
                className="flex flex-col items-center gap-3 p-6 bg-slate-700 hover:bg-slate-600 rounded-lg border border-slate-600 transition-colors group"
              >
                <AlignLeft className="h-8 w-8 text-gray-300 group-hover:text-white" />
                <span className="text-gray-300 group-hover:text-white font-medium">Long Question</span>
              </button>

              {/* Multiple Choice */}
              <button
                onClick={() => handleQuestionTypeSelect("multiple-choice")}
                className="flex flex-col items-center gap-3 p-6 bg-slate-700 hover:bg-slate-600 rounded-lg border border-slate-600 transition-colors group"
              >
                <CheckSquare className="h-8 w-8 text-gray-300 group-hover:text-white" />
                <span className="text-gray-300 group-hover:text-white font-medium">Multiple Choice</span>
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </JobPostingLayout>
    </div>
  )
}
