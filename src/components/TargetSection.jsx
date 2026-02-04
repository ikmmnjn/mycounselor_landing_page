import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Zap, ShieldAlert, Clock, CheckCircle2 } from 'lucide-react';

const TargetSection = () => {
    const targets = [
        {
            illu: "management.png",
            color: "#3b82f6", // Blue
            bg: "#eff6ff",
            title: "관리 부담이 과도하게 집중된 조직",
            desc: "한정된 관리자에 비해 직원이 많아서 관리 부담이 버거운 조직"
        },
        {
            illu: "public_inst.png",
            color: "#6366f1", // Indigo
            bg: "#eef2ff",
            title: "공공·준공공 기관",
            desc: "공공기관·공기업·교육기관 등\n조직 특성상 내부에서 정서 이슈를\n다루기 어렵고 외부 전문성과 비밀보장이 필요한 조직"
        },
        {
            illu: "stress.png",
            color: "#f59e0b", // Amber
            bg: "#fffbeb",
            title: "감정 노동과 스트레스가 높은 조직",
            desc: "민원, 고객 응대, 보호자·학부모 대응 등 업무 특성상 감정 소진이 누적되기 쉬운 조직"
        },
        {
            illu: "burnout.png",
            color: "#ef4444", // Red
            bg: "#fef2f2",
            title: "이직·휴직·번아웃 신호가 반복되는 조직",
            desc: "갑작스러운 퇴사, 병가, 휴직이 늘어나지만 그 이유를 파악하기 어려운 조직"
        },
        {
            illu: "usage.png",
            color: "#10b981", // Emerald
            bg: "#ecfdf5",
            title: "EAP를 도입했지만,\n실제 이용률이 낮은 조직",
            desc: "제도는 있지만 직원들이 신뢰하지 않거나 접근하지 않는 상황의 조직"
        },
        {
            illu: "risk.png",
            color: "#06b6d4", // Cyan
            bg: "#ecfeff",
            title: "‘사람 문제’를 리스크로\n인식하기 시작한 조직",
            desc: "갈등, 사건, 민원, 이슈를 경험했거나 사전에 관리할 필요성을 느끼는 조직"
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
                    width: 100px;
                    height: 100px;
                    border-radius: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                    overflow: hidden;
                    padding: 0;
                    background: white !important; /* Force white background for images */
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }

                .target-icon-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
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
                    white-space: pre-wrap;
                    letter-spacing: -0.02em;
                }

                .target-content p {
                    font-size: 1.15rem;
                    color: #64748b;
                    line-height: 1.6;
                    white-space: pre-wrap;
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
                    .target-icon-wrapper { width: 80px; height: 80px; }
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
                            <div className="target-icon-wrapper">
                                <img src={`${import.meta.env.BASE_URL}assets/target/${item.illu}`} alt={item.title} />
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
