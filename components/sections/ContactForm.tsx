'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  heading: string;
  description: string;
  nameLabel: string;
  mobileLabel: string;
  classLabel: string;
  submitLabel: string;
  placeholderName: string;
  placeholderMobile: string;
  selectPlaceholder: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ heading, description, nameLabel, mobileLabel, classLabel, submitLabel, placeholderName, placeholderMobile, selectPlaceholder }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Namaste, mera naam ${name} hai, class ${className} ke admission ke liye contact kar raha hoon. Mobile: ${mobile}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919631864871?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-10 shadow-2xl border border-slate-200">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">{heading}</h2>
              <p className="mt-4 text-gray-600 leading-8">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">{nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-5 py-4 text-gray-800 transition focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-900/10"
                  placeholder={placeholderName}
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-lg font-semibold text-gray-700 mb-2">{mobileLabel}</label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-5 py-4 text-gray-800 transition focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-900/10"
                  placeholder={placeholderMobile}
                />
              </div>

              <div>
                <label htmlFor="class" className="block text-lg font-semibold text-gray-700 mb-2">{classLabel}</label>
                <select
                  id="class"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-5 py-4 text-gray-800 transition focus:border-rose-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-900/10"
                >
                  <option value="">{selectPlaceholder}</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-3xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;