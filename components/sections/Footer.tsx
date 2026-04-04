import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

interface FooterProps {
  contactTitle: string;
  locationTitle: string;
  address: string;
  phone: string;
  email: string;
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({ contactTitle, locationTitle, address, phone, email, copyright }) => {
  return (
    <footer className="bg-white text-violet-900 py-12 border-t border-violet-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div>
              <h3 className="text-2xl font-bold mb-4">{contactTitle}</h3>
              <p className="text-gray-600">For admission help, fee details, or campus visits, reach out by phone, WhatsApp, or email.</p>
            </div>
            <div className="space-y-3">
              <a href="tel:+919631864871" className="flex items-start gap-3 rounded-2xl border border-violet-100 bg-violet-50 p-4 transition hover:border-violet-300 hover:bg-white">
                <Phone className="h-6 w-6 text-rose-900" />
                <div>
                  <p className="text-sm font-semibold text-gray-700">Phone</p>
                  <p className="text-base font-bold text-violet-900">{phone}</p>
                </div>
              </a>
              <a
                href="https://wa.me/919631864871?text=Namaste%2C%20mujhe%20Gurukul%20Public%20School%20ke%20baare%20mein%20jaankari%20chahiye"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-2xl border border-violet-100 bg-emerald-50 p-4 transition hover:border-emerald-300 hover:bg-white"
              >
                <MessageCircle className="h-6 w-6 text-emerald-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-700">WhatsApp</p>
                  <p className="text-base font-bold text-emerald-700">Chat with us</p>
                </div>
              </a>
              <a href={`mailto:${email}`} className="flex items-start gap-3 rounded-2xl border border-violet-100 bg-sky-50 p-4 transition hover:border-sky-300 hover:bg-white">
                <Mail className="h-6 w-6 text-sky-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-700">Email</p>
                  <p className="text-base font-bold text-sky-700">{email}</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{locationTitle}</h3>
            <div className="rounded-lg overflow-hidden border border-violet-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15018.988765844392!2d84.8744682!3d26.0213717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992cb00c8f10953%3A0xb3365f9d2e4a1287!2sGURUKUL%20PUBLIC%20SCHOOL%20%26%20COACHING!5e0!3m2!1sen!2sin!4v1711621532237"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;