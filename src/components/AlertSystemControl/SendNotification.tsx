import React, { useState } from 'react';
import './SendNotification.css';

const SendNotification: React.FC = () => {
    const [notificationData, setNotificationData] = useState({
        targetRecipients: 'All Staff Member',
        notificationType: 'System Maintenance Alert',
        messageContent: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setNotificationData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleScheduleSend = () => {
        console.log('Schedule send notification', notificationData);
    };

    const handleSendNow = () => {
        console.log('Send notification now', notificationData);
    };

    return (
        <div className="send-notification-container">
            <div className="send-notification-section">
                <div className="section-header">
                    <h2>SEND NOTIFICATION</h2>
                </div>

                <div className="send-notification-content">
                    <div className="notification-form">
                        <div className="form-group">
                            <label className="form-label">Target Recipients</label>
                            <select
                                value={notificationData.targetRecipients}
                                onChange={(e) => handleInputChange('targetRecipients', e.target.value)}
                                className="form-select"
                            >
                                <option value="All Staff Member">All Staff Member</option>
                                <option value="Management Only">Management Only</option>
                                <option value="Residents">Residents</option>
                                <option value="Security Team">Security Team</option>
                                <option value="Maintenance Team">Maintenance Team</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Notification Type</label>
                            <select
                                value={notificationData.notificationType}
                                onChange={(e) => handleInputChange('notificationType', e.target.value)}
                                className="form-select"
                            >
                                <option value="System Maintenance Alert">System Maintenance Alert</option>
                                <option value="Emergency Alert">Emergency Alert</option>
                                <option value="General Announcement">General Announcement</option>
                                <option value="Security Alert">Security Alert</option>
                                <option value="Building Update">Building Update</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Message Content</label>
                            <textarea
                                value={notificationData.messageContent}
                                onChange={(e) => handleInputChange('messageContent', e.target.value)}
                                placeholder="Enter your notification message here..."
                                className="form-textarea"
                                rows={4}
                            />
                        </div>

                        <div className="notification-actions">
                            <button className="schedule-btn" onClick={handleScheduleSend}>
                                Schedule Send
                            </button>
                            <button className="send-now-btn" onClick={handleSendNow}>
                                Send Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendNotification;