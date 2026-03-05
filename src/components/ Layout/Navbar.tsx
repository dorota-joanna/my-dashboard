import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="bg-teal-500 text-white h-16 flex items-center px-4 shadow">
        <h1 className="text-xl font-bold">My App</h1>
        <div className="ml-auto space-x-4">
          <button className="hover:bg-blue-500 px-3 py-1 rounded">Profile</button>
          <Link
            to="/login"
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >Login
        </Link>
          {/* <button className="hover:bg-blue-500 px-3 py-1 rounded">Login</button> */}
        </div>
      </nav>
    );
  }