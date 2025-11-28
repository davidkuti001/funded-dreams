export default function Pricing() {
    return (
        <section className="py-20 px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Your Copy</h2>
            <p className="text-gray-700 mb-6">Available instantly on your favorite platform.</p>
            <div className="flex justify-center gap-4 flex-wrap">
                <a href="https://selar.co" className="bg-purple-600 text-white font-bold px-6 py-3 rounded hover:bg-purple-700">
                    Selar - ₦3,500
                </a>
                <a href="https://gumroad.com" className="bg-indigo-600 text-white font-bold px-6 py-3 rounded hover:bg-indigo-700">
                    Gumroad - $10
                </a>
                <a href="https://payhip.com" className="bg-pink-600 text-white font-bold px-6 py-3 rounded hover:bg-pink-700">
                    Payhip - $10
                </a>
            </div>
        </section>
    );
}
