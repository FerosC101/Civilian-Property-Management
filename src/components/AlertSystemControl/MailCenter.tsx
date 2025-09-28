import React, { useState } from 'react';
import './MailCenter.css';

interface Message {
    id: number;
    sender: string;
    subject: string;
    preview: string;
    timestamp: string;
    isRead: boolean;
    isImportant: boolean;
}

const MailCenter: React.FC = () => {
    const [activeTab, setActiveTab] = useState('All Messages');
    const [quickMessage, setQuickMessage] = useState('');

    const [messages] = useState<Message[]>([
        {
            id: 1,
            sender: 'Nash Ayelet',
            subject: 'System Update Notification',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            timestamp: '2m ago',
            isRead: false,
            isImportant: true
        },
        {
            id: 2,
            sender: 'Security Team',
            subject: 'Weekly Security Report',
            preview: 'This week\'s security summary and incident reports...',
            timestamp: '1h ago',
            isRead: false,
            isImportant: false
        },
        {
            id: 3,
            sender: 'Maintenance',
            subject: 'Equipment Check Complete',
            preview: 'All equipment checks have been completed successfully...',
            timestamp: '3h ago',
            isRead: true,
            isImportant: false
        },
        {
            id: 4,
            sender: 'Administration',
            subject: 'Monthly Building Report',
            preview: 'Please find attached the monthly building maintenance report...',
            timestamp: '1d ago',
            isRead: true,
            isImportant: false
        }
    ]);

    const filteredMessages = messages.filter(message => {
        switch(activeTab) {
            case 'Important':
                return message.isImportant;
            case 'Archive':
                return message.isRead;
            default:
                return true;
        }
    });

    const handleSendMessage = () => {
        console.log('Send message:', quickMessage);
        setQuickMessage('');
    };

    const handleLoadMore = () => {
        console.log('Load more messages');
    };

    return (
        <div className="mail-center-container">
            <div className="mail-center-section">
                <div className="section-header">
                    <h2>MAIL CENTER</h2>
                </div>

                <div className="mail-center-content">
                    {/* New Messages Alert */}
                    <div className="new-messages-alert">
                        <h3>NEW MESSAGES</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    {/* Message Tabs */}
                    <div className="message-tabs">
                        {['All Messages', 'Important', 'Archive'].map((tab) => (
                            <button
                                key={tab}
                                className={`message-tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    {/* Messages List */}
                    <div className="messages-list">
                        {filteredMessages.map((message) => (
                            <div key={message.id} className={`message-item ${!message.isRead ? 'unread' : ''}`}>
                                <div className="message-avatar">
                                    <div className="avatar-circle"></div>
                                </div>
                                <div className="message-content">
                                    <div className="message-header">
                                        <span className="message-sender">{message.sender}</span>
                                        <span className="message-timestamp">{message.timestamp}</span>
                                    </div>
                                    <h4 className="message-subject">{message.subject}</h4>
                                    <p className="message-preview">{message.preview}</p>
                                </div>
                                {message.isImportant && (
                                    <div className="important-indicator">!</div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="load-more-container">
                        <button className="load-more-btn" onClick={handleLoadMore}>
                            Load More
                        </button>
                    </div>

                    {/* Quick Compose */}
                    <div className="quick-compose">
                        <h3>Quick Compose</h3>
                        <div className="compose-form">
                            <textarea
                                value={quickMessage}
                                onChange={(e) => setQuickMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="compose-textarea"
                                rows={3}
                            />
                            <button
                                className="send-btn"
                                onClick={handleSendMessage}
                                disabled={!quickMessage.trim()}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MailCenter;