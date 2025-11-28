export default function TOC() {
    const chapters = [
        "Preface",
        "Chapter 1: The Dream and the Reality",
        "Chapter 2: What is MPOWER Financing?",
        "Chapter 3: Schools Eligible for Funding",
        "Chapter 4: Courses Leading to PR",
        "Chapter 5: How to Apply for MPOWER Funding",
        "Chapter 6: Success Stories",
        "Chapter 7: How to Build a Study-Abroad Plan",
        "Chapter 8: Bonus Tools & Resources",
        "Chapter 9: Understanding Credit, Loans & Repayments Abroad",
        "Chapter 10: Life Abroad, Adapting, Thriving & Giving Back",
    ];

    return (
        <section className="py-20 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold mb-10">Table of Contents</h2>
            <ul className="max-w-3xl mx-auto space-y-3 list-decimal list-inside text-gray-800">
                {chapters.map((chapter, idx) => (
                    <li key={idx} className="hover:text-purple-700 transition">{chapter}</li>
                ))}
            </ul>
        </section>
    );
}
