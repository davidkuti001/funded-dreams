// import ebookCover from "../assets/ebook-cover.png";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Funded Dreams</h1>
            <p className="text-lg md:text-2xl mb-8">
                Your step-by-step guide to studying abroad with funding.
            </p>
            {/*<img src={ebookCover} alt="Funded Dreams Ebook" className="mx-auto w-64 md:w-96 mb-6" />*/}
            <div className="flex justify-center gap-4">
                <a href="https://selar.co" className="bg-white text-purple-700 font-bold px-6 py-3 rounded hover:bg-gray-100">
                    Buy on Selar
                </a>
                <a href="https://gumroad.com" className="bg-white text-purple-700 font-bold px-6 py-3 rounded hover:bg-gray-100">
                    Buy on Gumroad
                </a>
                <a href="https://payhip.com" className="bg-white text-purple-700 font-bold px-6 py-3 rounded hover:bg-gray-100">
                    Buy on Payhip
                </a>
            </div>
        </section>
    );
}
