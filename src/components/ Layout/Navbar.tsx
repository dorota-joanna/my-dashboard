export default function Navbar() {
    return (
      <nav className="bg-teal-500 text-white h-16 flex items-center px-4 shadow">
        <h1 className="text-xl font-bold">My App</h1>
        <div className="ml-auto space-x-4">
          <button className="hover:bg-blue-500 px-3 py-1 rounded">Profile</button>
          <button className="hover:bg-blue-500 px-3 py-1 rounded">Logout</button>
        </div>
      </nav>
    );
  }