import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Zap, ShieldAlert, Clock, CheckCircle2 } from 'lucide-react';

const TargetSection = () => {
    const targets = [
        {
            icon: Users,
            color: "#3b82f6", // Blue
            bg: "#eff6ff",
            title: "모든 규모의 조직",
            desc: "조직 규모와 관계없이 직원 마음건강에 대한 관리 체계가 필요한 모든 기업·기관"
        },
        {
            icon: Building2,
            color: "#6366f1", // Indigo
            bg: "#eef2ff",
            title: "공공 및 기관",
            desc: "공공기관·공기업·교육기관 등 체계적인 운영과 전문적인 관리가 필요한 조직"
        },
        {
            icon: Zap,
            color: "#f59e0b", // Amber
            bg: "#fffbeb",
            title: "고스트레스 조직",
            desc: "감정노동이나 대인관계 스트레스 노출이 높은 직무 환경의 조직"
        },
        {
            icon: ShieldAlert,
            color: "#ef4444", // Red
            bg: "#fef2f2",
            title: "위기 대응 필요 조직",
            desc: "사건·이슈 발생 시 즉각적이고 전문적인 대응 기준이 필요한 조직"
        },
        {
            icon: Clock,
            color: "#10b981", // Emerald
            bg: "#ecfdf5",
            title: "상시 상담 체계 필요",
            desc: "단발성 프로그램이 아닌 365일 상시 운영되는 안정적인 상담 인프라가 필요한 조직"
        },
        {
            icon: CheckCircle2,
            color: "#06b6d4", // Cyan
            bg: "#ecfeff",
            title: "효과 재검증 조직",
            desc: "EAP를 이미 도입했지만, 실질적인 참여율과 만족도 등 효과를 체감하지 못했던 조직"
        }
    ];

    return (
        <section className="target-section">
            <style>{`
                .target-section {
                    padding: 120px 0;
                    background-color: #ffffff;
                }

                .target-header {
                    text-align: center;
                    margin-bottom: 80px;
                }

                .target-tag {
                    display: inline-block;
                    color: #3b82f6;
                    font-weight: 800;
                    font-size: 1.1rem;
                    margin-bottom: 24px;
                    letter-spacing: 0.1em;
                }

                .target-title {
                    font-size: clamp(2.25rem, 4vw, 3.5rem);
                    font-weight: 900;
                    color: #0f172a;
                    letter-spacing: -0.04em;
                    line-height: 1.15;
                    word-break: keep-all;
                }

                .target-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                    margin-top: 80px;
                }

                .target-card {
                    padding: 56px 40px;
                    border-radius: 40px;
                    background: #f8fafc;
                    border: 1px solid #f1f5f9;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 32px;
                }

                .target-card:hover {
                    background: white;
                    transform: translateY(-12px);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.06);
                    border-color: #e2e8f0;
                }

                .target-icon-wrapper {
                    width: 72px;
                    height: 72px;
                    border-radius: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }

                .target-card:hover .target-icon-wrapper {
                    transform: scale(1.1) rotate(5deg);
                }

                .target-content h3 {
                    font-size: 1.75rem;
                    font-weight: 900;
                    color: #1e293b;
                    margin-bottom: 20px;
                    line-height: 1.2;
                    letter-spacing: -0.02em;
                }

                .target-content p {
                    font-size: 1.15rem;
                    color: #64748b;
                    line-height: 1.6;
                    word-break: keep-all;
                    font-weight: 500;
                }

                @media (max-width: 1024px) {
                    .target-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 768px) {
                    .target-section { padding: 80px 0; }
                    .target-title { font-size: 2rem; }
                    .target-grid { grid-template-columns: 1fr; }
                    .target-card { padding: 32px; }
                }
            `}</style>

            <div className="container">
                <div className="target-header">
                    <span className="target-tag">TARGET AUDIENCE</span>
                    <h2 className="target-title">이런 조직에 EAP가 필요합니다</h2>
                </div>

                <div className="target-grid">
                    {targets.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="target-card"
                        >
                            <div
                                className="target-icon-wrapper"
                                style={{ backgroundColor: item.bg, color: item.color }}
                            >
                                <item.icon size={32} strokeWidth={2.5} />
                            </div>
                            <div className="target-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetSection;
