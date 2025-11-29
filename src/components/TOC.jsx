import React, { useState } from "react";

export default function TOC() {
    const chapters = [
        { title: "Preface", description: "Introduction to your journey of funded education.", graphic: "📘" },
        { title: "Chapter 1: The Dream and the Reality", description: "Understanding the global education landscape.", graphic: "🌍" },
        { title: "Chapter 2: What is MPOWER Financing?", description: "Deep dive into funding options.", graphic: "💰" },
        { title: "Chapter 3: Schools Eligible for Funding", description: "List of universities offering funding.", graphic: "🏫" },
        { title: "Chapter 4: Courses Leading to PR", description: "Programs that lead to permanent residency.", graphic: "📜" },
        { title: "Chapter 5: How to Apply for MPOWER Funding", description: "Step-by-step application guide.", graphic: "📝" },
        { title: "Chapter 6: Success Stories", description: "Real testimonials from funded students.", graphic: "🎉" },
        { title: "Chapter 7: How to Build a Study-Abroad Plan", description: "Strategic planning for funding success.", graphic: "🗺️" },
        { title: "Chapter 8: Bonus Tools & Resources", description: "Templates and resources for your journey.", graphic: "🛠️" },
        { title: "Chapter 9: Understanding Credit, Loans & Repayments", description: "Financial management strategies.", graphic: "💳" },
        { title: "Chapter 10: Life Abroad, Adapting, Thriving & Giving Back", description: "Cultural adaptation and career development.", graphic: "🌟" },
    ];

    const [activeChapter, setActiveChapter] = useState(null);

    return (
        <section className="py-5 px-4" style={{ backgroundColor: "#f9f9f9" }}>
            <div className="section-container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3">Table of Contents</h2>
                    <p className="lead" style={{ color: "#6c757d" }}>
                        Explore all chapters covering everything you need to know about funding your international education.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "2rem",
                    }}
                >
                    {chapters.map((chapter, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                padding: "1.5rem",
                                borderRadius: "1rem",
                                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                                cursor: "pointer",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                textAlign: "center",
                                backgroundColor: "white",
                                border: "1px solid #e0e0e0",
                            }}
                            onMouseEnter={() => setActiveChapter(index)}
                            onMouseLeave={() => setActiveChapter(null)}
                            onClick={() => setActiveChapter(index)}
                        >
                            <div
                                style={{
                                    fontSize: "3rem",
                                    marginBottom: "1rem",
                                    transition: "transform 0.3s",
                                    transform: activeChapter === index ? "scale(1.1)" : "scale(1)",
                                }}
                            >
                                {chapter.graphic}
                            </div>
                            <h5 className="fw-bold mb-2" style={{ fontSize: "1.5rem" }}>
                                {chapter.title}
                            </h5>
                            <p
                                style={{
                                    color: "#6c757d",
                                    marginTop: "0.5rem",
                                    opacity: activeChapter === index ? 1 : 0.8,
                                    transition: "opacity 0.3s",
                                }}
                            >
                                {chapter.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
