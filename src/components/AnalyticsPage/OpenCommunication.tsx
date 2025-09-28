import React from "react";
import "./OpenCommunication.css";

const OpenCommunication: React.FC = () => {
    const communicationData = {
        activeChannels: 12,
        onlineUsers: 48,
        messagesTotal: 1247,
        messagesUnread: 5,
        lastActivity: "2 minutes ago",
        channels: [
            { name: "General", users: 32, status: "active" },
            { name: "Maintenance", users: 8, status: "active" },
            { name: "Emergency", users: 15, status: "idle" },
            { name: "Announcements", users: 45, status: "active" }
        ]
    };

    return (
        <div className="open-communication-card">
            {/* Card Header */}
            <div className="open-communication-header">
                <h3>Open communication</h3>
            </div>

            {/* Card Body */}
            <div className="open-communication-content">
                {/* Stats Overview */}
                <div className="comm-stats">
                    <div className="stat-item">
                        <span className="stat-value">{communicationData.activeChannels}</span>
                        <span className="stat-label">Active Channels</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value online">{communicationData.onlineUsers}</span>
                        <span className="stat-label">Online Users</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{communicationData.messagesUnread}</span>
                        <span className="stat-label">Unread</span>
                    </div>
                </div>

                {/* Channel List */}
                <div className="channel-list">
                    <div className="channel-header">
                        <span className="channel-title">Channels</span>
                        <span className="last-activity">Last: {communicationData.lastActivity}</span>
                    </div>
                    {communicationData.channels.map((channel, index) => (
                        <div key={index} className={`channel-item ${channel.status}`}>
                            <div className="channel-info">
                                <span className="channel-name">#{channel.name}</span>
                                <span className="channel-users">{channel.users} users</span>
                            </div>
                            <div className={`channel-status ${channel.status}`}>
                                <div className="status-dot"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Summary */}
                <div className="message-summary">
                    <div className="summary-item">
                        <span className="summary-label">Total Messages:</span>
                        <span className="summary-value">{communicationData.messagesTotal.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenCommunication;