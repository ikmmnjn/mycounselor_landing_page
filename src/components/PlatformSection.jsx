import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, ShieldCheck, BarChart3, Settings, ClipboardList } from 'lucide-react';

const PlatformSection = () => {
    const features = [
        {
            icon: <Monitor className="w-6 h-6" />,
            title: "전용 EAP 웹페이지 제공",
            desc: "기업·기관별 최적화된 독립적인 웹 환경을 제공해드립니다."
        },

        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "데이터 기반 맞춤형 직원 관리",
            desc: "기업 담당자의 운영 부담은 낮추고, 데이터 관리는 더욱 정교해집니다."
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

                .platform-quote {
                    margin-top: 60px;
                    padding: 40px;
                    background: var(--bg-alt);
                    border-radius: 24px;
                    border-left: 6px solid var(--secondary);
                    text-align: left;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .platform-quote p {
                    font-size: 1.25rem;
                    color: var(--text-main);
                    line-height: 1.8;
                    margin: 0;
                    font-weight: 500;
                }

                .platform-quote strong {
                    color: var(--secondary);
                    font-weight: 800;
                    display: block;
                    margin-top: 12px;
                    font-size: 1.5rem;
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
                        마이카운슬러의 차별점 2
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        기업 전용 맞춤형 EAP 웹 제공
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        단순한 상담 연결을 넘어, 기업의 고유한 특성이 반영된<br />
                        <strong>실제로 임직원이 사용하는 전용 플랫폼</strong>을 구축해 드립니다.
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
                        <p>우리 회사는 필요할 때마다 즉시 심리 검사를 시행할 수 있는 상시 진단 체계를 갖추고 있습니다. <br />
                            조직 전체의 마음 건강을 실시간으로 점검하고, 곧바로 전문 상담으로 연계합니다.</p>

                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default PlatformSection;
