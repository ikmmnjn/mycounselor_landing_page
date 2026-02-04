import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle2, BarChart } from 'lucide-react';

const EffectivenessSection = () => {
    const stats = [
        { label: "우울 지수", before: 67, after: 22, diff: "-45%p", color: "#3b82f6" },
        { label: "불안 지수", before: 67, after: 27, diff: "-40%p", color: "#60a5fa" },
        { label: "스트레스 지수", before: 45, after: 5, diff: "-40%p", color: "#93c5fd" }
    ];

    return (
        <section id="effectiveness-section" className="effectiveness-section">
            <style>{`
                .effectiveness-section {
                    padding: 80px 0;
                    background-color: #f8fafc;
                }

                .eff-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .eff-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 20px;
                    background-color: white;
                    border: 1px solid var(--border);
                    border-radius: 100px;
                    color: var(--secondary);
                    font-weight: 800;
                    font-size: 0.85rem;
                    margin-bottom: 24px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .eff-title {
                    font-size: clamp(2.25rem, 5vw, 3.5rem);
                    font-weight: 900;
                    color: var(--primary);
                    margin-bottom: 32px;
                    word-break: keep-all;
                    letter-spacing: -0.04em;
                    line-height: 1.15;
                }

                .eff-title span {
                    color: var(--secondary);
                    
                    z-index: 1;
                }

                .eff-title span::after {
                    content: '';
                    position: absolute;
                    bottom: 8px;
                    left: 0;
                    width: 100%;
                    height: 12px;
                    background-color: rgba(59, 130, 246, 0.1);
                    z-index: -1;
                }

                .eff-desc {
                    font-size: 1.5rem;
                    color: var(--text-muted);
                    max-width: 800px;
                    margin: 0 auto;
                    line-height: 1.7;
                    word-break: keep-all;
                    font-weight: 500;
                }

                .eff-card {
                    background-color: var(--white);
                    border-radius: 40px;
                    padding: 80px 60px;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
                    max-width: 1100px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }

                .eff-item-row {
                    display: grid;
                    grid-template-columns: 250px 1fr;
                    gap: 60px;
                    align-items: center;
                    padding-bottom: 48px;
                    border-bottom: 1px solid #f1f5f9;
                }

                .eff-item-row:last-child {
                    padding-bottom: 0;
                    border-bottom: none;
                }

                .eff-stat-box {
                    background-color: #f8fafc;
                    padding: 32px 24px;
                    border-radius: 24px;
                    text-align: center;
                    border: 1px solid var(--border);
                    transition: all 0.3s ease;
                    height: fit-content;
                }

                .eff-stat-label {
                    font-size: 1rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    display: block;
                    color: var(--text-muted);
                }

                .eff-stat-value {
                    font-size: 2.25rem;
                    font-weight: 900;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    color: var(--secondary);
                }

                .eff-stat-value span {
                    font-size: 1.25rem;
                    font-weight: 700;
                }

                .chart-row {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .chart-label-group {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .chart-label {
                    font-weight: 900;
                    color: var(--primary);
                    font-size: 1.4rem;
                }

                .chart-diff-badge {
                    background-color: #ecfdf5;
                    color: #10b981;
                    padding: 6px 16px;
                    border-radius: 100px;
                    font-size: 1.1rem;
                    font-weight: 800;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                }

                .bar-pair-container {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .bar-group {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .bar-label-mini {
                    min-width: 100px;
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: var(--text-muted);
                }

                .bar-track {
                    flex-grow: 1;
                    height: 16px;
                    background-color: #f1f5f9;
                    border-radius: 8px;
                    position: relative;
                }

                .bar-fill {
                    height: 100%;
                    border-radius: 8px;
                    position: relative;
                }

                .bar-fill.before {
                    background-color: #cbd5e1;
                }

                .bar-fill.after {
                    background-color: var(--secondary);
                    box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
                }

                .bar-value {
                    position: absolute;
                    left: calc(100% + 12px);
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 1.1rem;
                    font-weight: 900;
                    color: var(--primary);
                    white-space: nowrap;
                }

                .chart-legend {
                    display: flex;
                    justify-content: flex-end;
                    gap: 24px;
                    margin-bottom: 8px;
                }

                .legend-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 1rem;
                    color: var(--text-muted);
                    font-weight: 700;
                }

                .legend-dot {
                    width: 14px;
                    height: 14px;
                    border-radius: 4px;
                }

                @media (max-width: 968px) {
                    .eff-card {
                        padding: 48px 32px;
                        gap: 40px;
                    }
                    .eff-item-row {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }
                    .eff-stat-box {
                        width: 100%;
                        max-width: 300px;
                        margin: 0 auto;
                    }
                    .chart-label {
                        font-size: 1.25rem;
                    }
                }

                @media (max-width: 640px) {
                    .chart-legend {
                        justify-content: center;
                    }
                }
            `}</style>

            <div className="container">
                <div className="eff-header">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eff-badge"
                    >
                        <TrendingUp size={16} />
                        Impact & Results
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="eff-title"
                    >
                        마이카운슬러의 <span>검증된 효과성</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="eff-desc"
                    >
                        심리상담을 통해 업무 생산성을 저해하는 심리적 요인들을 제거하고<br />
                        조직 구성원들이 건강한 일상을 되찾을 수 있도록 돕습니다.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="eff-card"
                >
                    <div className="chart-legend">
                        <div className="legend-item">
                            <div className="legend-dot" style={{ backgroundColor: '#cbd5e1' }} />
                            상담 전
                        </div>
                        <div className="legend-item">
                            <div className="legend-dot" style={{ backgroundColor: 'var(--secondary)' }} />
                            상담 후
                        </div>
                    </div>

                    {stats.map((s, i) => (
                        <div key={i} className="eff-item-row">
                            <motion.div
                                className="eff-stat-box"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                            >
                                <span className="eff-stat-label">{s.label} 개선</span>
                                <div className="eff-stat-value">
                                    {s.diff}<span>▼</span>
                                </div>
                            </motion.div>

                            <div className="chart-row">
                                <div className="chart-label-group">
                                    <span className="chart-label">{s.label}</span>
                                    <span className="chart-diff-badge">{s.diff} 개선</span>
                                </div>
                                <div className="bar-pair-container">
                                    <div className="bar-group">
                                        <span className="bar-label-mini">상담 전</span>
                                        <div className="bar-track">
                                            <motion.div
                                                className="bar-fill before"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${s.before}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1 }}
                                            >
                                                <span className="bar-value">{s.before}%</span>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="bar-group">
                                        <span className="bar-label-mini">상담 후</span>
                                        <div className="bar-track">
                                            <motion.div
                                                className="bar-fill after"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${s.after}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.2 }}
                                            >
                                                <span className="bar-value">{s.after}%</span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <p style={{ fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center', marginTop: '40px' }}>
                    * 자체 심리측정 도구 기준 사전-사후 긍정 지표(정상/낮음) 개선 비율
                </p>
            </div>
        </section>
    );
};

export default EffectivenessSection;
