import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <News />
      </main>
      <Footer />
    </>
  );
}

export default App;
