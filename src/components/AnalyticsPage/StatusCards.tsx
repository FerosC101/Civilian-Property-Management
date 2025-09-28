import React from "react";
import "./StatusCards.css";

const StatusCards: React.FC = () => {
    return (
        <div className="status-cards-vertical-container">
            <div className="status-card-vertical">
                <h3 className="status-title-vertical">Active IoT</h3>
                <p className="status-value-vertical">1</p>
            </div>

            <div className="status-card-vertical">
                <h3 className="status-title-vertical">Risk Level</h3>
                <p className="status-value-vertical low">Low</p>
            </div>

            <div className="status-card-vertical">
                <h3 className="status-title-vertical">Building Health</h3>
                <p className="status-value-vertical normal">Normal</p>
            </div>
        </div>
    );
};

export default StatusCards;