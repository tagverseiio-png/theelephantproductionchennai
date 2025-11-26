'use client';

import { TextReveal } from '@/components/animations/TextReveal';

export const ContactPage = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pt-24 min-h-screen bg-[#2c2420] text-white flex items-center">
     <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
           <TextReveal className="text-6xl md:text-8xl font-serif mb-8">Let&apos;s Create Magic.</TextReveal>
           <p className="text-[#e8e0d9] font-light text-xl leading-relaxed max-w-md mb-12">We take on a limited number of weddings each year to ensure we can give our full heart to every couple.</p>
           <div className="space-y-8 border-l border-white/10 pl-8">
              <div className="group interactive cursor-pointer">
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Call Us</p>
                  <p className="text-2xl font-serif group-hover:text-[#a67b5b] transition-colors duration-200">+91 98765 43210</p>
              </div>
              <div className="group interactive cursor-pointer">
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Email Us</p>
                  <p className="text-2xl font-serif group-hover:text-[#a67b5b] transition-colors duration-200">hello@elephantproductions.in</p>
              </div>
           </div>
        </div>
        <div className="bg-white/5 p-12 backdrop-blur-sm border border-white/10">
           <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-2 group"><label className="text-xs text-[#a67b5b] uppercase tracking-widest group-focus-within:text-white transition-colors duration-200">Name</label><input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-[#a67b5b] outline-none transition-colors duration-200 text-lg font-serif" /></div>
                 <div className="space-y-2 group"><label className="text-xs text-[#a67b5b] uppercase tracking-widest group-focus-within:text-white transition-colors duration-200">Partner</label><input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-[#a67b5b] outline-none transition-colors duration-200 text-lg font-serif" /></div>
              </div>
              <div className="space-y-2 group"><label className="text-xs text-[#a67b5b] uppercase tracking-widest group-focus-within:text-white transition-colors duration-200">Date</label><input type="date" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-[#a67b5b] outline-none transition-colors duration-200 text-white/70 font-serif" /></div>
              <div className="space-y-2 group"><label className="text-xs text-[#a67b5b] uppercase tracking-widest group-focus-within:text-white transition-colors duration-200">Story</label><textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 focus:border-[#a67b5b] outline-none transition-colors duration-200 resize-none font-serif text-lg"></textarea></div>
              <button type="button" className="w-full bg-[#a67b5b] py-5 uppercase tracking-widest text-xs font-bold hover:bg-[#946b4d] transition-colors duration-200 mt-4 interactive">Check Availability</button>
           </form>
        </div>
     </div>
  </div>
);
