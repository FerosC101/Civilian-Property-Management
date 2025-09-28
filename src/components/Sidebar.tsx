import React from "react";
import "./Sidebar.css";
import { FaHome, FaTv, FaChartBar, FaBell, FaUserCog, FaUser } from "react-icons/fa";

interface SidebarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
    return (
        <div className="sidebar">
            {/* Header */}
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <div className="logo-placeholder">
                        C
                    </div>
                    <h2>CIVILIAN</h2>
                </div>
                <span className="live-status">Live</span>
            </div>

            {/* Menu */}
            <ul className="sidebar-menu">
                <li
                    className={currentPage === 'home' ? 'active' : ''}
                    onClick={() => setCurrentPage('home')}
                >
                    <FaHome />
                    <span>Home Page</span>
                </li>
                <li>
                    <FaTv />
                    <span>Room Monitoring</span>
                </li>
                <li
                    className={currentPage === 'analytics' ? 'active' : ''}
                    onClick={() => setCurrentPage('analytics')}
                >
                    <FaChartBar />
                    <span>Dashboard & Analytics</span>
                </li>
                <li>
                    <FaBell />
                    <span>Alerts and System Control</span>
                </li>
                <li>
                    <FaUserCog />
                    <span>Admin Management and Facility Monitor</span>
                </li>
            </ul>

            {/* Footer - User Profile */}
            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="user-avatar">
                        <FaUser />
                    </div>
                    <div className="user-info">
                        <p className="user-name">John Doe</p>
                        <p className="user-role">Account Type</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;