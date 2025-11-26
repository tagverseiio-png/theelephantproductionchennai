'use client';

import { ASSETS } from '@/lib/assets';
import { Reveal } from '@/components/animations/Reveal';
import { TextReveal } from '@/components/animations/TextReveal';

export const ServicesPage = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pt-24">
    <div className="bg-[#2c2420] py-32 text-center text-white">
       <div className="container mx-auto px-6">
          <TextReveal className="text-6xl md:text-8xl font-serif mb-6">Our Services</TextReveal>
          <p className="text-[#a67b5b] tracking-[0.2em] uppercase text-xs">Curated Experiences for the Modern Couple</p>
       </div>
    </div>

    <section className="py-32 bg-[#fdfcf8]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Reveal delay={0}>
            <div className="group h-full bg-white p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 interactive">
              <div className="h-80 mb-10 overflow-hidden relative"><img src={ASSETS.service1} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" alt="Photography" loading="lazy" /></div>
              <div className="flex justify-between items-baseline mb-6"><h3 className="text-4xl font-serif text-[#2c2420]">Photography</h3><span className="text-[#a67b5b] font-serif italic text-xl">01</span></div>
              <p className="text-gray-500 font-light leading-relaxed mb-8">Documentary-style coverage that focuses on raw emotions. We capture the in-between moments.</p>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex gap-3 items-center"><div className="w-1 h-1 bg-[#a67b5b] rounded-full"></div> Candid & Traditional Mix</li>
                <li className="flex gap-3 items-center"><div className="w-1 h-1 bg-[#a67b5b] rounded-full"></div> High-Res Edited Gallery</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="group h-full bg-white p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 interactive">
              <div className="h-80 mb-10 overflow-hidden relative"><img src={ASSETS.service2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" alt="Cinema" loading="lazy" /></div>
              <div className="flex justify-between items-baseline mb-6"><h3 className="text-4xl font-serif text-[#2c2420]">Cinematography</h3><span className="text-[#a67b5b] font-serif italic text-xl">02</span></div>
              <p className="text-gray-500 font-light leading-relaxed mb-8">We don&apos;t make wedding videos; we make films. 4K cinema quality, drone shots, and narrative storytelling.</p>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex gap-3 items-center"><div className="w-1 h-1 bg-[#a67b5b] rounded-full"></div> 3-5 Min Cinematic Teaser</li>
                <li className="flex gap-3 items-center"><div className="w-1 h-1 bg-[#a67b5b] rounded-full"></div> 20-30 Min Wedding Film</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="group h-full bg-[#1a1a1a] p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden text-white hover:-translate-y-2 interactive">
               <div className="absolute top-0 right-0 bg-[#a67b5b] px-6 py-2 text-[10px] font-bold uppercase tracking-widest">Recommended</div>
              <div className="h-80 mb-10 overflow-hidden relative opacity-90"><img src={ASSETS.service3} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" alt="Signature" loading="lazy" /></div>
              <div className="flex justify-between items-baseline mb-6"><h3 className="text-4xl font-serif text-white">Signature</h3><span className="text-[#a67b5b] font-serif italic text-xl">03</span></div>
              <p className="text-white/70 font-light leading-relaxed mb-8">A seamless team providing both photo and video. Perfect for multi-day luxury celebrations.</p>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex gap-3 items-center"><div className="w-1 h-1 bg-[#a67b5b] rounded-full"></div> Full Team Coverage</li>
                <li className="flex gap-3 items-center"><div className="w-1 h-1 bg-[#a67b5b] rounded-full"></div> Complimentary Pre-Wed Shoot</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </div>
);
