import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Stats from "./components/home/Stats";
import Testimonials from "./components/home/Testimonials";
import FAQ from "./components/home/FAQ";
import Contact from "./components/home/Contact";
import TenderSearch from "./components/home/TenderSearch";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <TenderSearch />
      <Footer />
    </main>
  );
}