import { useDarkMode } from "../DarkModeContext";

export default function Footer() {
    const { darkMode } = useDarkMode();
    const linkHoverStyle = {
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
    };

    const handleLinkHover = (e, isHover) => {
        e.target.style.color = isHover ? '#ffd700' : '#ffffff';
        e.target.style.transform = isHover ? 'translateX(4px)' : 'translateX(0)';
    };

    const handleSocialHover = (e, isHover) => {
        e.currentTarget.style.color = isHover ? '#ffd700' : '#ffffff';
        e.currentTarget.style.transform = isHover ? 'scale(1.2) translateY(-4px)' : 'scale(1) translateY(0)';
    };

    return (
        <footer style={{
            background: darkMode
                ? 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)'
                : 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 50%, var(--navy-700) 100%)',
            color: '#ffffff',
            padding: 'clamp(3rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)',
            marginTop: '4rem',
            transition: 'background 0.3s ease',
        }}>
            <style>{`
                @media (max-width: 768px) {
                    footer .footer-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2.5rem !important;
                    }
                }
            `}</style>

            <div className="container-fluid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '3rem',
                    marginBottom: '2.5rem',
                }}>
                    {/* About Section */}
                    <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
                        <h5 style={{
                            fontWeight: '700',
                            marginBottom: '1.2rem',
                            fontSize: '1.1rem',
                            color: '#ffffff',
                            letterSpacing: '0.5px',
                        }}>About Funded Dreams</h5>
                        <p style={{
                            fontSize: '0.9rem',
                            lineHeight: '1.6',
                            color: '#d0d0d0',
                        }}>
                            Empowering students to unlock global educational opportunities through comprehensive guidance and resources.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
                        <h5 style={{
                            fontWeight: '700',
                            marginBottom: '1.2rem',
                            fontSize: '1.1rem',
                            color: '#ffffff',
                            letterSpacing: '0.5px',
                        }}>Quick Links</h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <a
                                    href="#hero"
                                    style={{
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        ...linkHoverStyle,
                                        display: 'inline-block',
                                    }}
                                    onMouseEnter={(e) => handleLinkHover(e, true)}
                                    onMouseLeave={(e) => handleLinkHover(e, false)}
                                >
                                    Home
                                </a>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <a
                                    href="#toc"
                                    style={{
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        ...linkHoverStyle,
                                        display: 'inline-block',
                                    }}
                                    onMouseEnter={(e) => handleLinkHover(e, true)}
                                    onMouseLeave={(e) => handleLinkHover(e, false)}
                                >
                                    Chapters
                                </a>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <a
                                    href="#pricing"
                                    style={{
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        ...linkHoverStyle,
                                        display: 'inline-block',
                                    }}
                                    onMouseEnter={(e) => handleLinkHover(e, true)}
                                    onMouseLeave={(e) => handleLinkHover(e, false)}
                                >
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
                        <h5 style={{
                            fontWeight: '700',
                            marginBottom: '1.2rem',
                            fontSize: '1.1rem',
                            color: '#ffffff',
                            letterSpacing: '0.5px',
                        }}>Follow Us</h5>
                        <div style={{ display: 'flex', gap: '1.2rem' }}>
                            <a
                                href="https://youtube.com/@cedarstravelandtours?si=uqtfBeHvKUXhoKjW"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#ffffff',
                                    fontSize: '1.4rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    ...linkHoverStyle,
                                }}
                                onMouseEnter={(e) => handleSocialHover(e, true)}
                                onMouseLeave={(e) => handleSocialHover(e, false)}
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/share/r/14Se1EpD9Fb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#ffffff',
                                    fontSize: '1.4rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    ...linkHoverStyle,
                                }}
                                onMouseEnter={(e) => handleSocialHover(e, true)}
                                onMouseLeave={(e) => handleSocialHover(e, false)}
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="https://www.tiktok.com/@cedarstravel"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#ffffff',
                                    fontSize: '1.4rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    ...linkHoverStyle,
                                }}
                                onMouseEnter={(e) => handleSocialHover(e, true)}
                                onMouseLeave={(e) => handleSocialHover(e, false)}
                            >
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/cedarstravelsandtours?igsh=MXB6ODlzanV6dTFzcg%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#ffffff',
                                    fontSize: '1.4rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    ...linkHoverStyle,
                                }}
                                onMouseEnter={(e) => handleSocialHover(e, true)}
                                onMouseLeave={(e) => handleSocialHover(e, false)}
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <div style={{
                    textAlign: 'center',
                    borderTop: '1px solid rgba(255, 215, 0, 0.2)',
                    paddingTop: '1.5rem',
                    animation: 'fadeInUp 0.6s ease-out 0.3s both',
                }}>
                    <p style={{
                        color: '#b0b0b0',
                        fontSize: '0.85rem',
                        margin: 0,
                        letterSpacing: '0.3px',
                    }}>
                        &copy; {new Date().getFullYear()} Funded Dreams. All rights reserved.
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </footer>
    );
}
