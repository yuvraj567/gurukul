'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  heading: string;
  nameLabel: string;
  mobileLabel: string;
  classLabel: string;
  submitLabel: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ heading, nameLabel, mobileLabel, classLabel, submitLabel }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Namaste, mera naam ${name} hai, class ${className} ke admission ke liye contact kar raha hoon. Mobile: ${mobile}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-10">{heading}</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">{nameLabel}</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-900/50"
              placeholder="Enter your full name"
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
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-900/50"
              placeholder={mobileLabel}
            />
          </div>
          <div>
            <label htmlFor="class" className="block text-lg font-semibold text-gray-700 mb-2">{classLabel}</label>
            <select
              id="class"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-900/50"
            >
              <option value="">Select Class</option>
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
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;