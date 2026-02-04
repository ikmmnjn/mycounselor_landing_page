import React from 'react';
import { motion } from 'framer-motion';
// Removed unused icons: MessageCircle, Brain, Sparkles, AlertTriangle

import engagementStats from '../assets/engagement-stats.png';

// Import New 3D Assets
import solLaptop from '../assets/intro/sol_laptop.png';
import solDoc from '../assets/intro/sol_doc.png';
import solStar from '../assets/intro/sol_star.png';
import solTrophy from '../assets/intro/sol_trophy.png';

import avatarThinking from '../assets/intro/avatar_thinking.png';
import avatarWorried from '../assets/intro/avatar_worried.png';
import avatarShhh from '../assets/intro/avatar_shhh.png';
import avatarSad from '../assets/intro/avatar_sad.png';
import avatarExpert from '../assets/intro/avatar_expert.png';
import avatarPanic from '../assets/intro/avatar_panic.png';

const IntroductionSection = () => {

    const solutions = [
        { icon: solLaptop, title: "압도적인 사용성", desc: "온·오프라인 어디서나\n즉시 상담 가능" },
        { icon: solDoc, title: "까다로운 전문성", desc: "엄격한 전문 자격 검증\n1600명+ 상담사 네트워크" },
        { icon: solStar, title: "높은 상담 만족도", desc: "★4.85점\n높은 상담 만족도와 후기" },
        { icon: solTrophy, title: "비교불가 인지도", desc: "400만 회원 보유\n국내 1등 심리상담 플랫폼" }
    ];

    return (
        <section className="intro-section">
            <style>{`
                .intro-section {
                    background-color: #f8fafc;
                    padding: 120px 0;
                    overflow: hidden;
                }


                .stats-phase {
                    max-width: 900px;
                    margin: 0 auto 200px;
                    text-align: center;
                }

                .stats-image-container {
                    background: white;
                    padding: 40px;
                    border-radius: 32px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                    margin-bottom: 40px;
                }

                .stats-image-container img {
                    width: 100%;
                    height: auto;
                    border-radius: 12px;
                }

                .quiet-quitting-text {
                    font-size: 1.75rem;
                    color: #1e293b;
                    line-height: 1.6;
                    font-weight: 700;
                    word-break: keep-all;
                }

                .quiet-quitting-text span {
                    color: #ef4444;
                    font-weight: 900;
                }

                .chat-phase {
                    max-width: 1100px;
                    margin: 0 auto 180px;
                    position: relative;
                    height: 550px;
                }

                .chat-instance {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    z-index: 10;
                }

                .chat-avatar {
                    width: 96px;
                    height: 96px;
                    background: white;
                    border-radius: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    flex-shrink: 0;
                    box-shadow: 0 16px 40px rgba(0,0,0,0.1);
                    border: 1px solid #f1f5f9;
                }

                .chat-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .chat-bubble {
                    padding: 20px 32px;
                    border-radius: 24px;
                    font-size: 1.35rem;
                    line-height: 1.4;
                    word-break: keep-all;
                    background: white;
                    color: #1e293b;
                    border: 1px solid #e2e8f0;
                    font-weight: 700;
                    box-shadow: 0 12px 40px rgba(0,0,0,0.05);
                    white-space: nowrap;
                    letter-spacing: -0.02em;
                }

                /* Variant styles for scatter */
                .chat-instance:nth-child(1) { top: 5%; left: 0%; }
                .chat-instance:nth-child(2) { top: 22%; right: 5%; flex-direction: row-reverse; }
                .chat-instance:nth-child(3) { top: 42%; left: 8%; }
                .chat-instance:nth-child(4) { top: 58%; right: 12%; flex-direction: row-reverse; }
                .chat-instance:nth-child(5) { top: 75%; left: 5%; }
                .chat-instance:nth-child(6) { top: 88%; right: 0%; flex-direction: row-reverse; }

                .chat-instance:nth-child(even) .chat-bubble {
                    background: #f8fafc;
                    border-color: #e2e8f0;
                }

                .solution-phase {
                    background-color: white;
                    padding: 120px 60px;
                    border-radius: 56px;
                    box-shadow: 0 40px 100px rgba(0,0,0,0.06);
                    border: 1px solid #f1f5f9;
                }

                .solution-header {
                    text-align: center;
                    margin-bottom: 100px;
                }

                .solution-tag {
                    display: inline-block;
                    padding: 8px 20px;
                    background: #eff6ff;
                    color: #3b82f6;
                    border-radius: 99px;
                    font-weight: 800;
                    font-size: 1rem;
                    margin-bottom: 24px;
                    letter-spacing: 0.05em;
                }

                .solution-title {
                    font-size: 3.25rem;
                    font-weight: 900;
                    color: #0f172a;
                    margin-bottom: 32px;
                    letter-spacing: -0.03em;
                }

                .solution-desc {
                    font-size: 1.5rem;
                    color: #64748b;
                    line-height: 1.7;
                    max-width: 800px;
                    margin: 0 auto;
                    word-break: keep-all;
                    font-weight: 500;
                }

                .solution-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 32px;
                    margin-top: 80px;
                }

                .sol-card {
                    text-align: center;
                    padding: 56px 32px;
                    border-radius: 48px;
                    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                    background: #ffffff;
                    border: 1px solid #f1f5f9;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
                }

                .sol-card:hover {
                    transform: translateY(-16px);
                    box-shadow: 0 30px 60px -12px rgba(59, 130, 246, 0.15);
                    border-color: #e2e8f0;
                }

                .sol-icon {
                    width: 96px;
                    height: 96px;
                    background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
                    border-radius: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 32px;
                    position: relative;
                    box-shadow: 
                        0 10px 20px rgba(0, 0, 0, 0.03),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.8);
                    overflow: hidden;
                }

                .sol-icon img {
                    width: 70%;
                    height: 70%;
                    object-fit: contain;
                }

                .sol-icon::after {
                    content: '';
                    position: absolute;
                    inset: -4px;
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0));
                    border-radius: 32px;
                    z-index: -1;
                    filter: blur(8px);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .sol-card:hover .sol-icon::after {
                    opacity: 1;
                }

                .sol-card h4 {
                    color: #0f172a;
                    margin-bottom: 16px;
                    letter-spacing: -0.01em;
                }

                .sol-card p {
                    font-size: 0.95rem;
                    color: #64748b;
                    line-height: 1.7;
                    white-space: pre-line;
                    word-break: keep-all;
                }

                @media (max-width: 1024px) {
                    .solution-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .twist-main { font-size: 2.5rem; }
                    .twist-sub { font-size: 1.2rem; }
                    .solution-title { font-size: 1.8rem; }
                    .solution-grid { grid-template-columns: 1fr; }
                    .stats-image-container { padding: 20px; }
                    .quiet-quitting-text { font-size: 1.2rem; }
                }
            `}</style>

            <div className="container">



                {/* Phase 2: Chat Interaction (Questions Only) */}
                <div className="chat-phase">
                    {[
                        { avatar: avatarThinking, text: "“업무 효율이 점점 떨어지는 것 같아요.”", x: -50, y: -20, rotate: -5 },
                        { avatar: avatarWorried, text: "“도입한 EAP, 정작 직원들은 안 써요.”", x: 50, y: -30, rotate: 5 },
                        { avatar: avatarShhh, text: "“비밀 보장이 정말 되는 게 맞나요?”", x: -40, y: 10, rotate: -3 },
                        { avatar: avatarSad, text: "“퇴사율이 늘어 고민이 많습니다.”", x: 60, y: 20, rotate: 4 },
                        { avatar: avatarExpert, text: "“진짜 전문가가 상담해주는 건가요?”", x: -30, y: 40, rotate: -2 },
                        { avatar: avatarPanic, text: "“상담 받으려면 복잡할 것 같아요.”", x: 40, y: 50, rotate: 6 }
                    ].map((chat, i) => (
                        <div className="chat-instance" key={i}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0, x: chat.x, y: chat.y, rotate: chat.rotate * 2 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: chat.rotate }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                    delay: i * 0.15
                                }}
                                className="chat-avatar"
                            >
                                <img src={chat.avatar} alt="avatar" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0, x: chat.x * 0.5, y: chat.y * 0.5 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 280,
                                    damping: 18,
                                    delay: i * 0.15 + 0.1
                                }}
                                className="chat-bubble"
                            >
                                {chat.text}
                            </motion.div>
                        </div>
                    ))}
                </div>




            </div>
        </section>
    );
};

export default IntroductionSection;
