import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Globe } from 'lucide-react';

const CounselorMarquee = () => {
    // Generate randomized list of counselor images (0 to 92)
    const randomizedImages = useMemo(() => {
        const indices = Array.from({ length: 93 }, (_, i) => i);
        return [...indices].sort(() => Math.random() - 0.5);
    }, []);

    // Double the list for seamless looping
    const displayImages = [...randomizedImages, ...randomizedImages];

    return (
        <div className="marquee-container">
            <motion.div
                className="marquee-track"
                animate={{ x: [0, -12000] }}
                transition={{
                    duration: 120,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {displayImages.map((idx, i) => (
                    <div key={`${idx}-${i}`} className="marquee-item">
                        <img
                            src={`${import.meta.env.BASE_URL}images/counselors/counselor_${idx}.jpg`}
                            alt={`Counselor ${idx}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const SupervisorSection = () => {
    const supervisorDetails = [
        { icon: Users, label: "보유 인력", value: "280명 이상의 1급 슈퍼바이저급 전문가" },
        { icon: Award, label: "평균 경력", value: "10년 이상의 임상 및 상담 실무 경력" },
        { icon: Target, label: "전문 분야", value: "개인상담, 집단상담, 위기개입, 조직상담 등 전 영역" },
        { icon: Globe, label: "협력 네트워크", value: "명상협회, 물리치료사협회, 코칭협회, 테라피스트 네트워크 등 전문 연계망 보유" }
    ];

    return (
        <section id="supervisor" className="supervisor-section">
            <style>{`
                .supervisor-section {
                    background-color: transparent;
                    padding: 80px 0;
                    scroll-margin-top: 80px;
                    position: relative;
                    overflow: hidden;
                }

                .supervisor-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; height: 1px;
                    background: linear-gradient(90deg, transparent, var(--secondary), transparent);
                    opacity: 0.2;
                }

                .supervisor-title {
                    font-size: clamp(2.25rem, 5vw, 3.5rem);
                    font-weight: 900;
                    margin-bottom: 48px;
                    word-break: keep-all;
                    line-height: 1.15;
                    text-align: center;
                    color: #0f172a;
                    letter-spacing: -0.04em;
                }

                .supervisor-title span {
                    color: var(--secondary);
                    position: relative;
                    display: inline-block;
                }

                .supervisor-title span::after {
                    content: '';
                    position: absolute;
                    bottom: 12px; left: 0; right: 0;
                    height: 16px;
                    background: var(--secondary);
                    opacity: 0.1;
                    z-index: -1;
                }

                .supervisor-desc-block {
                    max-width: 800px;
                    margin: 0 auto 60px;
                    text-align: center;
                }

                .supervisor-desc {
                    color: #475569;
                    font-size: 1.35rem;
                    line-height: 1.7;
                    margin-bottom: 32px;
                    word-break: keep-all;
                    font-weight: 500;
                }

                .supervisor-desc b {
                    color: var(--secondary);
                    font-weight: 700;
                }

                .strengths-header {
                    margin-top: 60px;
                    margin-bottom: 32px;
                    text-align: center;
                }

                .strengths-badge {
                    display: inline-block;
                    padding: 6px 16px;
                    background-color: var(--secondary);
                    color: white;
                    border-radius: 6px;
                    font-size: 0.8rem;
                    font-weight: 800;
                    margin-bottom: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .strengths-title {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #1e293b;
                    letter-spacing: -0.01em;
                }

                .supervisor-info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 16px;
                    margin-bottom: 60px;
                }

                .info-item {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    padding: 32px;
                    background-color: #f1f5f9;
                    border-radius: 24px;
                    border: 1px solid var(--border);
                }

                .info-label {
                    font-size: 0.9rem;
                    color: var(--secondary);
                    font-weight: 800;
                    margin-bottom: 8px;
                    display: block;
                }

                .info-value {
                    font-weight: 800;
                    font-size: 1.2rem;
                    color: var(--primary);
                    line-height: 1.5;
                    word-break: keep-all;
                }

                .supervisor-visuals {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    width: 100%;
                }

                .photo-wall-frame {
                    background: white;
                    padding: 0 0 40px 0; /* Added bottom padding */
                    border-radius: 32px;
                    box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.08);
                    border: 1px solid #e2e8f0;
                    max-width: 1200px;
                    width: 100%;
                    overflow: hidden;
                    background: linear-gradient(to bottom, #ffffff, #f8fafc);
                }

                .frame-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 24px 40px;
                    background: white;
                    border-bottom: 1px solid #f1f5f9;
                }

                .frame-title-group {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .frame-title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #0f172a;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin: 0;
                }

                .frame-subtitle {
                    font-size: 0.85rem;
                    color: #64748b;
                    font-weight: 500;
                    padding-left: 32px;
                }

                .frame-status {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: #f0fdf4;
                    padding: 8px 16px;
                    border-radius: 12px;
                    border: 1px solid #dcfce7;
                }

                .status-dot {
                    width: 8px;
                    height: 8px;
                    background: #22c55e;
                    border-radius: 50%;
                    position: relative;
                }

                .status-dot::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: #22c55e;
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(3); opacity: 0; }
                }

                .status-text {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #15803d;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .frame-badge {
                    background: #fdf2f2;
                    color: var(--secondary);
                    padding: 4px 12px;
                    border-radius: 100px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    border: 1px solid #fee2e2;
                }

                .marquee-container {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    background: transparent;
                    padding: 40px 0;
                    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                }

                .marquee-track {
                    display: flex;
                    gap: 12px;
                    width: fit-content;
                }

                .marquee-item {
                    flex: 0 0 auto;
                    width: 220px;
                    height: 280px;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    border: 1px solid #e2e8f0;
                }

                .marquee-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .wall-caption {
                    margin-top: 24px;
                    text-align: center;
                    color: #64748b;
                    font-size: 0.95rem;
                    font-weight: 500;
                }

                @media (max-width: 768px) {
                    .supervisor-section { padding: 60px 0; }
                    .supervisor-title { font-size: 2rem; text-align: left; }
                    .supervisor-desc-block { text-align: left; margin-bottom: 40px; }
                    .supervisor-desc { font-size: 1rem; }
                    .strengths-header { text-align: left; margin-top: 40px; }
                    .photo-wall-frame { border-radius: 24px; }
                    .frame-header { padding: 20px; flex-direction: column; align-items: flex-start; gap: 16px; }
                    .frame-subtitle { padding-left: 0; }
                    .marquee-item { width: 160px; height: 210px; }
                }
            `}</style>
            <div className="container">
                <div className="supervisor-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.span
                        className="strength-badge"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-block',
                            padding: '6px 16px',
                            backgroundColor: 'var(--secondary)',
                            color: 'white',
                            borderRadius: '100px',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '0.05em'
                        }}
                    >
                        마이카운슬러의 차별점 1
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="supervisor-title"
                        style={{ marginBottom: '24px' }}
                    >
                        마이카운슬러는 <span>슈퍼바이저</span>가 직접 상담합니다.
                    </motion.h2>
                    <div className="supervisor-desc-block" style={{ marginBottom: '0' }}>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="supervisor-desc"
                        >
                            <b>슈퍼바이저</b>란 상담사를 지도하는 상담사를 말합니다.<br />
                        </motion.p>
                    </div>
                </div>

                <div className="strengths-header">
                    <span className="strengths-badge">마이카운슬러 협력 슈퍼바이저</span>
                    <h3 className="strengths-title">검증된 전문가 인프라</h3>
                </div>

                <div className="supervisor-info-grid">
                    {supervisorDetails.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="info-item"
                        >
                            <div>
                                <span className="info-label">{item.label}</span>
                                <h4 className="info-value">{item.value}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="supervisor-visuals">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="photo-wall-frame"
                    >
                        <div className="frame-header">
                            <div className="frame-title-group">
                                <h5 className="frame-title">
                                    <Award size={22} color="var(--secondary)" strokeWidth={2.5} />
                                    공인 슈퍼바이저 네트워크
                                </h5>
                                <span className="frame-subtitle">국가 공인 및 유관 학회 1급 자격 보유 전문가</span>
                            </div>

                        </div>

                        <CounselorMarquee />

                        <p className="wall-caption">마이카운슬러와 함께하는 280여 명의 1급 전문가들이 최고 수준의 상담 품질을 약속합니다.</p>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default SupervisorSection;
