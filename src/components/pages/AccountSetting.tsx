import React, {useState} from "react";
import {
    FaUser,
    FaCreditCard,
    FaEdit,
    FaTimes,
    FaShieldAlt,
    FaCamera,
    FaEnvelope,
    FaPhone,
    FaHome,
    FaCog,
    FaLock,
    FaMobileAlt,
    FaEye
} from "react-icons/fa";
import "./AccountSetting.css";

interface AccountSettingsProps {
    onClose: () => void,
    currentPage?: string,
    setCurrentPage?: (value: (((prevState: string) => string) | string)) => void
}

const AccountSettings: React.FC<AccountSettingsProps> = ({onClose,}) => {
    const [userData] = useState({
        fullName: "Nash Ayelet",
        email: "nash.ayelet@civilian.com",
        phone: "+63 917 856 4321",
        gender: "Male",
        age: "28",
        accountType: "Residential Privilege",
        building: "Building A",
        unit: "Unit 205",
        floor: "Floor 12",
        address: "1506 Ayala Avenue, Makati City, Metro Manila, Philippines 1226",
        deviceId: "A234-FGB545",
        planType: "Property Owner - Residential",
        planAmount: "₱2,499",
        planPeriod: "per month",
        planExpiration: "October 15, 2025",
        daysRemaining: "16 days",
        paymentMethod: "Visa Credit Card",
        cardLast4: "4512"
    });

    const handleCloseClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onClose();
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="account-modal-overlay" onClick={handleOverlayClick}>
            <div className="account-modal-container">
                {/* Header */}
                <div className="account-modal-header">
                    <div className="account-header-content">
                        <h1 className="account-header-title">CIVILIAN</h1>
                        <span className="account-live-badge">Live</span>
                    </div>
                    <button
                        onClick={handleCloseClick}
                        className="account-close-button"
                        type="button"
                    >
                        <FaTimes/>
                    </button>
                </div>

                {/* Body */}
                <div className="account-modal-body">
                    {/* Main Content Grid */}
                    <div className="account-content-grid">
                        {/* Left Column - Profile & Settings */}
                        <div>
                            {/* Profile Section */}
                            <div className="account-section">
                                <div className="section-title">
                                    <div className="section-icon">
                                        <FaUser/>
                                    </div>
                                    Profile Information
                                </div>

                                <div className="profile-header">
                                    <div className="profile-avatar">
                                        {userData.fullName.split(' ').map(name => name[0]).join('')}
                                    </div>
                                    <div className="profile-info">
                                        <h2>{userData.fullName}</h2>
                                        <p>{userData.accountType} | {userData.building}, {userData.unit}</p>
                                    </div>
                                </div>

                                <div className="profile-details">
                                    <div className="detail-item">
                                        <div className="detail-label">Gender</div>
                                        <div className="detail-value">{userData.gender}</div>
                                    </div>
                                    <div className="detail-item">
                                        <div className="detail-label">Age</div>
                                        <div className="detail-value">{userData.age}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Account Settings */}
                            <div className="account-section">
                                <div className="section-title">
                                    <div className="section-icon">
                                        <FaCog/>
                                    </div>
                                    Account Settings
                                </div>

                                <div className="settings-grid">
                                    <button className="settings-button">
                                        <FaEnvelope/>
                                        Change Email
                                    </button>
                                    <button className="settings-button primary">
                                        <FaShieldAlt/>
                                        Enable 2FA
                                    </button>
                                    <button className="settings-button">
                                        <FaLock/>
                                        Change Password
                                    </button>
                                    <button className="settings-button">
                                        <FaMobileAlt/>
                                        Devices
                                    </button>
                                </div>

                                <div className="contact-info">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <FaEnvelope/>
                                        </div>
                                        <div className="contact-details">
                                            <h4>Email Address</h4>
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <FaPhone/>
                                        </div>
                                        <div className="contact-details">
                                            <h4>Phone Number</h4>
                                            <p>{userData.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Address & Plan */}
                        <div>
                            {/* Building Address */}
                            <div className="account-section">
                                <div className="section-title">
                                    <div className="section-icon">
                                        <FaHome/>
                                    </div>
                                    Property Information
                                </div>

                                <div className="address-grid">
                                    <div className="address-field">
                                        <h4>Complete Address</h4>
                                        <p>{userData.address}</p>
                                    </div>
                                    <div className="address-field">
                                        <h4>Building & Unit</h4>
                                        <p>{userData.building}, {userData.unit}</p>
                                    </div>
                                    <div className="address-field">
                                        <h4>Floor</h4>
                                        <p>{userData.floor}</p>
                                    </div>
                                </div>

                                <div className="gallery-section">
                                    <h4 style={{
                                        margin: '0 0 12px 0',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        color: '#1e293b'
                                    }}>
                                        Property Gallery
                                    </h4>
                                    <div className="gallery-grid">
                                        <div className="gallery-item">
                                            <FaCamera/>
                                        </div>
                                        <div className="gallery-item">
                                            <FaCamera/>
                                        </div>
                                        <div className="gallery-item">
                                            <FaCamera/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Subscription Plan */}
                            <div className="account-section">
                                <div className="section-title">
                                    <div className="section-icon">
                                        <FaCreditCard/>
                                    </div>
                                    Subscription Plan
                                </div>

                                <div className="plan-card">
                                    <div className="plan-header">
                                        <div>
                                            <div className="plan-title">{userData.planType}</div>
                                            <div className="plan-subtitle">Premium Monitoring Package</div>
                                        </div>
                                        <div className="plan-price">
                                            <div className="plan-amount">{userData.planAmount}</div>
                                            <div className="plan-period">{userData.planPeriod}</div>
                                        </div>
                                    </div>

                                    <div className="plan-features">
                                        <ul>
                                            <li>24/7 Real-time monitoring</li>
                                            <li>Advanced analytics & reports</li>
                                            <li>Priority customer support</li>
                                            <li>Mobile app access</li>
                                            <li>IoT device management</li>
                                        </ul>
                                    </div>

                                    <div className="plan-expiration">
                                        <span>Plan expires: {userData.planExpiration}</span>
                                        <span>Renews in: {userData.daysRemaining}</span>
                                    </div>
                                </div>

                                {/* IoT Registration Status */}
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    padding: '20px',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px'
                                }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '20px'
                                    }}>
                                        <FaShieldAlt/>
                                    </div>
                                    <div>
                                        <h4 style={{
                                            margin: '0 0 8px 0',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: '#1e293b'
                                        }}>
                                            IoT Device Registration
                                        </h4>
                                        <div style={{display: 'flex', gap: '4px'}}>
                                            {Array.from({length: 8}, (_, i) => (
                                                <div
                                                    key={i}
                                                    style={{
                                                        width: '12px',
                                                        height: '12px',
                                                        borderRadius: '50%',
                                                        backgroundColor: i < 3 ? '#0ea5e9' : '#e2e8f0'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="bottom-grid">
                        {/* Billing Information */}
                        <div className="account-section">
                            <div className="billing-section">
                                <div className="billing-icon">
                                    <FaCreditCard/>
                                </div>
                                <div className="billing-content">
                                    <h3>Subscription & Billing</h3>
                                    <div className="billing-detail">Payment method: {userData.paymentMethod}</div>
                                    <div className="billing-detail">Card ending in: •••• {userData.cardLast4}</div>
                                    <div className="billing-detail">Next billing: November 15, 2024</div>
                                    <div className="card-preview">
                                        {Array.from({length: 16}, (_, i) => (
                                            <div key={i} className="card-dot"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Device Management */}
                        <div className="account-section">
                            <div className="device-section">
                                <div className="device-info">
                                    <div className="device-icon">
                                        <FaShieldAlt/>
                                    </div>
                                    <div className="device-text">Device ID: {userData.deviceId}</div>
                                </div>
                                <button className="device-edit" type="button">
                                    <FaEdit/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button className="action-button secondary">
                            <FaCog style={{marginRight: '8px'}}/>
                            General Settings
                        </button>
                        <button className="action-button secondary">
                            <FaPhone style={{marginRight: '8px'}}/>
                            Contact Support
                        </button>
                        <button className="action-button primary">
                            <FaEye style={{marginRight: '8px'}}/>
                            Switch Account
                        </button>
                        <button className="action-button danger">
                            <FaTimes style={{marginRight: '8px'}}/>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;