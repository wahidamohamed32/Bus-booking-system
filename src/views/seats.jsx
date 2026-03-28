import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Constants for our simulated bus
const COLUMNS = ['A', 'B', 'C', 'D'];
const ROWS = 10;
const SEAT_PRICE = 2500; // In Kenyan Shillings

function Seats() {
  const navigate = useNavigate();
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Generate simulated seat map on mount
  useEffect(() => {
    const generatedSeats = [];
    for (let i = 1; i <= ROWS; i++) {
      COLUMNS.forEach(col => {
        // Deterministically mark some seats as booked for visual demonstration
        const isBooked = 
          (i % 3 === 0 && col === 'B') || 
          (i === 2) || 
          (i === 7 && col === 'C') || 
          (i === 8 && col === 'D') || 
          (i === 10 && (col === 'A' || col === 'B'));
          
        generatedSeats.push({
          id: `${i}${col}`,
          seat_number: `${i}${col}`,
          status: isBooked ? 'booked' : 'available'
        });
      });
    }
    setSeats(generatedSeats);
  }, []);

  const toggleSeat = (seatId) => {
    const targetSeat = seats.find(s => s.id === seatId);
    if (!targetSeat || targetSeat.status === 'booked') return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleCheckout = () => {
    if (selectedSeats.length === 0) return;
    setIsProcessing(true);
    // Simulate API delay for payment/checkout
    setTimeout(() => {
      alert(`Successfully booked ${selectedSeats.length} seats for KSh ${(selectedSeats.length * SEAT_PRICE).toLocaleString()}!`);
      setIsProcessing(false);
      navigate('/dashboard');
    }, 1500);
  };

  const renderSeat = (seatId) => {
    const seat = seats.find(s => s.id === seatId);
    if (!seat) return null;

    const isSelected = selectedSeats.includes(seatId);
    const isBooked = seat.status === 'booked';

    let baseClasses = "relative w-12 h-14 rounded-t-xl rounded-b-sm border-2 flex items-center justify-center font-bold text-sm transition-all duration-200 select-none ";
    
    if (isBooked) {
      baseClasses += "bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed opacity-70";
    } else if (isSelected) {
      baseClasses += "bg-blue-600 border-blue-700 text-white shadow-lg transform scale-105";
    } else {
      baseClasses += "bg-white border-gray-300 text-gray-700 hover:border-blue-500 hover:shadow-md cursor-pointer";
    }

    return (
      <div 
        key={seatId} 
        onClick={() => toggleSeat(seatId)}
        className={baseClasses}
        title={isBooked ? `Seat ${seatId} Booked` : `Seat ${seatId} Available`}
      >
        <div className="absolute top-1 w-8 h-2 rounded-full opacity-20 bg-black"></div>
        {seatId}
      </div>
    );
  };

  const totalPrice = selectedSeats.length * SEAT_PRICE;

  return (
    <div className="min-h-screen bg-slate-50 relative pb-32">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Select Your Seats</h1>
            <p className="text-gray-500 mt-1">Nairobi → Mombasa • Today at 08:00 AM</p>
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

      <div className="max-w-4xl mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-8">
        
        {/* Real Bus Schematic Container */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white p-6 md:p-10 rounded-[3rem] shadow-xl border-4 border-gray-200 relative">
            
            {/* Steering Wheel / Driver Area */}
            <div className="flex justify-between items-center border-b-4 border-dashed border-gray-300 pb-8 mb-8">
              <div className="w-14 h-14 rounded-full border-4 border-gray-800 flex items-center justify-center relative">
                <div className="absolute w-10 h-2 bg-gray-800 rounded-full"></div>
                <div className="absolute h-10 w-2 bg-gray-800 rounded-full"></div>
              </div>
              <div className="w-12 h-14 bg-gray-300 rounded-t-xl rounded-b-sm border-2 border-gray-400 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-500">Drvr</span>
              </div>
            </div>

            {/* Aisle & Rows */}
            <div className="flex flex-col gap-4">
              {[...Array(ROWS)].map((_, rIdx) => {
                const rowNum = rIdx + 1;
                return (
                  <div key={rowNum} className="flex justify-between items-center w-full gap-2 md:gap-6">
                    {/* Left Two Seats */}
                    <div className="flex gap-2">
                      {renderSeat(`${rowNum}A`)}
                      {renderSeat(`${rowNum}B`)}
                    </div>
                    
                    {/* Aisle Walkway */}
                    <div className="w-6 md:w-8 flex justify-center">
                      <span className="text-xs font-bold text-gray-400">{rowNum}</span>
                    </div>

                    {/* Right Two Seats */}
                    <div className="flex gap-2">
                      {renderSeat(`${rowNum}C`)}
                      {renderSeat(`${rowNum}D`)}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Bus Rear Wall */}
            <div className="mt-8 pt-4 border-t-4 border-gray-200 text-center">
               <div className="w-32 h-2 bg-red-400 mx-auto rounded-full"></div>
            </div>

          </div>
        </div>

        {/* Legend and Info Sidebar */}
        <div className="w-full lg:w-80">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Seat Legend</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md border-2 bg-white border-gray-300"></div>
                <span className="text-gray-600 font-medium">Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md border-2 bg-blue-600 border-blue-700 shadow-sm"></div>
                <span className="text-gray-900 font-semibold">Selected</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md border-2 bg-gray-200 border-gray-300 opacity-70 flex justify-center items-center">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <span className="text-gray-500 line-through decoration-gray-400">Booked</span>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-1">Travel Info</h4>
              <p className="text-sm text-blue-700">All seats come with free Wi-Fi and power outlets.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Checkout Bar */}
      {selectedSeats.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 transform transition-transform duration-300 ease-in-out">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  {selectedSeats.length}
                </div>
                <div>
                  <p className="font-bold text-gray-900">Seat{selectedSeats.length > 1 ? 's' : ''} Selected</p>
                  <p className="text-sm text-gray-500 font-medium">{selectedSeats.join(", ")}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full sm:w-auto">
                <div className="text-right hidden sm:block">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Total Amount</p>
                  <h2 className="text-2xl font-extrabold text-gray-900">KSh {totalPrice.toLocaleString()}</h2>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all flex items-center justify-center min-w-[200px]"
                >
                  {isProcessing ? (
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    "Proceed to Payment"
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Seats;