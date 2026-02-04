import React from 'react';
import { motion } from 'framer-motion';

const HealingSection = () => {
    const programs = [
        {
            id: 1,
            title: "조직&팀 빌딩 프로그램",
            desc: "성과관리의 핵심인 소통과 조직 문화를 위해 마이카운슬러만의 맞춤형 팀 빌딩 프로그램을 제공합니다.",
            image: `${import.meta.env.BASE_URL}assets/healing_team.png`
        },
        {
            id: 2,
            title: "스트레스 관리 프로그램",
            desc: "전문가와 함께 스트레스를 체계적으로 이해하고 관리하며 정서적 안정을 회복하는 프로그램입니다.",
            image: `${import.meta.env.BASE_URL}assets/healing_stress.png`
        },
        {
            id: 3,
            title: "자기 탐색 프로그램",
            desc: "분주한 일상 속에서 나를 돌아보고 진정한 나를 발견하며 회복과 성장을 경험할 수 있습니다.",
            image: `${import.meta.env.BASE_URL}assets/healing_self.png`
        },
        {
            id: 4,
            title: "웰니스 & 건강 &\n명상 프로그램",
            desc: "체계적인 명상과 건강 증진 활동을 통해 임직원의 몸과 마음의 활력을 높여드립니다.",
            image: `${import.meta.env.BASE_URL}assets/healing_wellness.png`
        }
    ];

    return (
        <section className="healing-section" id="strength-4">
            <style>{`
                .healing-section {
                    padding: 100px 0;
                    background-color: var(--bg-alt);
                }

                .healing-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .strength-badge {
                    display: inline-block;
                    padding: 6px 16px;
                    background-color: var(--secondary);
                    color: white;
                    border-radius: 100px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    letter-spacing: 0.05em;
                }

                .healing-header h2 {
                    font-size: clamp(2.25rem, 5vw, 3.5rem);
                    font-weight: 900;
                    margin-bottom: 24px;
                    color: var(--primary);
                    letter-spacing: -0.04em;
                    line-height: 1.15;
                }

                .healing-header p {
                    font-size: 1.35rem;
                    color: var(--text-muted);
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.7;
                    font-weight: 500;
                    word-break: keep-all;
                }

                .programs-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                }

                .program-card {
                    background: var(--white);
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    border: 1px solid var(--border);
                    display: flex;
                    flex-direction: column;
                }

                .program-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }

                .program-image-wrapper {
                    width: 100%;
                    aspect-ratio: 16 / 10;
                    overflow: hidden;
                }

                .program-image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .program-card:hover .program-image-wrapper img {
                    transform: scale(1.1);
                }

                .program-content {
                    padding: 32px;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                .program-title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    margin-bottom: 12px;
                    color: var(--primary);
                    line-height: 1.4;
                    white-space: pre-wrap;
                }

                .program-desc {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    line-height: 1.6;
                    word-break: keep-all;
                }

                @media (max-width: 1200px) {
                    .programs-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 640px) {
                    .programs-grid {
                        grid-template-columns: 1fr;
                    }
                    .healing-header h2 {
                        font-size: 2rem;
                    }
                    .program-content {
                        padding: 24px;
                    }
                    .pc-only {
                        display: none;
                    }
                }

                @media (min-width: 641px) {
                    .mo-only {
                        display: none;
                    }
                }
            `}</style>
            <div className="container">
                <div className="healing-header">
                    <motion.span
                        className="strength-badge"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        마이카운슬러의 차별점 4
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        맞춤형 힐링 프로그램
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        전문적인 심리 케어를 넘어 조직의 활력을 불어넣는<br className="pc-only" />
                        마이카운슬러만의 기획형 힐링 솔루션입니다.
                    </motion.p>
                </div>

                <div className="programs-grid">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            className="program-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                        >
                            <div className="program-image-wrapper">
                                <img src={program.image} alt={program.title} />
                            </div>
                            <div className="program-content">
                                <h3 className="program-title">{program.title}</h3>
                                <p className="program-desc">{program.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HealingSection;
