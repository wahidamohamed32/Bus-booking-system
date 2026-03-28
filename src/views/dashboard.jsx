import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BusCard from "../components/buscard";

function Dashboard() {
  const navigate = useNavigate();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (fromLocation && toLocation && travelDate) {
      navigate('/seats');
    } else {
      alert("Please fill in all search details to find a bus.");
    }
  };

  return (
    <div className="min-h-full bg-slate-50 relative pb-16">
      {/* Hero Section */}
      <div className="relative bg-blue-700 h-[400px] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            Find Your Next Destination
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-light drop-shadow-sm">
            Comfortable, reliable, and premium bus travel at your fingertips.
          </p>
        </div>
      </div>

      {/* Search Widget */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-16 z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Leaving From</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="City or Stop" 
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
            </div>

            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Going To</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="City or Stop" 
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
            </div>

            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date of Travel</label>
              <div className="relative">
                <input 
                  type="date" 
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-700"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <button 
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow border-none transition-all focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Search Buses
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 sm:text-center">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div 
            onClick={() => navigate("/seats")}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col items-center text-center transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Book a Seat</h3>
            <p className="text-gray-500">Pick your favorite seat and reserve your journey effortlessly.</p>
          </div>

          <div 
            onClick={() => navigate("/my-bookings")}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col items-center text-center transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">My Bookings</h3>
            <p className="text-gray-500">View and manage all your past and upcoming ticket reservations.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col items-center text-center transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Update Profile</h3>
            <p className="text-gray-500">Manage your personal information, preferences and payment methods.</p>
          </div>

        </div>
      </div>

      {/* Available Buses Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-20">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Available Buses Today</h2>
            <p className="text-gray-500 mt-1">Live tracker for departures and available seats</p>
          </div>
          <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">View All Routes</button>
        </div>
        
        <div className="space-y-4">
          <BusCard 
            busName="EasyCoach Express" 
            from="Nairobi" 
            to="Mombasa" 
            departureTime="08:00 AM" 
            arrivalTime="04:30 PM" 
            availableSeats={14} 
            price="2,500" 
          />
          <BusCard 
            busName="Modern Coast" 
            from="Kisumu" 
            to="Nairobi" 
            departureTime="09:30 AM" 
            arrivalTime="05:00 PM" 
            availableSeats={8} 
            price="2,000" 
          />
          <BusCard 
            busName="Tahmeed Coach" 
            from="Eldoret" 
            to="Nakuru" 
            departureTime="01:15 PM" 
            arrivalTime="04:00 PM" 
            availableSeats={22} 
            price="1,200" 
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;