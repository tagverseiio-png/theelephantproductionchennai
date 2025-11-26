'use client';

import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 10;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[200] bg-[#2c2420] flex items-center justify-center transition-transform duration-500 ${progress === 100 ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="text-center">
         <div className="font-serif text-7xl md:text-9xl text-[#a67b5b] opacity-20 leading-none">{progress}%</div>
         <div className="text-white/40 text-xs uppercase tracking-[0.3em] mt-4">Loading</div>
      </div>
    </div>
  );
};
