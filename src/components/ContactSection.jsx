import React from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
    return (
        <div id="contact" className="contact-form-container">
            <style>{`
                .contact-form-container {
                    margin-top: 60px;
                    background-color: var(--bg-main);
                    border-radius: 32px;
                    padding: 60px 40px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
                    max-width: 1000px;
                    margin: 60px auto 0;
                    border: 1px solid var(--border);
                    position: relative;
                    z-index: 1;
                    scroll-margin-top: 100px;
                }

                .contact-header {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .contact-title {
                    font-size: 1.75rem;
                    font-weight: 800;
                    margin-bottom: 12px;
                    color: var(--primary);
                }

                .contact-desc {
                    color: var(--text-muted);
                    font-size: 1rem;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .form-input-group {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }

                .form-input,
                .form-textarea {
                    width: 100%;
                    padding: 18px 24px;
                    border-radius: 16px;
                    border: 1px solid var(--border);
                    background-color: var(--bg-alt);
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.2s ease;
                    color: var(--text-main);
                }

                .form-input:focus,
                .form-textarea:focus {
                    border-color: var(--secondary);
                    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
                }

                .form-textarea {
                    min-height: 150px;
                    resize: vertical;
                }

                .form-footer {
                    text-align: center;
                    margin-top: 16px;
                }

                .submit-btn {
                    background-color: var(--primary);
                    color: white;
                    padding: 20px 60px;
                    border-radius: 40px;
                    font-size: 1.125rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
                }

                .submit-btn:hover {
                    background-color: var(--primary-light);
                    transform: translateY(-4px);
                    box-shadow: 0 15px 30px rgba(26, 43, 69, 0.2);
                }

                .form-note {
                    margin-top: 20px;
                    color: var(--text-muted);
                    font-size: 0.875rem;
                }

                @media (max-width: 768px) {
                    .form-input-group {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
            <div className="contact-header">
                <h3 className="contact-title">
                    도입 문의 및 제안서 요청
                </h3>
                <p className="contact-desc">
                    필요한 정보를 입력해 주시면 신속하게 안내해 드리겠습니다.
                </p>
            </div>

            <form className="contact-form">
                <div className="form-input-group">
                    <input type="text" placeholder="회사명" className="form-input" />
                    <input type="text" placeholder="담당자 성함" className="form-input" />
                </div>

                <div className="form-input-group">
                    <input type="email" placeholder="이메일" className="form-input" />
                    <input type="tel" placeholder="연락처" className="form-input" />
                </div>

                <div className="form-group">
                    <textarea
                        placeholder="문의 내용 (예: 예상 인원, 필요 서비스 등)"
                        rows="5"
                        className="form-textarea"
                    ></textarea>
                </div>

                <div className="form-footer">
                    <button type="submit" className="submit-btn">
                        제안서 요청하기 <Send size={20} />
                    </button>
                    <p className="form-note">
                        * 입력하신 정보는 문의 응대 목적으로만 사용됩니다.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ContactSection;
