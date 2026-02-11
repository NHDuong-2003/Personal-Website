import { useState, useEffect } from 'react';
import './Hero.css';
import heroImage from '../assets/_.jpeg';

const Hero = () => {
    // Typing Animation State
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200);
    const [index, setIndex] = useState(1);

    const toRotate = [
        "Data Scientist",
        "AI Engineer",
        "Frontend Developer",
        "Backend Developer",
        "Data Analyst"
    ];

    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];

        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(150);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <header id="home" className="hero-section">

            {/* TOP SECTION: Intro & Status */}
            <div className="hero-top">
                <div className="availability-badge">Available for Freelance work</div>
                <h1 className="hero-title">Hi, I'm Duong</h1>

                <h2 className="hero-subtitle">
                    <span className="typing-text">{text}</span>
                </h2>

                <p className="hero-description">
                    Passionate Data Scientist with expertise in machine learning and data analysis.
                    Turning complex problems into elegant solutions.
                </p>

                <div className="info-row">
                    <div className="info-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Vietnam
                    </div>
                    <div className="info-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#4CAF50" stroke="none"><circle cx="12" cy="12" r="10"></circle></svg>
                        Available now
                    </div>
                </div>

                <div className="cta-buttons">
                    <button className="btn btn-primary">Hire Me</button>
                    <button className="btn btn-secondary">Download CV</button>
                </div>

                <div className="hero-socials">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="GitHub">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Facebook">
                        <svg viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                </div>
            </div>

            <hr className="hero-divider" />

            {/* BOTTOM SECTION: 2 Columns */}
            <div className="hero-bottom">

                {/* Column 1: Detailed Text & Cards */}
                <div id="about" className="bottom-text">
                    <h2>Building Meaningful <br /> Digital Experiences</h2>

                    <p className="section-desc">
                        I am a dedicated developer passionate about building modern and responsive web applications.
                        With a strong foundation in both data science and full-stack development, I create solutions
                        that are not only functional but also visually engaging.
                        <br /><br />
                        I believe in continuous learning and strive to adopt new technologies to bring projects to life.
                    </p>

                    <div id="about" className="drives-container">
                        <h3 className="drives-title">What Drives Me</h3>
                        <div className="drives-grid">
                            <div className="drive-card">
                                <div className="drive-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                                <div className="drive-text">
                                    <h4>Languages</h4>
                                    <span>HTML, CSS, React, Python</span>
                                </div>
                            </div>
                            <div className="drive-card">
                                <div className="drive-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                                </div>
                                <div className="drive-text">
                                    <h4>Education</h4>
                                    <span>B.Sc Data Science</span>
                                </div>
                            </div>
                            <div className="drive-card">
                                <div className="drive-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                                </div>
                                <div className="drive-text">
                                    <h4>Projects</h4>
                                    <span>5+ Completed</span>
                                </div>
                            </div>
                            <div className="drive-card">
                                <div className="drive-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                                </div>
                                <div className="drive-text">
                                    <h4>Certificates</h4>
                                    <span>5+ Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2: Image Card */}
                <div className="bottom-image">
                    <div className="image-card">
                        <img
                            src={heroImage}
                            alt="Avatar"
                            className="profile-img"
                        />
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Hero;