import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="text-primary-200 overflow-hidden">
      <div className="bg-primary-100">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </main>
  );
}

export default App;
