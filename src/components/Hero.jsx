import ebookCover from "../assets/ebookCover.png"; // Import the PNG file

export default function Hero() {
    return (
        <section
            className="hero-gradient text-white py-5 px-4 overflow-hidden"
            style={{
                paddingTop: "clamp(2rem, 6vw, 4rem)", // Reduced padding
                paddingBottom: "clamp(2rem, 6vw, 4rem)",
            }}
        >
            <div className="section-container">
                <div
                    className="row align-items-center"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                        gap: "clamp(1rem, 5vw, 3rem)",
                        alignItems: "center",
                    }}
                >
                    {/* Right: Image */}
                    <div
                        className="animate-fade-in-down"
                        style={{ order: -1, marginBottom: "2rem" }}
                    >
                        <img
                            src={ebookCover}
                            alt="Funded Dreams Ebook Cover"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                                borderRadius: "0.375rem",
                                background: "none",
                            }}
                        />
                    </div>

                    {/* Left: Text Content */}
                    <div className="animate-fade-in-up">
                        <span
                            className="badge text-bg-info mb-3"
                            style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em" }}
                        >
                            YOUR PATH TO GLOBAL EDUCATION
                        </span>
                        <h1
                            className="fw-bold mb-4"
                            style={{ fontSize: "clamp(2.5rem, 8vw, 3.5rem)", lineHeight: 1.2 }}
                        >
                            Funded Dreams
                        </h1>
                        <p
                            className="lead mb-4"
                            style={{ fontSize: "1.25rem", fontWeight: 300, color: "rgba(255,255,255,0.9)" }}
                        >
                            Your comprehensive step-by-step guide to studying abroad with full funding.
                        </p>
                        <p
                            style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75 }}
                            className="mb-4"
                        >
                            Discover how to navigate the complex world of international education financing. Learn proven
                            strategies from students who have successfully secured scholarships and alternative funding
                            options to make your dream education a reality.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: "clamp(0.5rem, 2vw, 1rem)",
                                flexWrap: "wrap",
                                marginTop: "2rem",
                                marginBottom: "3rem",
                            }}
                        >
                            <a
                                href="https://selar.co"
                                className="btn btn-primary btn-lg"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    flex: "1 1 auto",
                                    minWidth: "200px",
                                }}
                            >
                                Buy on Selar — ₦10,000
                            </a>
                            <a
                                href="https://gumroad.com"
                                className="btn btn-outline-light btn-lg"
                                style={{ borderWidth: "2px", flex: "1 1 auto", minWidth: "200px" }}
                            >
                                View on Gumroad
                            </a>
                        </div>

                        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                            <div className="animate-pulse-subtle">
                                <div
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        color: "#0dcaf0",
                                    }}
                                >
                                    10+
                                </div>
                                <div
                                    style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}
                                >
                                    Chapters
                                </div>
                            </div>
                            <div
                                className="animate-pulse-subtle"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <div
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        color: "#0dcaf0",
                                    }}
                                >
                                    20+
                                </div>
                                <div
                                    style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}
                                >
                                    Success Stories
                                </div>
                            </div>
                            <div
                                className="animate-pulse-subtle"
                                style={{ animationDelay: "0.4s" }}
                            >
                                <div
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        color: "#0dcaf0",
                                    }}
                                >
                                    100%
                                </div>
                                <div
                                    style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}
                                >
                                    Practical Guide
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
