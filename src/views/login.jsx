import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bgImage from "../assets/bus_bg.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call for now to allow navigation testing
      // const res = await axios.post("http://localhost:5000/api/login", { email, password });
      setTimeout(() => {
        setLoading(false);
        // Replace alert with proper navigation
        navigate("/dashboard");
      }, 800);
      
    } catch (error) {
      alert("Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-gray-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Login Card (Glassmorphism) */}
      <div className="relative z-10 w-full max-w-md p-8 sm:p-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">Welcome Back</h2>
          <p className="text-gray-300 text-sm">Sign in to manage your bus bookings</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-gray-200">Password</label>
              <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            disabled={loading}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex justify-center items-center disabled:opacity-70"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-300">
          Don't have an account?{' '}
          <a href="/register" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
            Sign up now
          </a>
        </p>

        <div className="mt-6 text-center">
          <button 
            type="button" 
            onClick={() => navigate('/admin')}
            className="text-xs text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
          >
            Log in as Administrator
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;