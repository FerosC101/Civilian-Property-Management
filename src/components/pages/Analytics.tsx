import React from "react";
import Sidebar from "../Sidebar";
import RealTimeSensorData from "../AnalyticsPage/RealTimeSensorData";
import StatusCards from "../AnalyticsPage/StatusCards";
import NetworkHealth from "../AnalyticsPage/NetworkHealth";
import OpenCommunication from "../AnalyticsPage/OpenCommunication";
import DatabaseStatus from "../AnalyticsPage/DatabaseStatus";
import MonthlyExpense from "../AnalyticsPage/MonthlyExpense";

interface AnalyticsProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ currentPage, setCurrentPage }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {/* Analytics Content */}
            <div className="flex-1 bg-gray-50 overflow-auto" style={{ marginLeft: "250px" }}>
                <div className="p-6 pt-12">
                    {/* Page Title and Subtitle */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Dashboard & Analytics
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Real-time facility and performance insights
                        </p>
                    </div>

                    {/* Main Content Layout - Using inline styles like Dashboard */}
                    <div style={{display: 'flex', gap: '24px', alignItems: 'flex-start'}}>
                        {/* Left side - Sensor Data and bottom components */}
                        <div style={{flex: '2', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            {/* Sensor Data */}
                            <RealTimeSensorData />

                            {/* Bottom Row - Network Health and Monthly Expense */}
                            <div style={{display: 'flex', gap: '20px'}}>
                                {/* Network Health (narrower) */}
                                <div style={{flex: '1'}}>
                                    <NetworkHealth />
                                </div>

                                {/* Monthly Expense (wider for more data) */}
                                <div style={{flex: '2'}}>
                                    <MonthlyExpense />
                                </div>
                            </div>
                        </div>

                        {/* Status Cards (Right side, 1/3 width) */}
                        <div style={{flex: '1', minWidth: '0'}}>
                            <StatusCards />
                            <OpenCommunication />
                            <DatabaseStatus />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;