import React from 'react';
import './NetworkHealth.css';

const NetworkHealth: React.FC = () => {
    return (
        <div className="network-health-card">
            {/* Card Header */}
            <div className="network-health-header">
                <h3>Network Health</h3>
            </div>

            {/* Card Body */}
            <div className="network-health-content">
                {/* Network Diagram */}
                <div className="network-diagram">
                    <svg width="200" height="120" viewBox="0 0 200 120">
                        {/* Connection lines */}
                        <line x1="100" y1="60" x2="60" y2="30" stroke="#10b981" strokeWidth="2" />
                        <line x1="100" y1="60" x2="140" y2="30" stroke="#10b981" strokeWidth="2" />
                        <line x1="100" y1="60" x2="60" y2="90" stroke="#10b981" strokeWidth="2" />
                        <line x1="100" y1="60" x2="140" y2="90" stroke="#10b981" strokeWidth="2" />
                        <line x1="100" y1="60" x2="170" y2="60" stroke="#fbbf24" strokeWidth="2" />

                        {/* Central node (larger) */}
                        <circle cx="100" cy="60" r="12" fill="#10b981" />

                        {/* Connected nodes (green - active) */}
                        <circle cx="60" cy="30" r="8" fill="#10b981" />
                        <circle cx="140" cy="30" r="8" fill="#10b981" />
                        <circle cx="60" cy="90" r="8" fill="#10b981" />
                        <circle cx="140" cy="90" r="8" fill="#10b981" />

                        {/* Warning node (yellow) */}
                        <circle cx="170" cy="60" r="8" fill="#fbbf24" />
                    </svg>
                </div>

                {/* Status List */}
                <div className="network-status-list">
                    <div className="network-status-item active">
                        <span className="status-icon">✓</span>
                        <span className="status-text">247 Active Nodes</span>
                    </div>
                    <div className="network-status-item warning">
                        <span className="status-icon">⚠</span>
                        <span className="status-text">1 Weak Signal</span>
                    </div>
                    <div className="network-status-item offline">
                        <span className="status-icon">✗</span>
                        <span className="status-text">2 Offline</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetworkHealth;