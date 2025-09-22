export function RecruiterDashboardContent() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Recruiter Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Active Jobs</h2>
          <div className="text-3xl font-bold text-green-400">8</div>
          <p className="text-gray-400 text-sm mt-2">Currently hiring positions</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Applications</h2>
          <div className="text-3xl font-bold text-blue-400">156</div>
          <p className="text-gray-400 text-sm mt-2">Total applications received</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Interviews</h2>
          <div className="text-3xl font-bold text-yellow-400">23</div>
          <p className="text-gray-400 text-sm mt-2">Scheduled this week</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Hired</h2>
          <div className="text-3xl font-bold text-purple-400">12</div>
          <p className="text-gray-400 text-sm mt-2">Successful hires this month</p>
        </div>
      </div>
    </div>
  )
}
