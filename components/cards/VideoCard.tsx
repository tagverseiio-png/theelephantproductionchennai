'use client';

import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface VideoCardProps {
  videoSrc: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  className?: string;
}

export const VideoCard = ({ videoSrc, imageSrc, title, subtitle, className = "" }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 200);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={`relative group overflow-hidden cursor-pointer interactive ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imageSrc} className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} alt={title} loading="lazy" />
      <video ref={videoRef} src={videoSrc} muted loop playsInline preload="none" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>

      <div className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
         <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 text-white font-serif text-sm">View</div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 text-white z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
         <h3 className="font-serif text-3xl mb-1">{title}</h3>
         <p className="text-xs uppercase tracking-widest opacity-80 flex items-center gap-2">{subtitle} <ArrowUpRight size={12} /></p>
      </div>
    </div>
  );
};
