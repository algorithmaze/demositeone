import { Button } from "@/components/ui/button";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="hero"
      ref={ref}
      className={cn(
        "relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center transition-opacity duration-1000 ease-out",
        inView ? "opacity-100" : "opacity-0"
      )}
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">Welcome to Our School</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">Providing quality education for a brighter future.</p>
        <Button size="lg" className="animate-fade-in-up animation-delay-400">Learn More</Button>
      </div>
    </section>
  );
};

export default Hero;
