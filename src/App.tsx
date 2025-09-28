import React, { useState } from "react";
import Dashboard from "./components/pages/Dashboard";
import Analytics from "./components/pages/Analytics";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return <Dashboard currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'analytics':
                return <Analytics currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            default:
                return <Dashboard currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        }
    };

    return renderPage();
};

export default App;