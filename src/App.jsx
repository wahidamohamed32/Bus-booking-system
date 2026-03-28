import Navbar from './components/navbar';
import AppRoutes from './routes/approutes';

function App() {
  return (
    <div className="font-sans text-gray-900 antialiased h-screen overflow-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 overflow-y-auto w-full">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;