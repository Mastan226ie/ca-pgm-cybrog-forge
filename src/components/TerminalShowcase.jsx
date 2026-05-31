import React from 'react';
import './TerminalShowcase.css';

const TerminalShowcase = () => {
    return (
        <section className="terminal-section section-padding">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-dot dot-red"></div>
                    <div className="terminal-dot dot-yellow"></div>
                    <div className="terminal-dot dot-green"></div>
                </div>
                <div className="terminal-body">
                    <div>
                        <span className="term-prompt">cyborg@forge:~$</span> 
                        <span className="term-command"> cyborg deploy</span> --solution 
                        <span className="term-string"> "real_web_app"</span>
                    </div>
                    <div className="term-log">&gt; Initializing cybernetic build sequence...</div>
                    <div className="term-log">&gt; Compiling neural networks... [OK]</div>
                    <div className="term-log">&gt; Optimizing frontend matrix... [OK]</div>
                    <div className="term-success term-log">✓ Solution successfully deployed to edge nodes.</div>
                    <div className="term-prompt-line">
                        <span className="term-prompt">cyborg@forge:~$</span>
                        <span className="cursor"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TerminalShowcase;
