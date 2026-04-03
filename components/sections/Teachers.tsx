import React from 'react';

interface Teacher {
  name: string;
  experience: string;
  image: string;
}

interface TeachersProps {
  heading: string;
  description: string;
}

const Teachers: React.FC<TeachersProps> = ({ heading, description }) => {
  const teachers: Teacher[] = [
    {
      name: 'Ajay Sir',
      experience: '15 Years Experience',
      image: '/gurukul/ajay.png',
    },
    {
      name: 'Manoj Sir',
      experience: '8 Years Experience',
      image: '/gurukul/manoj.png',
    },
    {
      name: 'Yuvraj Sir',
      experience: '7 Years Experience',
      image: '/gurukul/yuv.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-4">{heading}</h2>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <img src={teacher.image} alt={teacher.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-rose-100" />
              <h3 className="text-2xl font-bold mb-2 text-violet-800">{teacher.name}</h3>
              <p className="text-lg text-gray-600 mb-2">English • Science • Math • Social Science</p>
              <p className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full inline-block">{teacher.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;