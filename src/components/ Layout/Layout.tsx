import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import LoginPage from '../../features/auth/LoginPage';
import Dashboard from './Dashboard';

const Layout: React.FC = () => {
    return (
        <>
            <Navbar />
                <div className="flex flex-col h-screen">
                <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-50">
                    <Routes>
                        <Route path="/" element={<Dashboard />} /> {/* default page */}
                    </Routes>
                </main>
                </div>
            </div>
        </>
    );
}

export default Layout