import React, { useState } from "react";
import Dashboard from "./components/pages/Dashboard";
import Analytics from "./components/pages/Analytics";
import AlertsSystemControl from "./components/pages/AlertSystemControl";
import AccountSettings from "./components/pages/AccountSetting";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return <Dashboard currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'monitoring':
                return <div>Room Monitoring Page - Coming Soon</div>;
            case 'analytics':
                return <Analytics currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'alerts':
                return <AlertsSystemControl currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'admin':
                return <div>Admin Management Page - Coming Soon</div>;
            case 'account':
                return <AccountSettings currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            default:
                return <Dashboard currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        }
    };

    return renderPage();
};

export default App;