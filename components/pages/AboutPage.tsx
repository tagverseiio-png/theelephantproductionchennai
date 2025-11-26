'use client';

import { ASSETS } from '@/lib/assets';
import { Reveal } from '@/components/animations/Reveal';
import { TextReveal } from '@/components/animations/TextReveal';
import { ParallaxImage } from '@/components/animations/ParallaxImage';
import { Users, Globe, Star } from 'lucide-react';

export const AboutPage = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pt-24">
     <div className="h-[80vh] relative overflow-hidden">
        <ParallaxImage src={ASSETS.aboutHero} className="w-full h-full" alt="Team" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <TextReveal className="text-7xl md:text-9xl font-serif text-white drop-shadow-2xl italic">Our Story</TextReveal>
        </div>
     </div>
     <section className="py-32 bg-[#fdfcf8]">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-12">
           <Reveal>
             <h2 className="text-4xl font-serif text-[#2c2420]">From Chennai to Singapore</h2>
           </Reveal>
           <Reveal delay={100}>
             <p className="text-gray-600 leading-loose font-light text-xl">
               Founded on the belief that every love story deserves a cinematic masterpiece, <strong>The Elephant Productions</strong> began as a small team of dreamers in Chennai.
             </p>
           </Reveal>
           <Reveal delay={200}>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 border-t border-[#e8e0d9] pt-12">
               <div className="text-center">
                 <Users className="w-12 h-12 text-[#a67b5b] mx-auto mb-6" />
                 <h3 className="font-serif text-2xl mb-3">The Team</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">A collective of artists, filmmakers, and editors obsessed with light.</p>
               </div>
               <div className="text-center">
                 <Globe className="w-12 h-12 text-[#a67b5b] mx-auto mb-6" />
                 <h3 className="font-serif text-2xl mb-3">Global Reach</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">Covering weddings across India and Southeast Asia.</p>
               </div>
               <div className="text-center">
                 <Star className="w-12 h-12 text-[#a67b5b] mx-auto mb-6" />
                 <h3 className="font-serif text-2xl mb-3">Premium Quality</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">Using industry-leading cinema cameras and optics.</p>
               </div>
             </div>
           </Reveal>
        </div>
     </section>
  </div>
);
