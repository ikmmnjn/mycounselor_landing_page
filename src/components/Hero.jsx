import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    const sectionStyle = {
        backgroundImage: `url("${heroBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <section id="hero" className="hero-section" style={sectionStyle}>
            <style>{`
                .hero-section {
                    padding-top: 80px;
                    padding-bottom: 80px;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    color: white;
                    overflow: hidden;
                    background-color: #0f172a; /* Fallback color */
                }

                .hero-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.3) 100%);
                    z-index: 1;
                }

                .hero-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 60px;
                    align-items: center;
                    width: 100%;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 800px;
                }

                .hero-title {
                    font-size: clamp(48px, 6vw, 92px); /* Massive, responsive title */
                    font-weight: 900;
                    line-height: 1.05;
                    word-break: keep-all;
                    margin-bottom: 32px;
                    letter-spacing: -0.04em; /* Very tight for impact */
                    color: white;
                    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                }

                .hero-title span {
                    color: #60a5fa;
                }

                .hero-description {
                    font-size: clamp(1.1rem, 1.5vw, 1.5rem);
                    color: rgba(255, 255, 255, 0.95);
                    margin-bottom: 56px;
                    max-width: 650px;
                    line-height: 1.75;
                    word-break: keep-all;
                    font-weight: 500;
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                }

                .hero-actions {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .hero-btn {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 20px 48px; /* Larger buttons */
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 1.25rem;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .hero-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }

                .hero-badge-container {
                    position: absolute;
                    right: 10%;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 3;
                }

                .hero-visual_badge {
                    background-color: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(12px);
                    padding: 16px 24px;
                    border-radius: 16px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                    font-size: 1rem;
                    font-weight: 700;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .hero-visual_badge::before {
                    content: '';
                    width: 8px;
                    height: 8px;
                    background-color: #60a5fa;
                    border-radius: 50%;
                }

                @media (max-width: 992px) {
                    .hero-section {
                        text-align: center;
                        justify-content: center;
                    }
                    
                    /* Adjust inline style for mobile via class override if needed, 
                       but here we just adjust child layout */
                    .hero-content {
                        margin: 0 auto;
                    }

                    .hero-description {
                        margin: 0 auto 40px;
                    }

                    .hero-actions {
                        justify-content: center;
                    }

                    .hero-badge-container {
                        display: none;
                    }
                }
            `}</style>
            <div className="container hero-grid">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="hero-title">
                        실제로 작동하는<br />
                        <span>EAP 운영 파트너</span>
                    </h1>
                    <p className="hero-description">
                        직원은 심리상담과 마음건강 프로그램을 통해 회복하고,<br />
                        기업은 안정적인 조직 운영과 성과 향상을 만들어갑니다.
                    </p>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
