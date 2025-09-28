import React from "react";
import Sidebar from "../Sidebar";
import SendNotification from "../AlertSystemControl/SendNotification";
import UpdatesAndAnnouncements from "../AlertSystemControl/UpdatesAndAnnouncements";
import MailCenter from "../AlertSystemControl/MailCenter";

interface AlertsSystemControlProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const AlertsSystemControl: React.FC<AlertsSystemControlProps> = ({ currentPage, setCurrentPage }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {/* Alerts and System Control Content */}
            <div className="flex-1 bg-gray-50 overflow-auto" style={{ marginLeft: "250px" }}>
                <div className="p-6 pt-12">
                    {/* Page Title and Subtitle */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Alerts & System Control
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Monitor alerts and control facility systems
                        </p>
                    </div>

                    {/* Main Content Layout - Matching the reference image exactly */}
                    <div style={{display: 'flex', gap: '24px', alignItems: 'flex-start'}}>
                        {/* Left column - SendNotification and UpdatesAndAnnouncements stacked */}
                        <div style={{flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px'}}>
                            <SendNotification />
                            <UpdatesAndAnnouncements />
                        </div>

                        {/* Right column - MailCenter */}
                        <div style={{flex: '1', minWidth: '0'}}>
                            <MailCenter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertsSystemControl;