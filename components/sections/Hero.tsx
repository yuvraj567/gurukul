import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface HeroProps {
  heading: string;
  subheading: string;
  callLabel: string;
  whatsappLabel: string;
  phone: string;
  whatsappNumber: string;
}

const Hero: React.FC<HeroProps> = ({ heading, subheading, callLabel, whatsappLabel, phone, whatsappNumber }) => {
  return (
    <section className="relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/gurukul/front_look.jpg')" }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative py-24">
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <div className="max-w-3xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/10 bg-black/30 backdrop-blur-md">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            {heading}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 tracking-wide">{subheading}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 bg-rose-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-rose-800 transition-colors shadow-md hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {callLabel}
            </a>
            <a
              href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=Namaste%2C%20hamein%20school%20ke%20baare%20mein%20batayein`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              {whatsappLabel}
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;