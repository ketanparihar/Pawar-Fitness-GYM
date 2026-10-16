import React, { useState, useEffect, useRef } from 'react';
import { gymConfig } from '../config/gymConfig';
import { IndianRupee, Target, MapPin, Sparkles } from 'lucide-react';

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  prefix = '',
  suffix = '',
  duration = 1600,
  trigger
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, trigger]);

  const formattedNumber = count.toLocaleString('en-IN');

  return (
    <span>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};

export const QuickStats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = gymConfig.quickStats;

  const icons = [
    <IndianRupee key="1" className="w-6 h-6 text-[#ff3b30]" />,
    <Sparkles key="2" className="w-6 h-6 text-[#ff6b00]" />,
    <Target key="3" className="w-6 h-6 text-yellow-500" />,
    <MapPin key="4" className="w-6 h-6 text-emerald-400" />
  ];

  return (
    <section ref={sectionRef} className="relative py-12 bg-[#0c0d12] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-red-600/10 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                  {stat.subtext}
                </span>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {icons[index % icons.length]}
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline">
                  {stat.isText ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300">
                      {stat.value}
                    </span>
                  ) : (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-300">
                      <AnimatedCounter
                        target={stat.numeric}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        trigger={hasAnimated}
                      />
                    </span>
                  )}
                </div>
                <div className="mt-1 text-sm font-bold text-[#ff3b30] uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="w-12 h-1 bg-gradient-to-r from-[#ff3b30] to-transparent rounded-full mt-4 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
