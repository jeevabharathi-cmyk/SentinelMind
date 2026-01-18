import React from 'react';
import './RiskHeatmap.css';

const RiskHeatmap = () => {
    // Generate mock data for a 24x7 grid (hours vs days)
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const getRiskColor = (day, hour) => {
        // Mock logic for risk levels
        const val = Math.random() * 100;
        if (val > 85) return 'critical';
        if (val > 70) return 'warning';
        if (val > 40) return 'observe';
        return 'normal';
    };

    return (
        <div className="heatmap-container glass animate-fade-in">
            <div className="heatmap-header">
                <h3>Insider Risk Heatmap</h3>
                <div className="heatmap-legend">
                    <span className="legend-item"><span className="dot normal"></span> Normal</span>
                    <span className="legend-item"><span className="dot observe"></span> Observe</span>
                    <span className="legend-item"><span className="dot warning"></span> Warning</span>
                    <span className="legend-item"><span className="dot critical"></span> Critical</span>
                </div>
            </div>

            <div className="heatmap-grid-wrapper">
                <div className="hour-labels">
                    {hours.filter(h => h % 2 === 0).map(h => (
                        <span key={h}>{h}:00</span>
                    ))}
                </div>
                <div className="heatmap-grid">
                    {days.map(day => (
                        <div key={day} className="heatmap-row">
                            <span className="day-label">{day}</span>
                            <div className="cells">
                                {hours.map(hour => (
                                    <div
                                        key={hour}
                                        className={`heatmap-cell ${getRiskColor(day, hour)}`}
                                        title={`${day} ${hour}:00 - Risk Level: ${getRiskColor(day, hour)}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RiskHeatmap;
