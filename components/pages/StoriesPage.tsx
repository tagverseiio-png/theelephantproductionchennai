'use client';

import { useState } from 'react';
import { ASSETS } from '@/lib/assets';
import { TextReveal } from '@/components/animations/TextReveal';
import { VideoCard } from '@/components/cards/VideoCard';

export const StoriesPage = () => {
  const [filter, setFilter] = useState('all');

  return (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pt-24">
    <div className="container mx-auto px-6 py-24 text-center">
       <TextReveal className="text-7xl md:text-9xl font-serif text-[#2c2420] mb-8">The Journal</TextReveal>
       <div className="flex justify-center gap-12 text-xs tracking-[0.2em] uppercase font-medium mb-20">
          {['all', 'films', 'photos'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`pb-2 transition-all duration-200 ${filter === f ? 'text-[#a67b5b] border-b border-[#a67b5b]' : 'text-gray-400 hover:text-[#2c2420]'} interactive`}>{f}</button>
          ))}
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['films', 'all'].includes(filter) && (
            <div className="lg:col-span-2 h-[600px]"><VideoCard imageSrc={ASSETS.portfolio2} videoSrc={ASSETS.portfolioVideo1} title="Kavya & Rohan" subtitle="Wedding Film • Chennai" className="w-full h-full" /></div>
          )}
          {['photos', 'all'].includes(filter) && (
            <div className="group relative h-[600px] overflow-hidden interactive">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col justify-end p-8">
                <p className="text-white font-serif text-4xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Deepa & Karthik</p>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-2">Photography • Chennai</p>
              </div>
              <img src={ASSETS.portfolio1} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="Wed" loading="lazy" />
            </div>
          )}
          {['photos', 'all'].includes(filter) && (
             <div className="group relative h-[600px] overflow-hidden interactive">
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col justify-end p-8">
                  <p className="text-white font-serif text-4xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Haldi</p>
                  <p className="text-white/60 text-xs uppercase tracking-widest mt-2">Details • Bangalore</p>
               </div>
                <img src={ASSETS.portfolio3} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" alt="Detail" loading="lazy" />
             </div>
          )}
           {['films', 'all'].includes(filter) && (
            <div className="lg:col-span-2 h-[600px]"><VideoCard imageSrc={ASSETS.portfolio4} videoSrc={ASSETS.portfolioVideo2} title="Meera & Sunder" subtitle="Cinematic Teaser • Mahabalipuram" className="w-full h-full" /></div>
          )}
       </div>
    </div>
  </div>
  );
};
