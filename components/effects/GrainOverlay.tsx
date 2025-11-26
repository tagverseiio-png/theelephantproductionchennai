'use client';

import { ASSETS } from '@/lib/assets';

export const GrainOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] mix-blend-overlay">
    <div
      className="w-full h-full"
      style={{ backgroundImage: `url(${ASSETS.noise})`, backgroundSize: '200px 200px' }}
    ></div>
  </div>
);
