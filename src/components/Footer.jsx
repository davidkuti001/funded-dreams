export default function Footer() {
    return (
        <footer className="text-white py-5" style={{ backgroundColor: '#212529' }}>
            <div className="section-container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                    {/* Brand */}
                    <div className="animate-fade-in-up">
                        <h5 className="fw-bold mb-3" style={{ fontSize: '1.25rem' }}>Funded Dreams</h5>
                        <p style={{ color: '#adb5bd', marginBottom: '1rem', fontSize: '0.95rem', lineHeight: 1.75 }}>
                            Your comprehensive guide to studying abroad with full funding. Empowering students to achieve their global education dreams.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'} aria-label="Twitter">
                                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'} aria-label="LinkedIn">
                                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'} aria-label="Instagram">
                                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <h6 className="fw-bold mb-3 text-uppercase" style={{ fontSize: '0.875rem', letterSpacing: '0.05em' }}>Quick Links</h6>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>Home</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>Table of Contents</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>Pricing</a></li>
                            <li><a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>Blog</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h6 className="fw-bold mb-3 text-uppercase" style={{ fontSize: '0.875rem', letterSpacing: '0.05em' }}>Resources</h6>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>FAQ</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>Study Guide</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>Success Stories</a></li>
                            <li><a href="#" style={{ color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#0dcaf0'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>Community</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <h6 className="fw-bold mb-3 text-uppercase" style={{ fontSize: '0.875rem', letterSpacing: '0.05em' }}>Stay Updated</h6>
                        <p style={{ fontSize: '0.875rem', color: '#adb5bd', marginBottom: '1rem' }}>Get tips and updates directly to your inbox.</p>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                style={{
                                    padding: '0.5rem 0.75rem',
                                    borderRadius: '0.375rem',
                                    backgroundColor: '#343a40',
                                    color: 'white',
                                    border: '1px solid #495057',
                                    fontSize: '0.875rem',
                                    transition: 'border-color 0.15s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#0dcaf0'}
                                onBlur={(e) => e.target.style.borderColor = '#495057'}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ fontSize: '0.875rem', padding: '0.5rem 0.75rem' }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ borderTop: '1px solid #495057', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.875rem', color: '#adb5bd', margin: 0 }}>© 2025 Funded Dreams. All rights reserved.</p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="#" style={{ fontSize: '0.875rem', color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>Privacy Policy</a>
                            <a href="#" style={{ fontSize: '0.875rem', color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>Terms of Service</a>
                            <a href="#" style={{ fontSize: '0.875rem', color: '#adb5bd', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#adb5bd'}>Contact</a>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: '#adb5bd', margin: 0 }}>Made with ❤️ for students chasing their dreams worldwide.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
