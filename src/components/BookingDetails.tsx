import React, { useState } from 'react';
import './BookingDetails.css';

const BookingDetails: React.FC = () => {
    const [bookingData, setBookingData] = useState({
        date: '',
        time: '',
        duration: '',
        purpose: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setBookingData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleEdit = () => {
        console.log('Edit booking');
    };

    const handleConfirm = () => {
        console.log('Confirm booking', bookingData);
    };

    return (
        <div className="booking-details-container">
            <div className="booking-details-section">
                <div className="section-header">
                    <h2>Booking Details</h2>
                </div>

                <div className="booking-details-content">
                    <div className="booking-info-card">
                        <div className="booking-info-text">
                            <h3>Booking Information</h3>
                            <div className="info-item">
                                <span className="label">Date:</span>
                                <input
                                    type="date"
                                    value={bookingData.date}
                                    onChange={(e) => handleInputChange('date', e.target.value)}
                                />
                            </div>
                            <div className="info-item">
                                <span className="label">Time:</span>
                                <input
                                    type="time"
                                    value={bookingData.time}
                                    onChange={(e) => handleInputChange('time', e.target.value)}
                                />
                            </div>
                            <div className="info-item">
                                <span className="label">Duration:</span>
                                <input
                                    type="text"
                                    placeholder="e.g., 2 hours"
                                    value={bookingData.duration}
                                    onChange={(e) => handleInputChange('duration', e.target.value)}
                                />
                            </div>
                            <div className="info-item">
                                <span className="label">Purpose:</span>
                                <input
                                    type="text"
                                    placeholder="Meeting purpose"
                                    value={bookingData.purpose}
                                    onChange={(e) => handleInputChange('purpose', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="booking-actions">
                            <button className="edit-btn" onClick={handleEdit}>Edit</button>
                            <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;