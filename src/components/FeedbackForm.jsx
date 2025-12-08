import { useState } from "react";
import { useDarkMode } from "../DarkModeContext";
import emailjs from '@emailjs/browser';

export default function FeedbackForm({ isOpen, onClose }) {
    const { darkMode } = useDarkMode();
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Debug: Check environment variables
            console.log('EmailJS Config:', {
                serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
                templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                destinationEmail: import.meta.env.VITE_DESTINATION_EMAIL
            });

            // Initialize EmailJS with your public key
            emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

            // Send email using EmailJS
            // Send feedback to your email address (cedarstravelandtour@gmail.com)
            // The template should be configured to send to your hardcoded email
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_email: formData.email,
                    to_email: import.meta.env.VITE_DESTINATION_EMAIL, // Send to your email
                    message: formData.message,
                    reply_to: formData.email // Allow replies to go back to the user
                }
            );

            if (result.text === 'OK') {
                setSubmitStatus('success');
                setFormData({ email: '', message: '' });
                setTimeout(() => onClose(), 2000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending feedback:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            animation: 'fadeIn 0.3s ease-out'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: darkMode ? '#161b22' : '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                maxWidth: '500px',
                width: '90%',
                maxHeight: '80vh',
                overflow: 'auto',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                animation: 'slideInUp 0.3s ease-out',
                border: darkMode ? '1px solid #30363d' : '1px solid #e1e5e9'
            }} onClick={(e) => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{
                        margin: 0,
                        color: darkMode ? '#e6edf3' : '#1a1a2e',
                        fontSize: '1.5rem',
                        fontWeight: '600'
                    }}>
                        Send us your feedback
                    </h3>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            color: darkMode ? '#8b949e' : '#6c757d',
                            padding: '0.25rem',
                            borderRadius: '4px',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = darkMode ? 'rgba(177, 186, 196, 0.2)' : 'rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'none';
                        }}
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label
                            htmlFor="email"
                            style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                color: darkMode ? '#e6edf3' : '#374151',
                                fontSize: '0.95rem',
                                fontWeight: '500'
                            }}
                        >
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: darkMode ? '1px solid #30363d' : '1px solid #d1d5db',
                                backgroundColor: darkMode ? '#0d1117' : '#ffffff',
                                color: darkMode ? '#e6edf3' : '#374151',
                                fontSize: '1rem',
                                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                                boxSizing: 'border-box'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#0d6efd';
                                e.target.style.boxShadow = '0 0 0 3px rgba(13, 110, 253, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = darkMode ? '#30363d' : '#d1d5db';
                                e.target.style.boxShadow = 'none';
                            }}
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label
                            htmlFor="message"
                            style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                color: darkMode ? '#e6edf3' : '#374151',
                                fontSize: '0.95rem',
                                fontWeight: '500'
                            }}
                        >
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                border: darkMode ? '1px solid #30363d' : '1px solid #d1d5db',
                                backgroundColor: darkMode ? '#0d1117' : '#ffffff',
                                color: darkMode ? '#e6edf3' : '#374151',
                                fontSize: '1rem',
                                resize: 'vertical',
                                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                                boxSizing: 'border-box',
                                fontFamily: 'inherit'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#0d6efd';
                                e.target.style.boxShadow = '0 0 0 3px rgba(13, 110, 253, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = darkMode ? '#30363d' : '#d1d5db';
                                e.target.style.boxShadow = 'none';
                            }}
                            placeholder="Tell us your thoughts, questions, or feedback..."
                        />
                    </div>

                    {submitStatus === 'success' && (
                        <div style={{
                            padding: '1rem',
                            backgroundColor: 'rgba(25, 135, 84, 0.1)',
                            border: '1px solid rgba(25, 135, 84, 0.3)',
                            borderRadius: '8px',
                            marginBottom: '1rem',
                            color: '#198754',
                            fontSize: '0.9rem',
                            textAlign: 'center'
                        }}>
                            ✅ Message sent successfully! We'll get back to you soon.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div style={{
                            padding: '1rem',
                            backgroundColor: 'rgba(220, 53, 69, 0.1)',
                            border: '1px solid rgba(220, 53, 69, 0.3)',
                            borderRadius: '8px',
                            marginBottom: '1rem',
                            color: '#dc3545',
                            fontSize: '0.9rem',
                            textAlign: 'center'
                        }}>
                            ❌ Failed to send message. Please try again or contact us directly.
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                border: darkMode ? '1px solid #30363d' : '1px solid #d1d5db',
                                backgroundColor: 'transparent',
                                color: darkMode ? '#e6edf3' : '#6c757d',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = darkMode ? 'rgba(177, 186, 196, 0.1)' : 'rgba(0, 0, 0, 0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                border: 'none',
                                backgroundColor: isSubmitting ? '#6c757d' : '#0d6efd',
                                color: '#ffffff',
                                fontSize: '1rem',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                transition: 'all 0.2s ease',
                                fontWeight: '500'
                            }}
                            onMouseEnter={(e) => {
                                if (!isSubmitting) {
                                    e.target.style.backgroundColor = '#0b5ed7';
                                    e.target.style.transform = 'translateY(-1px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isSubmitting) {
                                    e.target.style.backgroundColor = '#0d6efd';
                                    e.target.style.transform = 'translateY(0)';
                                }
                            }}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}
