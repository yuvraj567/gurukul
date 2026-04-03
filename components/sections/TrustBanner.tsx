import React from 'react';
import { Award, Users, GraduationCap } from 'lucide-react';

interface TrustBannerProps {
  items: Array<{ text: string }>;
}

const TrustBanner: React.FC<TrustBannerProps> = ({ items }) => {
  return (
    <section className="py-6 bg-rose-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {items.map((stat, index) => {
            const IconComponent = index === 0 ? Award : index === 1 ? Users : GraduationCap;
            return (
              <div key={index} className="flex flex-col items-center gap-2 p-4">
                <IconComponent className="w-8 h-8 text-white" />
                <p className="text-lg font-extrabold tracking-tight">{stat.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;