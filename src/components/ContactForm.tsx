import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API endpoint)
    alert('Form submitted! (This is a demo, no data is sent)');
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
        <div
          ref={ref}
          className={cn(
            "max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md transition-opacity duration-1000 ease-out",
            inView ? "opacity-100" : "opacity-0"
          )}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your Email" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your Message" required />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
