import React from "react";
import "./DatabaseStatus.css";

const DatabaseStatus: React.FC = () => {
    const dbData = {
        status: "Online",
        uptime: "99.8%",
        connections: 127,
        maxConnections: 500,
        queries: 15420,
        avgResponseTime: "2.3ms",
        storage: {
            used: "2.4GB",
            total: "50GB",
            percentage: 4.8
        },
        backups: {
            lastBackup: "2 hours ago",
            nextBackup: "in 4 hours",
            status: "Scheduled"
        },
        performance: {
            cpu: 18,
            memory: 34,
            disk: 12
        }
    };

    return (
        <div className="database-status-card">
            {/* Card Header */}
            <div className="database-status-header">
                <h3>Database Status</h3>
            </div>

            {/* Card Body */}
            <div className="database-status-content">
                {/* Status Overview */}
                <div className="db-overview">
                    <div className="db-status">
                        <span className="status-indicator online"></span>
                        <div className="status-info">
                            <span className="status-label">Status</span>
                            <span className="status-value">{dbData.status}</span>
                        </div>
                        <div className="uptime-info">
                            <span className="uptime-label">Uptime</span>
                            <span className="uptime-value">{dbData.uptime}</span>
                        </div>
                    </div>
                </div>

                {/* Connections */}
                <div className="db-section">
                    <div className="section-header">
                        <span className="section-title">Connections</span>
                    </div>
                    <div className="connection-info">
                        <div className="connection-bar">
                            <div
                                className="connection-fill"
                                style={{width: `${(dbData.connections / dbData.maxConnections) * 100}%`}}
                            ></div>
                        </div>
                        <div className="connection-stats">
                            <span className="current">{dbData.connections}</span>
                            <span className="separator">/</span>
                            <span className="max">{dbData.maxConnections}</span>
                        </div>
                    </div>
                </div>

                {/* Performance Metrics */}
                <div className="db-section">
                    <div className="section-header">
                        <span className="section-title">Performance</span>
                    </div>
                    <div className="metrics">
                        <div className="metric-item">
                            <span className="metric-label">CPU</span>
                            <span className="metric-value">{dbData.performance.cpu}%</span>
                        </div>
                        <div className="metric-item">
                            <span className="metric-label">Memory</span>
                            <span className="metric-value">{dbData.performance.memory}%</span>
                        </div>
                        <div className="metric-item">
                            <span className="metric-label">Disk I/O</span>
                            <span className="metric-value">{dbData.performance.disk}%</span>
                        </div>
                    </div>
                </div>

                {/* Storage & Backup */}
                <div className="db-section">
                    <div className="section-header">
                        <span className="section-title">Storage</span>
                    </div>
                    <div className="storage-info">
                        <div className="storage-stats">
                            <span className="storage-used">{dbData.storage.used}</span>
                            <span className="storage-separator"> / </span>
                            <span className="storage-total">{dbData.storage.total}</span>
                        </div>
                        <div className="storage-bar">
                            <div
                                className="storage-fill"
                                style={{width: `${dbData.storage.percentage}%`}}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Response Time */}
                <div className="db-footer">
                    <div className="footer-stat">
                        <span className="footer-label">Avg Response</span>
                        <span className="footer-value response-time">{dbData.avgResponseTime}</span>
                    </div>
                    <div className="footer-stat">
                        <span className="footer-label">Queries/min</span>
                        <span className="footer-value queries">{dbData.queries.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatabaseStatus;