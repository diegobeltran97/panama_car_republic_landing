import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyFirst from "./components/WhyFirst";
import Community from "./components/Community";
import Team from "./components/Team";
import Timeline from "./components/Timeline";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyFirst />
        <Community />
        <Team />
        <Timeline />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
