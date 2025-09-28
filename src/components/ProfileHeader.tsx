import React from "react";
import "./ProfileHeader.css";

interface ProfileHeaderProps {
    userName: string;
    userRole?: string;
    building?: string;
    unit?: string;
    onQuickBook?: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
                                                         userName,
                                                         userRole = "Administrator",
                                                         building = "Residential Privilege",
                                                         unit = "Building A, Unit 205",
                                                         onQuickBook
                                                     }) => {
    const getInitials = (name: string): string => {
        return name
            .split(" ")
            .map(word => word.charAt(0))
            .join("")
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="profile-header">
            <div className="profile-header-content">
                {/* Left Section - Avatar and Welcome Text */}
                <div className="profile-left-section">
                    {/* Avatar */}
                    <div className="profile-avatar">
                        {getInitials(userName)}
                    </div>

                    {/* User Details */}
                    <div className="profile-details">
                        <h1>WELCOME, {userName.toUpperCase()}!</h1>
                        <p>{building} | {unit}</p>
                    </div>
                </div>

                {/* Right Section - Quick Book Button */}
                <div className="profile-right-section">
                    {onQuickBook && (
                        <button
                            className="quick-book-btn"
                            onClick={onQuickBook}
                        >
                            Quick Book
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;