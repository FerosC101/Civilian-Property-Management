import React, { useState } from 'react';
import './UpdatesAndAnnouncements.css';

interface Announcement {
    id: number;
    category: string;
    title: string;
    content: string;
    timestamp: string;
}

const UpdatesAndAnnouncements: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('Most Recent');
    const [searchQuery, setSearchQuery] = useState('');

    const [announcements] = useState<Announcement[]>([
        {
            id: 1,
            category: 'Facility',
            title: 'HVAC System Maintenance',
            content: 'Scheduled maintenance for HVAC system on Building A will be conducted this weekend.',
            timestamp: '2 hours ago'
        },
        {
            id: 2,
            category: 'Management',
            title: 'New Security Protocols',
            content: 'Updated security protocols are now in effect. Please review the new guidelines.',
            timestamp: '5 hours ago'
        },
        {
            id: 3,
            category: 'System',
            title: 'System Update Completed',
            content: 'The recent system update has been successfully completed with improved performance.',
            timestamp: '1 day ago'
        }
    ]);

    const filteredAnnouncements = announcements.filter(announcement =>
        announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        announcement.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="updates-announcements-container">
            <div className="updates-announcements-section">
                <div className="section-header">
                    <h2>UPDATES AND ANNOUNCEMENTS</h2>
                </div>

                <div className="updates-announcements-content">
                    <div className="filter-controls">
                        <div className="filter-tabs">
                            {['Facility', 'Management', 'System', 'Most Recent'].map((filter) => (
                                <button
                                    key={filter}
                                    className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>
                    </div>

                    <div className="announcements-list">
                        {filteredAnnouncements.length === 0 ? (
                            <div className="no-announcements">
                                <p>No announcements found</p>
                            </div>
                        ) : (
                            filteredAnnouncements.map((announcement) => (
                                <div key={announcement.id} className="announcement-item">
                                    <div className="announcement-avatar">
                                        <div className="avatar-circle"></div>
                                    </div>
                                    <div className="announcement-content">
                                        <div className="announcement-header">
                                            <span className="announcement-category">{announcement.category}</span>
                                            <span className="announcement-timestamp">{announcement.timestamp}</span>
                                        </div>
                                        <h4 className="announcement-title">{announcement.title}</h4>
                                        <p className="announcement-text">{announcement.content}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatesAndAnnouncements;