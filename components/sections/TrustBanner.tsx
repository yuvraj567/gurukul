import React, { useState, useEffect } from 'react';
import { Award, Users, GraduationCap } from 'lucide-react';

interface TrustBannerProps {
  items: Array<{ text: string }>;
}

const Counter: React.FC<{ target: number; suffix: string; duration?: number }> = ({
  target,
  suffix,
  duration = 2000
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

const TrustBanner: React.FC<TrustBannerProps> = ({ items }) => {
  return (
    <section className="py-6 bg-rose-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {items.map((stat, index) => {
            const IconComponent = index === 0 ? Award : index === 1 ? Users : GraduationCap;

            // Extract number and suffix from text
            const match = stat.text.match(/^(\d+)(.*)$/);
            const target = match ? parseInt(match[1]) : 0;
            const suffix = match ? match[2] : stat.text;

            return (
              <div key={index} className="flex flex-col items-center gap-2 p-4">
                <IconComponent className="w-8 h-8 text-white" />
                <p className="text-lg font-extrabold tracking-tight">
                  <Counter target={target} suffix={suffix} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;