import React from 'react';
import { useToast } from './ToastProvider';
import './CTA.css';

const CTA = () => {
    const { showToast } = useToast();

    return (
        <section className="cta-section">
            <div className="cta-content container">
                <h2 className="gradient-text section-title">⚡ Activate Cyborg Dev Kit ⚡</h2>
                <p>Join the elite ranks of developers forging the future of the web. Your toolkit is ready.</p>
                <button 
                    className="btn btn-cyan" 
                    onClick={() => showToast('Dev kit activated. Welcome to the Forge.', 'fa-bolt')}
                >
                    Initialize Sequence
                </button>
            </div>
        </section>
    );
};

export default CTA;
