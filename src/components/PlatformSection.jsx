import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, ShieldCheck, BarChart3, Settings, ClipboardList } from 'lucide-react';

const PlatformSection = () => {
    const features = [
        {
            icon: <Monitor className="w-6 h-6" />,
            title: "상담 접근성 향상",
            desc: "PC와 모바일 모두 지원하여 시간과 장소 제약 없이 언제 어디서나 간편하게 상담을 신청하고 결과를 확인할 수 있습니다."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "행정 효율성 증대",
            desc: "상담 현황, 이용 통계, 만족도 결과를 실시간으로 점검하고 자동화된 보고서 작성 기능으로 업무를 최소화합니다."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "보안 및 개인정보 보호",
            desc: "국제 정보보안 표준 ISO 27001 인증을 획득한 정보보안 관리체계를 기반으로, 모든 개인정보와 상담 데이터는 엄격하게 분리·통제됩니다."
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "기관 맞춤형 브랜딩",
            desc: "기관명, 로고, 색상 등을 반영한 맞춤형 페이지 구성으로 임직원이 '우리 기관 전용 플랫폼'으로 체감하며 몰입도를 높입니다."
        }
    ];

    const tests = [
        "감정노동평가", "직무스트레스", "외상후 스트레스", "자살사고",
        "작업장 폭력평가", "우울증 진단", "알코올 사용장애"
    ];

    return (
        <section className="platform-section" id="strength-2">
            <style>{`
                .platform-section {
                    padding: 120px 0;
                    background-color: var(--white);
                    overflow: hidden;
                }

                .platform-header {
                    text-align: center;
                    margin-bottom: 80px;
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

                .platform-header h2 {
                    font-size: clamp(2.25rem, 5vw, 3.5rem);
                    font-weight: 900;
                    margin-bottom: 32px;
                    color: var(--primary);
                    letter-spacing: -0.04em;
                    line-height: 1.15;
                }

                .platform-header p {
                    font-size: 1.5rem;
                    color: var(--text-muted);
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.7;
                    font-weight: 500;
                    word-break: keep-all;
                }

                .platform-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                    margin-bottom: 100px;
                }

                .visual-stack {
                    position: relative;
                    height: 500px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .pc-mockup {
                    width: 100%;
                    max-width: 580px;
                    z-index: 1;
                    filter: drop-shadow(0 30px 60px rgba(0,0,0,0.12));
                }

                .mo-mockup-1 {
                    position: absolute;
                    bottom: -40px;
                    right: -20px;
                    width: 180px;
                    z-index: 2;
                    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
                }

                .mo-mockup-2 {
                    position: absolute;
                    top: 20px;
                    left: -30px;
                    width: 160px;
                    z-index: 0;
                    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.1));
                    opacity: 0.8;
                }

                .features-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 32px;
                }

                .feature-item {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .feature-icon-box {
                    width: 48px;
                    height: 48px;
                    background-color: rgba(59, 130, 246, 0.1);
                    color: var(--secondary);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .feature-item h3 {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: var(--primary);
                }

                .feature-item p {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    line-height: 1.6;
                    word-break: keep-all;
                }

                .test-banner {
                    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                    border-radius: 40px;
                    padding: 60px;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 40px;
                    position: relative;
                    overflow: hidden;
                }

                .test-banner::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -10%;
                    width: 60%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
                    transform: rotate(15deg);
                }

                .test-content {
                    flex: 1;
                    z-index: 1;
                }

                .test-content h4 {
                    color: white;
                    font-size: 2rem;
                    font-weight: 800;
                    margin-bottom: 16px;
                }

                .test-content p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                    margin-bottom: 32px;
                }

                .test-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .test-tag {
                    padding: 8px 18px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 100px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    backdrop-filter: blur(10px);
                }

                .test-cta {
                    background: var(--secondary);
                    color: white;
                    padding: 20px 40px;
                    border-radius: 16px;
                    font-weight: 800;
                    font-size: 1.1rem;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    white-space: nowrap;
                    z-index: 1;
                    transition: all 0.3s ease;
                }

                .test-cta:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
                }

                @media (max-width: 1024px) {
                    .platform-grid {
                        grid-template-columns: 1fr;
                        gap: 60px;
                    }
                    .visual-stack {
                        height: 400px;
                        order: 2;
                    }
                    .test-banner {
                        flex-direction: column;
                        text-align: center;
                        padding: 40px 24px;
                    }
                    .test-tags {
                        justify-content: center;
                    }
                    .test-cta {
                        width: 100%;
                        justify-content: center;
                    }
                    .pc-mockup { max-width: 450px; }
                    .mo-mockup-1 { width: 140px; }
                    .mo-mockup-2 { width: 120px; }
                }

                @media (max-width: 640px) {
                    .features-list {
                        grid-template-columns: 1fr;
                    }
                    .platform-header h2 {
                        font-size: 2rem;
                    }
                    .test-content h4 {
                        font-size: 1.5rem;
                    }
                    .pc-mockup { max-width: 100%; }
                }
            `}</style>

            <div className="container">
                <div className="platform-header">
                    <motion.span
                        className="strength-badge"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        핵심 강점 02
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        기업 전용 상담 플랫폼 제공
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        단순한 상담 연결을 넘어, 기업의 행정 효율성과<br />
                        임직원의 접근성을 극대화한 스마트 플랫폼을 구축해 드립니다.
                    </motion.p>
                </div>

                <div className="platform-grid">
                    <div className="visual-stack">
                        <motion.img
                            src={`${import.meta.env.BASE_URL}assets/platform_pc.png`}
                            alt="PC Platform Mockup"
                            className="pc-mockup"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        />
                        <motion.img
                            src={`${import.meta.env.BASE_URL}assets/platform_mo1.png`}
                            alt="Mobile Platform Mockup 1"
                            className="mo-mockup-1"
                            initial={{ opacity: 0, x: 50, y: 50 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />

                    </div>

                    <div className="features-container">
                        <div className="features-list">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    className="feature-item"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.4 }}
                                >
                                    <div className="feature-icon-box">
                                        {f.icon}
                                    </div>
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    className="test-banner"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="test-content">
                        <h4>7종의 무료 심리검사 상시 제공</h4>
                        <p>우리 회사는 필요할 때마다 즉시 심리 검사를 시행할 수 있는 상시 진단 체계를 갖추고 있습니다. 조직 전체의 마음 건강을 실시간으로 점검하고, 곧바로 전문 상담으로 연계합니다.</p>

                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default PlatformSection;
