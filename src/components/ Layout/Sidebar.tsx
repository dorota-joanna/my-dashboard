export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-100 h-screen p-4 border-r">
        <ul className="space-y-2">
          <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Settings</li>
          <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Reports</li>
        </ul>
      </aside>
    );
  }