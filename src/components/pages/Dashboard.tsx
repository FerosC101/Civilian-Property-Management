import React from "react";
import Sidebar from "../Sidebar";
import ProfileHeader from "../ProfileHeader";
import RoomBooking from "../RoomBooking";

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

                    {/* Room Booking Section */}
                    <div className="mb-6">
                        <RoomBooking />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;