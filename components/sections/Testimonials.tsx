import React from 'react';
import { MessageCircle } from 'lucide-react';

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  rating: number;
  detail: string;
}

interface TestimonialsProps {
  heading: string;
  testimonials: TestimonialItem[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ heading, testimonials }) => {

  return (
    <section className="py-20 bg-slate-50" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(148, 163, 184, 0.2) 0px, rgba(148, 163, 184, 0.2) 1px, transparent 1px, transparent 10px)' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-2xl transition-all duration-300">
              <MessageCircle className="w-10 h-10 text-orange-500 absolute top-4 left-4" />
              <blockquote className="text-lg italic mb-4 pt-8 text-gray-700 leading-relaxed">
                {testimonial.quote}
              </blockquote>
              <p className="text-sm text-gray-600 mb-4">{testimonial.detail}</p>
              <div className="mb-3">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700">
                  {'★'.repeat(Math.floor(testimonial.rating))}{'☆'.repeat(5 - Math.floor(testimonial.rating))} {testimonial.rating.toFixed(1)}
                </span>
              </div>
              <div className="flex items-center">
                <img src={`https://placehold.co/100x100/cccccc/000000?text=${testimonial.author}`} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <cite className="font-bold text-violet-800 not-italic">{testimonial.author}</cite>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;