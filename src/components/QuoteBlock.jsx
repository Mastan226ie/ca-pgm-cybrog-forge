import React from 'react';
import './QuoteBlock.css';

const QuoteBlock = () => {
    return (
        <section className="quote-section container section-padding">
            <div className="quote-block">
                <div className="quote-text">
                    "Build and develop real web solutions. If coding and problem-solving is your thing, this domain puts your skills to actual use."
                </div>
                <div className="quote-author">— Cyborg Dev Directive, v2.0</div>
            </div>
        </section>
    );
};

export default QuoteBlock;
