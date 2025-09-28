import React from 'react';
import './IoTSubscriptionLogo.css';

const IoTSubscriptionLogo: React.FC = () => {
    const handleLogoClick = () => {
        console.log('IoT Subscription Logo clicked - viewing subscription plan');
    };

    return (
        <div className="iot-logo-container" onClick={handleLogoClick}>
            <div className="card-header">
                <h3>IoT Subscription</h3>
            </div>
            <div className="card-content">
                <div className="iot-logo">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Building/City part */}
                        <rect x="20" y="50" width="12" height="30" fill="currentColor" rx="2"/>
                        <rect x="35" y="40" width="12" height="40" fill="currentColor" rx="2"/>
                        <rect x="50" y="45" width="12" height="35" fill="currentColor" rx="2"/>
                        <rect x="65" y="35" width="12" height="45" fill="currentColor" rx="2"/>

                        {/* Brain/Circuit part */}
                        <path d="M25 25 Q30 15 40 20 Q50 10 60 20 Q70 15 75 25 Q70 35 60 30 Q50 40 40 30 Q30 35 25 25Z" fill="currentColor"/>

                        {/* Circuit nodes */}
                        <circle cx="30" cy="25" r="2" fill="currentColor"/>
                        <circle cx="45" cy="20" r="2" fill="currentColor"/>
                        <circle cx="60" cy="25" r="2" fill="currentColor"/>
                        <circle cx="70" cy="30" r="2" fill="currentColor"/>

                        {/* Connection lines */}
                        <path d="M30 25 L35 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M45 20 L50 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M60 25 L65 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M40 30 L45 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className="subscription-text">
                    View Subscription Plan
                </div>
            </div>
        </div>
    );
};

export default IoTSubscriptionLogo;