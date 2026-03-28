import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex-shrink-0 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <span className="text-xl font-bold tracking-tight">Admin Connect</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === "overview" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            <span className="font-semibold text-sm">Overview</span>
          </button>

          <button 
            onClick={() => setActiveTab("buses")}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === "buses" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            <span className="font-semibold text-sm">Manage Buses</span>
          </button>

          <button 
            onClick={() => setActiveTab("bookings")}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === "bookings" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            <span className="font-semibold text-sm">View Bookings</span>
          </button>

          <button 
            onClick={() => setActiveTab("users")}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${activeTab === "users" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            <span className="font-semibold text-sm">Users</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => navigate('/')} 
            className="w-full flex items-center justify-center px-4 py-2 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center text-gray-500">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search anything..." className="bg-transparent border-none focus:outline-none text-sm w-64" />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-gray-500">
              <span className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-sm text-right hidden md:block">
                <div className="font-bold text-gray-800">Admin User</div>
                <div className="text-xs text-gray-500">Superadmin</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-2 border-white shadow-md flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Workspace */}
        <div className="flex-1 overflow-y-auto p-8">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-500 text-sm mt-1">Check the latest metrics and activity for your system.</p>
          </div>

          {/* Statistics Module */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Stat Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Revenue</p>
                <h3 className="text-3xl font-bold text-gray-900">KSh 3,180,500</h3>
                <p className="text-sm text-green-500 font-medium mt-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  12% since last week
                </p>
              </div>
              <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Bookings</p>
                <h3 className="text-3xl font-bold text-gray-900">1,245</h3>
                <p className="text-sm text-green-500 font-medium mt-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  8% since last week
                </p>
              </div>
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Active Buses</p>
                <h3 className="text-3xl font-bold text-gray-900">42</h3>
                <p className="text-sm text-gray-400 font-medium mt-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /></svg>
                  No change
                </p>
              </div>
              <div className="w-14 h-14 bg-yellow-50 text-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">New Users</p>
                <h3 className="text-3xl font-bold text-gray-900">89</h3>
                <p className="text-sm text-green-500 font-medium mt-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  24% since last week
                </p>
              </div>
              <div className="w-14 h-14 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
            </div>

          </div>

          {/* Recent Activity Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-900 text-lg">Recent Bookings</h3>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                    <th className="px-6 py-4 font-medium">Booking ID</th>
                    <th className="px-6 py-4 font-medium">Customer</th>
                    <th className="px-6 py-4 font-medium">Route</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Amount</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-gray-600">#BK-84920</td>
                    <td className="px-6 py-4 font-medium text-gray-900">Sarah Jenkins</td>
                    <td className="px-6 py-4 text-gray-600">Nairobi → Mombasa</td>
                    <td className="px-6 py-4 text-gray-500">Oct 24, 2024</td>
                    <td className="px-6 py-4 font-medium text-gray-900">KSh 5,800</td>
                    <td className="px-6 py-4"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Confirmed</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-gray-600">#BK-84919</td>
                    <td className="px-6 py-4 font-medium text-gray-900">Michael Chen</td>
                    <td className="px-6 py-4 text-gray-600">Kisumu → Nakuru</td>
                    <td className="px-6 py-4 text-gray-500">Oct 24, 2024</td>
                    <td className="px-6 py-4 font-medium text-gray-900">KSh 4,200</td>
                    <td className="px-6 py-4"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Confirmed</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-gray-600">#BK-84918</td>
                    <td className="px-6 py-4 font-medium text-gray-900">Amanda Brooks</td>
                    <td className="px-6 py-4 text-gray-600">Eldoret → Nairobi</td>
                    <td className="px-6 py-4 text-gray-500">Oct 23, 2024</td>
                    <td className="px-6 py-4 font-medium text-gray-900">KSh 7,800</td>
                    <td className="px-6 py-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Pending</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-gray-600">#BK-84917</td>
                    <td className="px-6 py-4 font-medium text-gray-900">David Smith</td>
                    <td className="px-6 py-4 text-gray-600">Mombasa → Malindi</td>
                    <td className="px-6 py-4 text-gray-500">Oct 22, 2024</td>
                    <td className="px-6 py-4 font-medium text-gray-900">KSh 3,600</td>
                    <td className="px-6 py-4"><span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Cancelled</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;