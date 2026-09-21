import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import ExperienceSkills from '../components/ExperienceSkills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      {/* Navigation */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        <HeroBanner />
        <About />
        <ExperienceSkills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
