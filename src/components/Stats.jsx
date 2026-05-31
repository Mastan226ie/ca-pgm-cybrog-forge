import React from 'react';
import './Stats.css';

const statData = [
    { number: '10k+', label: 'Live Deploys' },
    { number: '99.9%', label: 'Uptime' },
    { number: '∞', label: 'Solutions' },
    { number: '24/7', label: 'Cyber Support' }
];

const Stats = () => {
    return (
        <div className="stats container">
            {statData.map((stat, index) => (
                <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default Stats;
