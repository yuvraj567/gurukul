export type Language = 'en' | 'hi';

export interface ContentData {
  header: {
    schoolName: string;
    callNow: string;
    langToggle: string;
    phone: string;
  };
  hero: {
    heading: string;
    subheading: string;
    callLabel: string;
    whatsappLabel: string;
    phone: string;
    whatsappNumber: string;
  };
  trustBanner: {
    items: Array<{ text: string }>;
  };
  courses: {
    heading: string;
    admissionCTA: string;
    cards: Array<{ title: string; description: string; features: string[]; image: string }>;
  };
  teachers: {
    heading: string;
    description: string;
  };
  results: {
    heading: string;
  };
  gallery: {
    heading: string;
    images: string[];
  };
  testimonials: {
    heading: string;
    items: Array<{ quote: string; author: string; role: string; rating: number; detail: string }>;
  };
  contactForm: {
    heading: string;
    description: string;
    name: string;
    mobile: string;
    classLabel: string;
    submit: string;
    placeholderName: string;
    placeholderMobile: string;
    selectPlaceholder: string;
  };
  footer: {
    contactTitle: string;
    locationTitle: string;
    address: string;
    phone: string;
    email: string;
    copyright: string;
  };
}

export const content: Record<Language, ContentData> = {
  en: {
    header: {
      schoolName: 'Gurukul Public School & Coaching Centre',
      callNow: 'Call Now',
      langToggle: 'EN / HI',
      phone: '+91 9631864871',
    },
    hero: {
      heading: 'Gurukul Public School & Coaching Centre',
      subheading: 'Nandanpur - Bhagwatpur Rd, Gawandri, Gaundri, Bihar 841424',
      callLabel: 'Call Now',
      whatsappLabel: 'Message on WhatsApp',
      phone: '+919631864871',
      whatsappNumber: '+919631864871',
    },
    trustBanner: {
      items: [
        { text: '10+ Years Experience' },
        { text: '500+ Students' },
        { text: '90%+ Board Results' },
      ],
    },
    courses: {
      heading: 'Our Courses',
      admissionCTA: 'Admission Lein',
      cards: [
        {
          title: 'School',
          description: 'Nursery to 10th - English Medium with strong foundation in Science, Math, English, and Social Science',
          features: ['Comprehensive Curriculum', 'Personalized Learning Plans', 'Smart Classroom Technology'],
          image: '/gurukul/classroom.png',
        },
        {
          title: 'Coaching',
          description: 'Class 6-12 - Hindi State Board with competitive exam edge (JEE/NEET/Board)',
          features: ['Intensive Concept Revision', 'Regular Mock Tests', 'Doubt Solving Workshops'],
          image: '/gurukul/student_coaching.jpg',
        },
      ],
    },
    teachers: { heading: 'Our Expert Teachers', description: 'Our teachers deliver smart, structured lessons in English, Science, Math, and Social Science for a balanced academic profile.' },
    results: { heading: 'Our Top Results' },
    gallery: { 
      heading: 'Our Campus Gallery',
      images: [
        '/gurukul/front.jpg',
        '/gurukul/front_look.jpg',
        '/gurukul/classroom.png',
        '/gurukul/student_school.jpg',
        '/gurukul/student_coaching.jpg',
        '/gurukul/jagrukta.jpg',
      ]
    },
    testimonials: {
      heading: 'What Parents & Students Say',
      items: [
        {
          quote: '“Mera beta yahan padhta hai aur bahut khush hai. Teachers bahut acche hain, bacchon ka emotional aur academic progress dono monitor hota hai.”',
          author: 'Rajesh Kumar',
          role: 'Parent',
          rating: 4.8,
          detail: 'My child has improved from average to top of class in 6 months. Excellent learning environment and sincere teachers.',
        },
        {
          quote: '“Coaching ka environment bahut acha hai. Maine 91 marks liye aur concept clear honay lage.”',
          author: 'Anjali Gupta',
          role: 'Student',
          rating: 4.9,
          detail: 'The coaching program is well-structured with regular tests and individual feedback. Highly recommended.',
        },
      ],
    },
    contactForm: {
      heading: 'Get In Touch',
      description: 'Fill out the form and we will get back to you on WhatsApp or phone shortly.',
      name: 'Full Name',
      mobile: 'Mobile Number',
      classLabel: 'Class Interested In',
      submit: 'Send via WhatsApp',
      placeholderName: 'Enter your full name',
      placeholderMobile: 'Enter your mobile number',
      selectPlaceholder: 'Select Class',
    },
    footer: {
      contactTitle: 'Contact Information',
      locationTitle: 'Location',
      address: 'Gurukul Public School & Coaching Centre, Nandanpur - Bhagwatpur Rd, Gawandri, Gaundri, Bihar 841424',
      phone: '+91 9631864871',
      email: 'info@gurukulpublicschool.com',
      copyright: '© 2026 Gurukul Public School & Coaching Centre. All rights reserved.',
    },
  },
  hi: {
    header: {
      schoolName: 'गुरुकुल पब्लिक स्कूल और कोचिंग सेंटर',
      callNow: 'कॉल करें',
      langToggle: 'EN / HI',
      phone: '+91 9631864871',
    },
    hero: {
      heading: 'गुरुकुल पब्लिक स्कूल और कोचिंग सेंटर',
      subheading: 'नंदनपुर - भागवतपुर रोड, गावंदरी, गउंदरी, बिहार 841424',
      callLabel: 'कॉल करें',
      whatsappLabel: 'व्हाट्सऐप करें',
      phone: '+919631864871',
      whatsappNumber: '+919631864871',
    },
    trustBanner: {
      items: [
        { text: '10+ वर्षों का अनुभव' },
        { text: '500+ छात्र' },
        { text: '90%+ बोर्ड परिणाम' },
      ],
    },
    courses: {
      heading: 'हमारे पाठ्यक्रम',
      admissionCTA: 'एडमिशन लें',
      cards: [
        {
          title: 'स्कूल',
          description: 'नर्सरी से 10वीं तक - इंग्लिश मीडियम में पढ़ाई, विज्ञान, गणित, अंग्रेजी और सामाजिक विज्ञान में मजबूत नींव के साथ।',
          features: ['व्यापक पाठ्यक्रम', 'व्यक्तिगत सीखने की योजना', 'स्मार्ट क्लासरूम टेक्नोलॉजी'],
          image: '/gurukul/classroom.png',
        },
        {
          title: 'कोचिंग',
          description: 'कक्षा 6-12 - हिंदी राज्य बोर्ड; JEE/NEET और बोर्ड तैयारी पर केंद्रित।',
          features: ['गहन अवधारणा पुनरावृत्ति', 'नियमित मॉक टेस्ट', 'संदेह समाधान कार्यशालाएं'],
          image: '/gurukul/student_coaching.jpg',
        },
      ],
    },
    teachers: { heading: 'हमारे विशेषज्ञ शिक्षक', description: 'हमारे शिक्षक अंग्रेज़ी, विज्ञान, गणित और सामाजिक विज्ञान सहित सभी प्रमुख विषयों में प्रवीण हैं और व्यक्तिगत ध्यान देते हैं।' },
    results: { heading: 'हमारे शीर्ष परिणाम' },
    gallery: { 
      heading: 'हमारे परिसर की गैलरी',
      images: [
        '/gurukul/front.jpg',
        '/gurukul/front_look.jpg',
        '/gurukul/classroom.png',
        '/gurukul/student_school.jpg',
        '/gurukul/student_coaching.jpg',
        '/gurukul/jagrukta.jpg',
      ]
    },
    testimonials: {
      heading: 'माता-पिता और छात्रों की राय',
      items: [
        {
          quote: '“मेरा बेटा यहाँ पढ़ता है और बहुत खुश है। शिक्षक बहुत अच्छे हैं, उसे हर विषय में मदद मिलती है।”',
          author: 'राजेश कुमार',
          role: 'Parent',
          rating: 4.8,
          detail: 'छात्र की पढ़ाई 6 महीने में काफी बेहतर हुई है। शिक्षण वातावरण और व्यक्तिगत फीडबैक उत्कृष्ट हैं।',
        },
        {
          quote: '“कोचिंग का माहौल बहुत अच्छा है। मैंने 91 अंक प्राप्त किए और अवधारणाएँ बहुत स्पष्ट हुईं।”',
          author: 'अंजलि गुप्ता',
          role: 'Student',
          rating: 4.9,
          detail: 'कोचिंग प्रोग्राम संगठनात्मक रूप से बेहतरीन है, नियमित परीक्षण और फॉलोअप मिलता है।',
        },
      ],
    },
    contactForm: {
      heading: 'हमसे संपर्क करें',
      description: 'फ़ॉर्म भरें और हम आपको व्हाट्सएप या फ़ोन पर शीघ्र ही संपर्क करेंगे।',

      name: 'पूरा नाम',
      mobile: 'मोबाइल नंबर',
      classLabel: 'कक्षा रुचि',
      submit: 'व्हाट्सऐप पर भेजें',
      placeholderName: 'अपना पूरा नाम दर्ज करें',
      placeholderMobile: 'अपना मोबाइल नंबर दर्ज करें',
      selectPlaceholder: 'कक्षा चुनें',
    },
    footer: {
      contactTitle: 'संपर्क जानकारी',
      locationTitle: 'स्थान',
      address: 'गुरुकुल पब्लिक स्कूल और कोचिंग सेंटर, नंदनपुर - भागवतपुर रोड, गावंदरी, गउंदरी, बिहार 841424',
      phone: '+91 9631864871',
      email: 'info@gurukulpublicschool.com',
      copyright: '© 2026 गुरुकुल पब्लिक स्कूल और कोचिंग सेंटर। सर्वाधिकार सुरक्षित।',
    },
  },
};