import './App.css'
import Navbar from '../components/ Layout/Navbar'
import Sidebar from '../components/ Layout/Sidebar';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold">Main content area</h2>
          <p>content here...</p>
        </main>
      </div>
    </div>
  );
}

export default App
