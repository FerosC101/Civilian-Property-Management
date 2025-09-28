import React from "react";
import Sidebar from "../Sidebar";
import ProfileHeader from "../HomePage/ProfileHeader.tsx";
import RoomBooking from "../HomePage/RoomBooking.tsx";
import BookingDetails from "../HomePage/BookingDetails.tsx";
import StatusIndicators from "../HomePage/StatusIndicators.tsx";
import CityOverview from "../HomePage/Quickbuttons/CityOverview";
import NewsUpdates from "../HomePage/Quickbuttons/NewsUpdates";
import About from "../HomePage/Quickbuttons/About";
import IoTSubscriptionLogo from "../HomePage/Quickbuttons/IoTSubscriptionLogo";

interface DashboardProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ currentPage, setCurrentPage }) => {
    const handleQuickBook = () => {
        console.log("Quick Book clicked");
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {/* Dashboard Content */}
            <div className="flex-1 bg-orange-50 overflow-auto" style={{marginLeft: '250px'}}>
                {/* Content container with proper spacing from sidebar */}
                <div className="p-6 pt-12">
                    {/* Profile Header positioned at top with margin */}
                    <div className="mb-6">
                        <ProfileHeader
                            userName="Nash Ayelet"
                            userRole="Administrator"
                            building="Residential Privilege"
                            unit="Building A, Unit 205"
                            onQuickBook={handleQuickBook}
                        />
                    </div>

                    {/* Main content area - Left: Booking Components Stacked, Right: Status Indicators */}
                    <div style={{display: 'flex', gap: '24px', alignItems: 'flex-start'}}>
                        {/* Left side - Room Booking and Booking Details stacked vertically */}
                        <div style={{display: 'flex', flexDirection: 'column', gap: '24px', flexShrink: 0}}>
                            <RoomBooking/>
                            <BookingDetails/>
                        </div>

                        {/* Right side - Status Indicators, Additional Components, and Logo */}
                        <div style={{flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px'}}>
                            {/* Status Indicators */}
                            <StatusIndicators/>

                            {/* Bottom section - Cards column and Logo side by side */}
                            <div style={{display: 'flex', gap: '24px', alignItems: 'flex-start'}}>
                                {/* Left side - All three cards stacked vertically */}
                                <div style={{flex: '1', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                    <About/>
                                    <CityOverview/>
                                    <NewsUpdates/>
                                </div>

                                {/* Right side - Large IoT Logo */}
                                <div style={{flexShrink: 0}}>
                                    <IoTSubscriptionLogo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;