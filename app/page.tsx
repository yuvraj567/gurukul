"use client";
import { useState } from 'react';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import TrustBanner from '../components/sections/TrustBanner';
import Courses from '../components/sections/Courses';
import Teachers from '../components/sections/Teachers';
import Results from '../components/sections/Results';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/sections/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { content, Language } from '../data/content';

export default function Home() {
  const [lang, setLang] = useState<Language>('hi');
  const strings = content[lang];

  return (
    <div className="min-h-screen">
      <Header schoolName={strings.header.schoolName} callNow={strings.header.callNow} lang={lang} setLang={setLang} phone={strings.header.phone} />
      <Hero
        heading={strings.hero.heading}
        subheading={strings.hero.subheading}
        callLabel={strings.hero.callLabel}
        whatsappLabel={strings.hero.whatsappLabel}
        phone={strings.hero.phone}
        whatsappNumber={strings.hero.whatsappNumber}
      />
      <TrustBanner items={strings.trustBanner.items} />
      <Courses heading={strings.courses.heading} admissionCTA={strings.courses.admissionCTA} cards={strings.courses.cards} />
      <Teachers heading={strings.teachers.heading} description={strings.teachers.description} />
      <Results heading={strings.results.heading} />
      <Gallery heading={strings.gallery.heading} images={strings.gallery.images} />
      <Testimonials heading={strings.testimonials.heading} testimonials={strings.testimonials.items} />
      <ContactForm
        heading={strings.contactForm.heading}
        description={strings.contactForm.description}
        nameLabel={strings.contactForm.name}
        mobileLabel={strings.contactForm.mobile}
        classLabel={strings.contactForm.classLabel}
        submitLabel={strings.contactForm.submit}
        placeholderName={strings.contactForm.placeholderName}
        placeholderMobile={strings.contactForm.placeholderMobile}
        selectPlaceholder={strings.contactForm.selectPlaceholder}
      />
      <Footer
        contactTitle={strings.footer.contactTitle}
        locationTitle={strings.footer.locationTitle}
        address={strings.footer.address}
        phone={strings.footer.phone}
        email={strings.footer.email}
        copyright={strings.footer.copyright}
      />
      <FloatingWhatsApp />
    </div>
  );
}
