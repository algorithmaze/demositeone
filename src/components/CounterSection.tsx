import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

interface CounterProps {
  end: number;
  label: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 16); // 16ms per frame
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-primary">{count}+</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section id="counters" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Counter end={1500} label="Students Enrolled" />
          <Counter end={50} label="Experienced Faculty" />
          <Counter end={20} label="Years of Excellence" />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
