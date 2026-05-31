import React from 'react';
import './FeatureHighlights.css';

const featuresData = [
    {
        icon: 'fa-layer-group',
        title: 'Full-Stack Mastery',
        description: 'From deep database architecture to reactive UI interfaces, master every layer of the modern web stack.'
    },
    {
        icon: 'fa-gears',
        title: 'Problem-Solving Engine',
        description: 'Tackle complex logic puzzles and architectural bottlenecks with our advanced debugging toolset.'
    },
    {
        icon: 'fa-globe',
        title: 'Global Solutions Network',
        description: 'Deploy your code to edge networks worldwide, ensuring zero-latency access for every user.'
    }
];

const FeatureHighlights = () => {
    return (
        <section className="container section-padding">
            <div className="features">
                {featuresData.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <i className={`fa-solid ${feature.icon}`}></i>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureHighlights;
