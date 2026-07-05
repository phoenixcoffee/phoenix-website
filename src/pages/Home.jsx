import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Features from "../components/Features";
import OrderSection from "../components/OrderSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import "../styles/home.css";

function Home() {
  return (
    <main className="page-shell">
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <OrderSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default Home;
