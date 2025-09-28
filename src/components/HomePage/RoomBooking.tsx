import React, { useState } from 'react';
import './RoomBooking.css';

const RoomBooking: React.FC = () => {
    const [bookingData, setBookingData] = useState({
        roomNumber: '',
        floorNumber: '',
        capacity: '',
        buildingAddress: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setBookingData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="room-booking-container">
            <div className="booking-section">
                <div className="section-header">
                    <h2>Room Booking</h2>
                </div>

                <div className="form-group">
                    <label>Room Number</label>
                    <select
                        value={bookingData.roomNumber}
                        onChange={(e) => handleInputChange('roomNumber', e.target.value)}
                    >
                        <option value="">Select Room</option>
                        <option value="101">Room 101</option>
                        <option value="102">Room 102</option>
                        <option value="201">Room 201</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Floor Number</label>
                    <select
                        value={bookingData.floorNumber}
                        onChange={(e) => handleInputChange('floorNumber', e.target.value)}
                    >
                        <option value="">Select Floor</option>
                        <option value="1">1st Floor</option>
                        <option value="2">2nd Floor</option>
                        <option value="3">3rd Floor</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Capacity & Features</label>
                    <input
                        type="text"
                        placeholder="e.g., 10 people, projector, whiteboard"
                        value={bookingData.capacity}
                        onChange={(e) => handleInputChange('capacity', e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Building Address</label>
                    <input
                        type="text"
                        placeholder="Building address"
                        value={bookingData.buildingAddress}
                        onChange={(e) => handleInputChange('buildingAddress', e.target.value)}
                    />
                </div>

                <div className="availability-bar">
                    <span>Currently Available</span>
                </div>
            </div>
        </div>
    );
};

export default RoomBooking;