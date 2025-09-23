"use client"

import { useState } from "react"
import { JobPostingLayout } from "@/components/layout/job-posting-layout"
import { RecruiterHeader } from "@/components/layout/recruiter-header"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Link,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Type,
  AlignLeft,
  MoreHorizontal,
  Info,
} from "lucide-react"

export default function ResponsibilitiesPage() {
  const [trainingProvided, setTrainingProvided] = useState(false)
  const [offerLetterProvided, setOfferLetterProvided] = useState(false)
  const [experienceCertificate, setExperienceCertificate] = useState(false)
  const [stipend, setStipend] = useState("")
  const [stipendCurrency, setStipendCurrency] = useState("Currency")
  const [bonus, setBonus] = useState("")
  const [bonusCurrency, setBonusCurrency] = useState("Currency")

  return (
    <div className="min-h-screen bg-slate-900">
      <RecruiterHeader userProfile={{ name: "Arun", avatar: "" }} />

      <JobPostingLayout title="Offers & Responsibilities" nextHref="/recruiter/post-job/location" currentStep={4}>
        <div className="space-y-8">
          {/* Roles & Responsibilities */}
          <div className="space-y-3">
            <Label className="text-white text-base">Roles & Responsibilities</Label>

            {/* Rich Text Editor Toolbar */}
            <div className="bg-slate-800 border border-slate-700 rounded-t-md">
              <div className="flex items-center gap-1 p-2 border-b border-slate-700">
                <button className="p-1 hover:bg-slate-700 rounded">
                  <Undo className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded">
                  <Redo className="h-4 w-4 text-gray-400" />
                </button>
                <div className="w-px h-4 bg-slate-600 mx-1" />

                <Select defaultValue="normal">
                  <SelectTrigger className="w-32 h-8 bg-transparent border-none text-gray-400 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal text</SelectItem>
                    <SelectItem value="heading1">Heading 1</SelectItem>
                    <SelectItem value="heading2">Heading 2</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="font">
                  <SelectTrigger className="w-8 h-8 bg-transparent border-none">
                    <Type className="h-4 w-4 text-gray-400" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="font">Font</SelectItem>
                  </SelectContent>
                </Select>

                <div className="w-px h-4 bg-slate-600 mx-1" />

                <button className="p-1 hover:bg-slate-700 rounded">
                  <Bold className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded">
                  <Italic className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded">
                  <Underline className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded">
                  <Strikethrough className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded">
                  <Code className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded">
                  <Link className="h-4 w-4 text-gray-400" />
                </button>

                <div className="w-px h-4 bg-slate-600 mx-1" />

                <button className="p-1 hover:bg-slate-700 rounded">
                  <List className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded">
                  <ListOrdered className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded">
                  <Quote className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded">
                  <AlignLeft className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-slate-700 rounded">
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </button>
              </div>

              {/* Editor Content Area */}
              <div className="h-48 p-4 bg-slate-800 rounded-b-md">
                <div className="h-full w-full text-gray-400 text-sm">{/* Editor content area */}</div>
              </div>
            </div>
          </div>

          {/* Toggle Options */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Label className="text-white text-base">Training will be provided</Label>
              <Switch
                checked={trainingProvided}
                onCheckedChange={setTrainingProvided}
                className="data-[state=checked]:bg-red-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-white text-base">Offer Letter will be provided</Label>
              <Switch
                checked={offerLetterProvided}
                onCheckedChange={setOfferLetterProvided}
                className="data-[state=checked]:bg-red-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-white text-base">Experience certificate will be provided</Label>
              <Switch
                checked={experienceCertificate}
                onCheckedChange={setExperienceCertificate}
                className="data-[state=checked]:bg-red-500"
              />
            </div>
          </div>

          {/* Stipend/month */}
          <div className="space-y-3">
            <Label className="text-white text-base">Stipend/month</Label>
            <div className="flex gap-3">
              <Input
                value={stipend}
                onChange={(e) => setStipend(e.target.value)}
                placeholder="Textfield"
                className="bg-slate-800 border-red-500 text-white flex-1"
              />
              <Select value={stipendCurrency} onValueChange={setStipendCurrency}>
                <SelectTrigger className="w-32 bg-slate-800 border-red-500 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="Currency" className="text-white">
                    Currency
                  </SelectItem>
                  <SelectItem value="USD" className="text-white">
                    USD
                  </SelectItem>
                  <SelectItem value="INR" className="text-white">
                    INR
                  </SelectItem>
                  <SelectItem value="EUR" className="text-white">
                    EUR
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Bonus */}
          <div className="space-y-3">
            <Label className="text-white text-base">Bonus</Label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Input
                  value={bonus}
                  onChange={(e) => setBonus(e.target.value)}
                  placeholder="Textfield"
                  className="bg-slate-800 border-red-500 text-white pr-10"
                />
                <Info className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Select value={bonusCurrency} onValueChange={setBonusCurrency}>
                <SelectTrigger className="w-32 bg-slate-800 border-red-500 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="Currency" className="text-white">
                    Currency
                  </SelectItem>
                  <SelectItem value="USD" className="text-white">
                    USD
                  </SelectItem>
                  <SelectItem value="INR" className="text-white">
                    INR
                  </SelectItem>
                  <SelectItem value="EUR" className="text-white">
                    EUR
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </JobPostingLayout>
    </div>
  )
}
