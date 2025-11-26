'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ParallaxImage = ({ src, alt, className = "" }: ParallaxImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`overflow-hidden relative bg-gray-200 ${className}`}>
      {!loaded && <div className="absolute inset-0 flex items-center justify-center bg-[#e8e0d9] z-20"><Loader2 className="animate-spin text-[#a67b5b] opacity-50" /></div>}
      <img src={src} alt={alt} onLoad={() => setLoaded(true)} className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`} loading="lazy" />
    </div>
  );
};
