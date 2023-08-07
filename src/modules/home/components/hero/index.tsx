import React, { useState, useEffect } from 'react';
import UnderlineLink from '@modules/common/components/underline-link';
import Image from 'next/image';
import Link from 'next/link';

const heroImages = [
  '/heroc10.jpg',
  '/heroc11.jpg',
  '/heroc12.png',
]; // Add the paths to your hero images

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change the interval time (in milliseconds) to adjust the slide duration
 
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: any) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="h-[360px] w-360px relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        
        
        <Link href="/products"></Link>    
        {/* /store */}
        {/* TODO: click logic */}
      </div>
      
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            loading="eager"
            priority={true}
            quality={90}
            alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            draggable="false"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 transition-all ${
              index === currentImageIndex ? 'bg-white' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
