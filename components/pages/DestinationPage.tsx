'use client';

import { ASSETS } from '@/lib/assets';
import { Reveal } from '@/components/animations/Reveal';
import { TextReveal } from '@/components/animations/TextReveal';
import { ParallaxImage } from '@/components/animations/ParallaxImage';
import { Globe } from 'lucide-react';

interface DestinationPageProps {
  setPage: (page: string) => void;
}

export const DestinationPage = ({ setPage }: DestinationPageProps) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pt-24">
    <div className="relative h-[80vh] overflow-hidden flex items-center justify-center">
       <div className="absolute inset-0 bg-black/40 z-10"></div>
       <ParallaxImage src={ASSETS.destination} className="w-full h-full" alt="Destination" />
       <div className="relative z-20 text-center text-white max-w-5xl px-6">
          <Reveal>
             <div className="inline-flex items-center gap-2 border border-white/30 px-4 py-1 rounded-full mb-8 backdrop-blur-md">
                <Globe size={14} className="text-[#a67b5b]" />
                <span className="text-[10px] uppercase tracking-widest">World Ready</span>
             </div>
          </Reveal>
          <div className="overflow-hidden">
             <TextReveal className="text-6xl md:text-9xl font-serif mb-6">Beyond Boundaries</TextReveal>
          </div>
       </div>
    </div>

    <section className="py-32 bg-[#2c2420] text-white">
       <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-16 text-[#a67b5b]">Common Destinations</h2>
          <div className="flex flex-wrap justify-center gap-4">
             {['Udaipur', 'Jaipur', 'Goa', 'Mahabalipuram', 'Kerala', 'Bali', 'Thailand', 'Dubai', 'Singapore', 'Italy', 'France', 'Turkey'].map((place, i) => (
                <Reveal key={place} delay={i * 30}>
                   <div className="px-8 py-4 border border-white/10 hover:bg-[#a67b5b] hover:border-[#a67b5b] hover:scale-105 transition-all duration-300 cursor-default uppercase tracking-widest text-xs interactive">
                      {place}
                   </div>
                </Reveal>
             ))}
          </div>
       </div>
    </section>
  </div>
);
