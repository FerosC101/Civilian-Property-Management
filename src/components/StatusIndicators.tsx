import React from 'react';
import './StatusIndicators.css';

const StatusIndicators: React.FC = () => {
    return (
        <div className="status-indicators-container">
            <div className="indicators-grid">
                {/* IoT Mesh Card */}
                <div className="indicator-card iot-mesh">
                    <div className="card-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="card-title">IoT Mesh</h3>
                    <div className="card-content">
                        <div className="status-item">
                            <span className="status-label">Network Status:</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">47 Nodes Active</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">Mesh Stable</span>
                        </div>
                    </div>
                </div>

                {/* Flood Monitor Card */}
                <div className="indicator-card flood-monitor">
                    <div className="card-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 16.5C7 16.5 9 14.5 12 16.5S17 16.5 17 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M7 12.5C7 12.5 9 10.5 12 12.5S17 12.5 17 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M7 8.5C7 8.5 9 6.5 12 8.5S17 8.5 17 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <h3 className="card-title">Flood Monitor</h3>
                    <div className="card-content">
                        <div className="status-item">
                            <span className="status-label">Water Levels:</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">River: 2.5ft</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">Streets: Normal</span>
                        </div>
                    </div>
                </div>

                {/* Crowd Flow Card */}
                <div className="indicator-card crowd-flow">
                    <div className="card-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="card-title">Crowd Flow</h3>
                    <div className="card-content">
                        <div className="status-item">
                            <span className="status-label">Density Map:</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">Low Density</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">Max Area: Medium</span>
                        </div>
                    </div>
                </div>

                {/* Building Status Card */}
                <div className="indicator-card building-status">
                    <div className="card-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5 21V7L12 3L19 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 15V15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 15V15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="card-title">Building Status</h3>
                    <div className="card-content">
                        <div className="status-item">
                            <span className="status-label">Health Status:</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">All Stable</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">No Stress</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusIndicators;