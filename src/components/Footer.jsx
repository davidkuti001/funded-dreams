export default function Footer() {
    return (
        <footer style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 50%, var(--navy-700) 100%)', color: '#a89494', padding: 'clamp(2rem, 5vw, 3rem)' }}>
            <div className="container">
                <div className="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: '1', marginRight: '2rem' }}>
                        <h5 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#ffffff' }}>About Us</h5>
                        <p style={{ fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1.5rem', color: '#ffffff' }}>
                            Funded Dreams is dedicated to helping students achieve their educational goals through comprehensive resources and guidance.
                        </p>
                    </div>

                    <div style={{ flex: '1', marginRight: '2rem' }}>
                        <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Quick Links</h5>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', lineHeight: '2' }}>
                            <li><a href="#hero" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</a></li>
                            <li><a href="#toc" style={{ color: '#ffffff', textDecoration: 'none' }}>Table of Contents</a></li>
                            <li><a href="#pricing" style={{ color: '#ffffff', textDecoration: 'none' }}>Pricing</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: '1' }}>
                        <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Follow Us</h5>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
                            <li>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                                    <i className="fab fa-youtube"></i> YouTube
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                                    <i className="fab fa-facebook"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                                    <i className="fab fa-tiktok"></i> TikTok
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1rem' }}>
                    <p style={{ color: '#ffffff' }}>&copy; {new Date().getFullYear()} Funded Dreams. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
