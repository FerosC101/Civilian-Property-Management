import { Home, Monitor, BarChart3, Bell, Settings } from "lucide-react"; // minimalist icons
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-screen w-60 bg-white border-r border-gray-200 flex flex-col">
            <div className="h-20 flex items-center justify-center border-b border-gray-200">
                <span className="text-blue-600 font-bold text-lg">LOGO</span>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-4 text-gray-700">
                <Link
                    to="/"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                >
                    <Home size={20} />
                    <span>Home Page</span>
                </Link>

                <Link
                    to="/monitoring"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                >
                    <Monitor size={20} />
                    <span>Room Monitoring</span>
                </Link>

                <Link
                    to="/dashboard"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                >
                    <BarChart3 size={20} />
                    <span>Dashboard & Analytics</span>
                </Link>

                <Link
                    to="/alerts"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                >
                    <Bell size={20} />
                    <span>Alerts & Control</span>
                </Link>

                <Link
                    to="/admin"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                >
                    <Settings size={20} />
                    <span>Admin & Facility</span>
                </Link>
            </nav>

            {/* Profile Section */}
            <div className="h-16 border-t border-gray-200 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    U
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
