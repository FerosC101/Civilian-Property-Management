import React from 'react';
import './MonthlyExpense.css';

const MonthlyExpense: React.FC = () => {
    // Data for pie chart
    const expenses = [
        { label: 'Electricity', value: 11250, color: '#3b82f6' },
        { label: 'HVAC System', value: 8900, color: '#10b981' },
        { label: 'Cleaning', value: 5500, color: '#f59e0b' },
        { label: 'Security', value: 4200, color: '#ef4444' },
        { label: 'Repairs', value: 3200, color: '#8b5cf6' },
        { label: 'Water', value: 2800, color: '#06b6d4' },
        { label: 'Waste Management', value: 2100, color: '#84cc16' },
        { label: 'Internet', value: 1899, color: '#f97316' },
        { label: 'Supplies', value: 1750, color: '#ec4899' }
    ];

    const total = expenses.reduce((sum, item) => sum + item.value, 0);
    let cumulativePercentage = 0;

    return (
        <div className="monthly-expense-card">
            {/* Card Header */}
            <div className="monthly-expense-header">
                <h3>Total Monthly Expense</h3>
            </div>

            {/* Card Body */}
            <div className="monthly-expense-content">
                <div className="expense-layout">
                    {/* Left side - Pie Chart */}
                    <div className="expense-chart">
                        <svg width="80" height="80" viewBox="0 0 80 80">
                            <g transform="translate(40,40)">
                                {expenses.map((expense, index) => {
                                    const percentage = (expense.value / total) * 100;
                                    const angle = (percentage / 100) * 360;
                                    const startAngle = (cumulativePercentage / 100) * 360;
                                    const endAngle = startAngle + angle;

                                    const x1 = 35 * Math.cos((startAngle - 90) * Math.PI / 180);
                                    const y1 = 35 * Math.sin((startAngle - 90) * Math.PI / 180);
                                    const x2 = 35 * Math.cos((endAngle - 90) * Math.PI / 180);
                                    const y2 = 35 * Math.sin((endAngle - 90) * Math.PI / 180);

                                    const largeArc = angle > 180 ? 1 : 0;

                                    const pathData = [
                                        "M", 0, 0,
                                        "L", x1, y1,
                                        "A", 35, 35, 0, largeArc, 1, x2, y2,
                                        "Z"
                                    ].join(" ");

                                    cumulativePercentage += percentage;

                                    return (
                                        <path
                                            key={index}
                                            d={pathData}
                                            fill={expense.color}
                                            stroke="#ffffff"
                                            strokeWidth="1"
                                        />
                                    );
                                })}
                            </g>
                        </svg>
                    </div>

                    {/* Right side - Expense details */}
                    <div className="expense-details">
                        <div className="expense-grid">
                            {/* Bills Section */}
                            <div className="expense-section">
                                <h4 className="section-title">Bills</h4>
                                <div className="expense-items">
                                    <div className="expense-item">
                                        <span className="item-label">Electricity:</span>
                                        <span className="item-value">₱11,250</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="item-label">Water:</span>
                                        <span className="item-value">₱2,800</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="item-label">Internet:</span>
                                        <span className="item-value">₱1,899</span>
                                    </div>
                                </div>
                            </div>

                            {/* Utilities Section */}
                            <div className="expense-section">
                                <h4 className="section-title utilities">Utilities</h4>
                                <div className="expense-items">
                                    <div className="expense-item">
                                        <span className="item-label">HVAC:</span>
                                        <span className="item-value">₱8,900</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="item-label">Security:</span>
                                        <span className="item-value">₱4,200</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="item-label">Waste:</span>
                                        <span className="item-value">₱2,100</span>
                                    </div>
                                </div>
                            </div>

                            {/* Maintenance Cost Section */}
                            <div className="expense-section">
                                <h4 className="section-title maintenance">Maintenance Cost</h4>
                                <div className="expense-items">
                                    <div className="expense-item">
                                        <span className="item-label">Cleaning:</span>
                                        <span className="item-value">₱5,500</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="item-label">Repairs:</span>
                                        <span className="item-value">₱3,200</span>
                                    </div>
                                    <div className="expense-item">
                                        <span className="item-label">Supplies:</span>
                                        <span className="item-value">₱1,750</span>
                                    </div>
                                </div>
                            </div>

                            {/* Asset Value Section */}
                            <div className="expense-section asset-section">
                                <h4 className="section-title asset">Asset Value</h4>
                                <div className="asset-value">₱125,000,000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyExpense;