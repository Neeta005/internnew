"use client"

interface StatCardProps {
  title: string
  value: string
  change: string
  color: string
  percentage: number
}

function StatCard({ title, value, change, color, percentage }: StatCardProps) {
  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className={`${color} rounded-lg p-6 text-white relative overflow-hidden`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
          <p className="text-sm mt-2 opacity-90">{change}</p>
        </div>
        <div className="relative">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="white"
              strokeWidth="8"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold">+{percentage}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function StatsCards() {
  const stats = [
    {
      title: "Jobs Posted",
      value: "5672",
      change: "+14% inc",
      color: "bg-emerald-500",
      percentage: 74,
    },
    {
      title: "Shortlisted Candidates",
      value: "236",
      change: "+14% inc",
      color: "bg-amber-500",
      percentage: 74,
    },
    {
      title: "Upcoming Interviews",
      value: "3567",
      change: "+14% inc",
      color: "bg-red-500",
      percentage: 74,
    },
    {
      title: "Candidates In-Review",
      value: "2145",
      change: "+14% inc",
      color: "bg-blue-500",
      percentage: 74,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}
