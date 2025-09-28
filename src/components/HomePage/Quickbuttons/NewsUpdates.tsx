import React from 'react';
import './NewsUpdates.css';

const NewsUpdates: React.FC = () => {
    const handleNewsUpdatesClick = () => {
        console.log('News & Updates clicked - navigating to city alerts and announcements');
    };

    return (
        <div className="news-updates-card" onClick={handleNewsUpdatesClick}>
            <div className="card-header">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H8C6.89543 2 6 2.89543 6 4V6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 6H2V20C2 21.1046 2.89543 22 4 22C5.10457 22 6 21.1046 6 20V6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 8H18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 12H18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 16H14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <h3>News & Updates</h3>
            </div>
            <div className="card-content">
                <p className="card-subtitle">City alerts & announcements</p>
            </div>
        </div>
    );
};

export default NewsUpdates;
