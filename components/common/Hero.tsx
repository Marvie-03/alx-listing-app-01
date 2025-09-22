import React from 'react';
import Image from 'next/image';
import { HERO_IMAGES } from '@/constants/images';

interface HeroSectionProps {
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  backgroundImage = HERO_IMAGES.mountainLake 
}) => {
  return (
    <section className="relative h-96 md:h-[500px] lg:h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/Hero.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        priority
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Find your favorite
            <br />
            place here!
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white font-medium opacity-90 max-w-2xl mx-auto">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </div>
      
      {/* Optional: Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full opacity-75">
          <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;