import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

interface TextCardProps {
  title: string;
  description: string;
  delay?: number;
}

const TextCard: React.FC<TextCardProps> = ({ title, description, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Card
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Additional content if needed */}
      </CardContent>
    </Card>
  );
};

export default TextCard;
