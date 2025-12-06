import { useState, useEffect } from "react";
import { DarkModeProvider } from "./DarkModeContext";
import Hero from "./components/Hero";
import TOC from "./components/TOC";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Handle scroll to show/hide scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Apply dark mode to document
    useEffect(() => {
        if (darkMode) {
            document.documentElement.style.colorScheme = 'dark';
            document.body.style.backgroundColor = '#0d1117';
            document.body.style.color = '#e6edf3';
        } else {
            document.documentElement.style.colorScheme = 'light';
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
        }
    }, [darkMode]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openWhatsApp = () => {
        const phoneNumber = "2348126462556"; // Replace with your WhatsApp number
        const message = "Hi, I'm interested in the Funded Dreams ebook!";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div style={{
            backgroundColor: darkMode ? '#0d1117' : '#ffffff',
            color: darkMode ? '#e6edf3' : '#000000',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            minHeight: '100vh'
        }}>
            {/* Dark Mode Toggle Button */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                style={{
                    position: 'fixed',
                    top: '1.5rem',
                    right: '1.5rem',
                    zIndex: 1000,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: darkMode ? '#1f6feb' : '#0d6efd',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    color: '#ffffff'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
                {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Main Content */}
            <DarkModeProvider value={{ darkMode, setDarkMode }}>
                <div className="font-sans">
                    <Hero />
                    <TOC />
                    <Pricing />
                    <Footer />
                </div>
            </DarkModeProvider>

            {/* Sticky Buttons - Bottom Right */}
            <div style={{
                position: 'fixed',
                bottom: '2rem',
                right: '1.5rem',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'flex-end'
            }}>
                {/* WhatsApp Button with Label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{
                        backgroundColor: '#25d366',
                        color: '#ffffff',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)',
                        animation: 'pulse 2s infinite'
                    }}>
                        💬 Message us
                    </span>
                    <button
                        onClick={openWhatsApp}
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: '#25d366',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.6rem',
                            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            animation: showScrollTop ? 'slideInUp 0.4s ease-out' : 'slideOutDown 0.4s ease-in'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.15)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
                        }}
                        title="Message us on WhatsApp"
                    >
                        💬
                    </button>
                </div>

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: darkMode ? '#1f6feb' : '#0d6efd',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.6rem',
                            boxShadow: '0 4px 15px rgba(13, 110, 253, 0.4)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            animation: 'slideInUp 0.4s ease-out'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.15)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(13, 110, 253, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(13, 110, 253, 0.4)';
                        }}
                        title="Back to top"
                    >
                        ↑
                    </button>
                )}
            </div>

            {/* Animations */}
            <style>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideOutDown {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                }
            `}</style>
        </div>
    );
}

export default App;
