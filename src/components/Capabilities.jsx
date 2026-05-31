import React from 'react';
import './Capabilities.css';

const capabilitiesData = [
    {
        icon: 'fa-brain',
        title: 'Adaptive Logic',
        description: 'Self-optimizing algorithms that adapt to user behavior and system loads in real-time.'
    },
    {
        icon: 'fa-cloud-bolt',
        title: 'Cloud Synth',
        description: 'Seamlessly distributed cloud infrastructure for instantaneous global data access.'
    },
    {
        icon: 'fa-compact-disc',
        title: 'Cybernetic Core',
        description: 'A hybrid architecture blending robust backend logic with ultra-fast frontend rendering.'
    },
    {
        icon: 'fa-shield-halved',
        title: 'Quantum Defense',
        description: 'Next-gen security protocols ensuring your digital assets remain impenetrable.'
    }
];

const Capabilities = () => {
    return (
        <section className="container section-padding">
            <h2 className="section-title"><span className="gradient-text">⚡ Neural Capabilities ⚡</span></h2>
            <div className="capabilities">
                {capabilitiesData.map((cap, index) => (
                    <div key={index} className="card">
                        <i className={`fa-solid ${cap.icon}`}></i>
                        <h3>{cap.title}</h3>
                        <p>{cap.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Capabilities;
