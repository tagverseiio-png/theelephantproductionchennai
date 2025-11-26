'use client';

import { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'word' | 'char';
}

export const TextReveal = ({ children, className = "", delay = 0, type = "word" }: TextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      }, { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  const text = typeof children === 'string' ? children : '';
  const items = type === "char" ? text.split("") : text.split(" ");

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {items.map((item, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: `${delay + (i * (type === 'char' ? 10 : 30))}ms` }}
        >
          {item === " " ? "\u00A0" : item}{type === "word" && "\u00A0"}
        </span>
      ))}
    </div>
  );
};
