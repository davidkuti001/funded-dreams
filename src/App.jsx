import Hero from "./components/Hero";
import TOC from "./components/TOC";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="font-sans">
            <Hero />
            <TOC />
            <Pricing />
            <Footer />
        </div>
    );
}

export default App;
