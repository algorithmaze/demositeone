import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

const MapSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="map" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Find Us</h2>
        <div
          ref={ref}
          className={cn(
            "w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md flex items-center justify-center text-gray-600 transition-opacity duration-1000 ease-out",
            inView ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Placeholder for Map */}
          <p>Map Placeholder (Requires API Key for a real map)</p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
