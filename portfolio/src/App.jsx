import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

const App = () => {
    return (
        <div className="container flex flex-col mx-auto px-8">
            <Navbar />
            <Hero />
        </div>
    );
};

export default App;
