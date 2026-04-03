import React from 'react';
import { Phone } from 'lucide-react';

interface HeaderProps {
  schoolName: string;
  callNow: string;
  lang: 'en' | 'hi';
  setLang: (lang: 'en' | 'hi') => void;
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ schoolName, callNow, lang, setLang, phone }) => {
  return (
    <header className="sticky top-0 z-50 bg-rose-900 shadow-lg border-b border-rose-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-extrabold text-white">{schoolName}</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            className="bg-white text-rose-900 px-4 py-2 rounded-lg font-semibold hover:bg-rose-100 transition-colors"
          >
            {lang === 'hi' ? 'English' : 'हिन्दी'}
          </button>
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 bg-rose-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            {callNow}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;