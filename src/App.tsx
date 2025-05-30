import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CounterSection from './components/CounterSection';
import ImageCard from './components/ImageCard';
import TextCard from './components/TextCard';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import MapSection from './components/MapSection';
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

function App() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: programsRef, inView: programsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative">
      <Navbar />
      <Hero />

      <section id="about" ref={aboutRef} className={cn("py-16 bg-white transition-opacity duration-1000 ease-out", aboutInView ? "opacity-100" : "opacity-0")}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h2>
          <TextCard
            title="Our Mission"
            description="To provide a nurturing and challenging environment that fosters academic excellence, personal growth, and responsible citizenship."
          />
          <TextCard
            title="Our Vision"
            description="To be a leading educational institution recognized for its innovative teaching methods and commitment to student success."
            delay={200}
          />
        </div>
      </section>

      <CounterSection />

      <section id="programs" ref={programsRef} className={cn("py-16 bg-white transition-opacity duration-1000 ease-out", programsInView ? "opacity-100" : "opacity-0")}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ImageCard
              imageUrl="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Academic Excellence"
              description="Rigorous curriculum designed to challenge and inspire students."
            />
            <ImageCard
              imageUrl="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Extracurricular Activities"
              description="Wide range of clubs, sports, and arts programs."
              delay={200}
            />
            <ImageCard
              imageUrl="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Student Support"
              description="Dedicated staff providing guidance and support for all students."
              delay={400}
            />
          </div>
        </div>
      </section>

      <Gallery />
      <ContactForm />
      <MapSection />

      <footer className="bg-gray-800 text-white text-center p-6">
        <div className="container mx-auto">
          <p>&copy; 2023 School Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
