import React from 'react';
import { CheckCircle2, GraduationCap } from 'lucide-react';

interface CourseCard {
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface CoursesProps {
  heading: string;
  admissionCTA: string;
  cards: CourseCard[];
}

const Courses: React.FC<CoursesProps> = ({ heading, admissionCTA, cards }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {cards.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="flex items-center text-2xl font-bold mb-4 text-rose-900 gap-2">
                  <GraduationCap className="w-6 h-6 text-rose-900" />
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/919631864871?text=Namaste%2C%20Admission%20ke%20bare%20me%20jaanna%20chahunga"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-block"
          >
            {admissionCTA}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
