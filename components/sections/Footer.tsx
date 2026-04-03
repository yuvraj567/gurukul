import React from 'react';

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
          <div>
            <h3 className="text-2xl font-bold mb-4">{contactTitle}</h3>
            <p className="mb-2">{address}</p>
            <p className="mb-2">{phone}</p>
            <p>{email}</p>
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