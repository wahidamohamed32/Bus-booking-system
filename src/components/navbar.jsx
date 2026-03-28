import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Highlight active link simple helper
  const isActive = (path) => location.pathname === path;
  
  // Don't render the navbar on the login/register page if desired,
  // but for now we render it everywhere except if there's a specific requirement.
  if (location.pathname === '/' || location.pathname === '/register' || location.pathname === '/admin') {
      return null;
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/dashboard" className="flex items-center gap-2 group">
              <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">BusConnect</span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/dashboard') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600'}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/seats" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/seats') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600'}`}
            >
              Book Seats
            </Link>
            <Link 
              to="/my-bookings" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/my-bookings') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600'}`}
            >
              My Bookings
            </Link>
          </nav>

          {/* User Section / Login / Logout */}
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Log Out
            </Link>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
              U
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;