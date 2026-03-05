import './App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
    return (
        <>
            <Navbar />
                <div className="flex flex-col h-screen">
                <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-50">
                    <h2 className="text-2xl font-semibold">Main content area</h2>
                    <p>content here...</p>
                </main>
                </div>
            </div>
        </>
    );
}

export default Layout