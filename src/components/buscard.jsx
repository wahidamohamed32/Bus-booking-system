import { useNavigate } from "react-router-dom";

function BusCard({ busName, from, to, departureTime, arrivalTime, availableSeats, price }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full group">
      {/* Route Info */}
      <div className="flex-1 flex items-center justify-between w-full md:w-auto">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold text-gray-900">{departureTime}</p>
          <p className="text-sm font-medium text-gray-500">{from}</p>
        </div>
        
        <div className="flex-1 px-4 flex flex-col items-center">
          <p className="text-xs text-gray-400 mb-1 font-semibold">{busName}</p>
          <div className="w-full flex items-center">
            <div className="h-2 w-2 rounded-full border-2 border-blue-500 bg-white"></div>
            <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-1"></div>
            <div className="bg-blue-50 text-blue-500 rounded-full p-1 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>
            </div>
            <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-1"></div>
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          </div>
          <p className="text-xs text-green-600 font-bold mt-1.5 px-2 py-0.5 bg-green-50 rounded-full">{availableSeats} Seats Available</p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-2xl font-bold text-gray-900">{arrivalTime}</p>
          <p className="text-sm font-medium text-gray-500">{to}</p>
        </div>
      </div>

      {/* Action / Price */}
      <div className="flex flex-row md:flex-col items-center justify-between w-full md:w-auto gap-4 md:gap-2 pl-0 md:pl-6 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0">
        <div className="text-center">
          <p className="text-xs text-gray-500 font-medium">Ticket Price</p>
          <p className="text-2xl font-extrabold text-gray-900">KSh {price}</p>
        </div>
        <button 
          onClick={() => navigate('/seats')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-all shadow-sm hover:shadow active:scale-95 w-full md:w-auto whitespace-nowrap"
        >
          Book Seat
        </button>
      </div>
    </div>
  );
}

export default BusCard;