import { useNavigate } from "react-router-dom";

function MyBookings() {
  const navigate = useNavigate();

  // Simulated bookings data
  const bookings = [
    {
      id: "BK-84920",
      route: "Nairobi → Mombasa",
      busName: "EasyCoach Express",
      plateNumber: "KCA 123Z",
      departureTime: "08:00 AM",
      date: "Oct 24, 2024",
      seat: "1B",
      status: "Confirmed",
    },
    {
      id: "BK-84901",
      route: "Kisumu → Nairobi",
      busName: "Modern Coast",
      plateNumber: "KBB 456X",
      departureTime: "09:30 AM",
      date: "Oct 15, 2024",
      seat: "4C",
      status: "Completed",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
            <p className="text-gray-500 mt-1">View and manage your travel history</p>
          </div>
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Dashboard
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="flex flex-col gap-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
              
              {/* Status and ID */}
              <div className="flex-shrink-0 flex flex-col items-start gap-2 w-full md:w-32">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                  ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`
                }>
                  {booking.status}
                </span>
                <span className="text-sm font-mono text-gray-500 font-semibold">#{booking.id}</span>
              </div>

              {/* Main Info */}
              <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:pl-6 md:border-l border-gray-100">
                
                {/* Route & Date */}
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Route & Date</p>
                  <p className="font-bold text-gray-900">{booking.route}</p>
                  <p className="text-sm text-gray-500 font-medium mt-1">{booking.date}</p>
                </div>

                {/* Departure & Vehicle */}
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Departure & Bus</p>
                  <p className="font-bold text-gray-900">{booking.departureTime}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-gray-600">{booking.busName}</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 font-bold px-2 py-0.5 rounded border border-yellow-200">{booking.plateNumber}</span>
                  </div>
                </div>

                {/* Seat Information */}
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Seat Number</p>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 border border-blue-200 rounded-xl flex items-center justify-center font-bold text-xl shadow-inner mt-1">
                    {booking.seat}
                  </div>
                </div>

              </div>

              {/* Actions */}
              {booking.status === 'Confirmed' && (
                <div className="w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <button className="w-full md:w-auto px-6 py-2.5 bg-gray-50 hover:bg-red-50 text-red-600 font-semibold rounded-xl border border-gray-200 hover:border-red-200 transition-colors text-sm">
                    Cancel Trip
                  </button>
                </div>
              )}

            </div>
          ))}

          {bookings.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              <p className="text-gray-500 text-lg font-medium">You don't have any bookings yet.</p>
              <button 
                onClick={() => navigate('/dashboard')}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                Find a bus
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
