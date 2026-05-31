import React from 'react';
import { useToast } from './ToastProvider';
import './Hero.css';

const Hero = () => {
    const { showToast } = useToast();

    return (
        <section className="hero container">
            <div className="hero-content">
                <h1 className="gradient-text">Forge Your Digital Reality.</h1>
                <p>Build and develop real web solutions. If coding and problem-solving is your thing, this domain puts your skills to actual use.</p>
                <div className="hero-actions">
                    <button 
                        className="btn btn-cyan" 
                        onClick={() => showToast('Terminal access granted. Establishing connection...', 'fa-terminal')}
                    >
                        Launch Terminal
                    </button>
                    <button 
                        className="btn btn-outline" 
                        onClick={() => showToast('Neural core online. Scanning systems...', 'fa-network-wired')}
                    >
                        Explore Core
                    </button>
                </div>
            </div>
            
            <div className="cyborg-container">
                <div className="cyborg-head">
                    <div className="chip-core"></div>
                    <div className="visor">
                        <div className="eye"></div>
                        <div className="eye"></div>
                    </div>
                    <div className="cyber-line"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
