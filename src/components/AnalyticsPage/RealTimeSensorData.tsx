import React, { useState, useEffect } from 'react';
import './RealTimeSensorData.css';

const RealTimeSensorData = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const generateData = () => {
            const newPoint = {
                time: new Date().toLocaleTimeString(),
                waterLevel: Math.floor(Math.random() * 50 + 30),
                airQuality: Math.floor(Math.random() * 40 + 60),
                temperature: Math.floor(Math.random() * 15 + 20)
            };
            setData(prev => [...prev.slice(-19), newPoint]);
        };

        for (let i = 0; i < 15; i++) {
            setTimeout(generateData, i * 100);
        }

        const interval = setInterval(generateData, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sensor-card">
            {/* Card Header */}
            <div className="sensor-header">
                <h3>Real-time Sensor Data</h3>
            </div>

            {/* Card Body */}
            <div className="sensor-content">
                {/* Chart Box */}
                <div className="sensor-chart-box">
                    {/* Chart Title Row */}
                    <div className="sensor-chart-header">
                        <span className="sensor-chart-title">Live Readings</span>
                        <span className="sensor-chart-time">Last 6hrs</span>
                    </div>

                    {/* Chart Area */}
                    <div className="sensor-chart-area">
                        <svg className="sensor-chart-svg" viewBox="0 0 460 160">
                            <defs>
                                <pattern id="grid" width="46" height="32" patternUnits="userSpaceOnUse">
                                    <path d="M 46 0 L 0 0 0 32" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />

                            {data.length > 1 && (
                                <>
                                    {/* Filled areas */}
                                    <polygon
                                        fill="rgba(96, 165, 250, 0.2)"
                                        points={`10,150 ${data.map((p, i) =>
                                            `${(i / (data.length - 1)) * 440 + 10},${150 - ((p.waterLevel - 20) / 60) * 130}`
                                        ).join(' ')} 450,150`}
                                    />
                                    <polygon
                                        fill="rgba(52, 211, 153, 0.2)"
                                        points={`10,150 ${data.map((p, i) =>
                                            `${(i / (data.length - 1)) * 440 + 10},${150 - ((p.airQuality - 20) / 60) * 130}`
                                        ).join(' ')} 450,150`}
                                    />
                                    <polygon
                                        fill="rgba(251, 146, 60, 0.2)"
                                        points={`10,150 ${data.map((p, i) =>
                                            `${(i / (data.length - 1)) * 440 + 10},${150 - ((p.temperature - 20) / 60) * 130}`
                                        ).join(' ')} 450,150`}
                                    />

                                    {/* Lines */}
                                    <polyline
                                        fill="none" stroke="#3b82f6" strokeWidth="2"
                                        points={data.map((p, i) =>
                                            `${(i / (data.length - 1)) * 440 + 10},${150 - ((p.waterLevel - 20) / 60) * 130}`
                                        ).join(' ')}
                                    />
                                    <polyline
                                        fill="none" stroke="#10b981" strokeWidth="2"
                                        points={data.map((p, i) =>
                                            `${(i / (data.length - 1)) * 440 + 10},${150 - ((p.airQuality - 20) / 60) * 130}`
                                        ).join(' ')}
                                    />
                                    <polyline
                                        fill="none" stroke="#f59e0b" strokeWidth="2"
                                        points={data.map((p, i) =>
                                            `${(i / (data.length - 1)) * 440 + 10},${150 - ((p.temperature - 20) / 60) * 130}`
                                        ).join(' ')}
                                    />
                                </>
                            )}
                        </svg>
                    </div>

                    {/* Legend */}
                    <div className="sensor-legend">
                        <div className="sensor-legend-item">
                            <div className="sensor-legend-dot water"></div>
                            <span>Water Level</span>
                        </div>
                        <div className="sensor-legend-item">
                            <div className="sensor-legend-dot air"></div>
                            <span>Air Quality</span>
                        </div>
                        <div className="sensor-legend-item">
                            <div className="sensor-legend-dot temperature"></div>
                            <span>Temperature</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealTimeSensorData;
