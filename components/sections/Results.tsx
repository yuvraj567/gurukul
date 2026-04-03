import React from 'react';

interface ResultsProps {
  heading: string;
}

const Results: React.FC<ResultsProps> = ({ heading }) => {
  const students = [
    {
      name: 'Nandini Kumari',
      score: '90%',
      image: '/gurukul/nandini.png',
    },
    {
      name: 'Rahul Kumar',
      score: '93.8%',
      image: '/gurukul/suraj_singh_93.8.jpg',
    },
    {
      name: 'Ankita Pandit',
      score: '91.2%',
      image: '/gurukul/ANKITA_PANDIT_91.2.jpg',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {students.map((student, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <img src={student.image} alt={student.name} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-rose-100" />
              <h3 className="text-2xl font-bold mb-2 text-violet-800">{student.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{index % 2 === 0 ? 'Class 10th' : 'Class 12th'}</p>
              <div className="relative mb-4">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-orange-600 h-4 rounded-full transition-all duration-1000"
                    style={{ width: student.score }}
                  ></div>
                </div>
                <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">{student.score}</p>
              </div>
              <p className="text-sm text-gray-500">Board Exam Score</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;