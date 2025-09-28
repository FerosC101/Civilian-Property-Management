import React from "react";
import Sidebar from "../Sidebar";
import ProfileHeader from "../ProfileHeader";
import RoomBooking from "../RoomBooking";
import BookingDetails from "../BookingDetails";
import StatusIndicators from "../StatusIndicators";

const Dashboard: React.FC = () => {
    const handleQuickBook = () => {
        console.log("Quick Book clicked");
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Dashboard Content */}
            <div className="flex-1 bg-orange-50 overflow-auto" style={{ marginLeft: '250px' }}>
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

                    {/* Main content layout - Room Booking on left, Status Indicators on right */}
                    <div className="flex">
                        {/* Left side - Room Booking and Booking Details */}
                        <div className="flex flex-col">
                            <RoomBooking />
                            <BookingDetails />
                        </div>

                        {/* Right side - Status Indicators */}
                        <StatusIndicators />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;