import React from 'react';
import Image from 'next/image';

interface GalleryProps {
  heading: string;
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ heading, images }) => {

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={1200}
                height={800}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;