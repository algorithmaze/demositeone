import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

const images = [
  'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Gallery</h2>
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-opacity duration-1000 ease-out",
            inView ? "opacity-100" : "opacity-0"
          )}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={cn(
                "overflow-hidden rounded-lg shadow-md transition-transform duration-500 ease-out",
                inView ? "scale-100" : "scale-95"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
