import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        <Router>
            <div className="flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 bg-gray-50 min-h-screen">
                    <Routes>
                        <Route path="/" element={<h1 className="p-6">Home Page</h1>} />
                        <Route path="/monitoring" element={<h1 className="p-6">Room Monitoring</h1>} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/alerts" element={<h1 className="p-6">Alerts & System Control</h1>} />
                        <Route path="/admin" element={<h1 className="p-6">Admin Management</h1>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
