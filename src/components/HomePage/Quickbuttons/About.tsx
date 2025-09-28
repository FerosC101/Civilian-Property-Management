import React from 'react';
import './About.css';

const About: React.FC = () => {
    const handleAboutClick = () => {
        console.log('About CIVILIAN clicked - showing app info, mission & support');
    };

    return (
        <div className="about-card" onClick={handleAboutClick}>
            <div className="card-header">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>About CIVILIAN</h3>
            </div>
            <div className="card-content">
                <p className="card-subtitle">App info, mission & support</p>
            </div>
        </div>
    );
};

export default About;