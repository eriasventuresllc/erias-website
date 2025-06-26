import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const kpiData = [
  { value: 10, suffix: 'M+', label: 'Interactions Processed' },
  { value: 95, suffix: '%', label: 'Uptime Guarantee' },
  { value: 500, suffix: 'K', label: 'Active Users' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

const KpiCounters = () => {
  const component = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a ScrollTrigger for the whole container
      ScrollTrigger.create({
        trigger: component.current,
        start: 'top 80%', // Start animation when 80% of the component is visible
        once: true, // Animate only once
        onEnter: () => {
          // Animate each counter when the trigger is hit
          kpiData.forEach((kpi, index) => {
            const target = { val: 0 };
            const elem = component.current.querySelector(`.kpi-value-${index}`);
            if (elem) {
              gsap.to(target, {
                val: kpi.value,
                duration: 2,
                ease: 'power2.out',
                onUpdate: () => {
                  // Update the innerText on each tick of the animation
                  elem.innerHTML = `${Math.round(target.val)}${kpi.suffix}`;
                },
              });
            }
          });
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 bg-base text-ink">
      {kpiData.map((kpi, index) => (
        <div key={index} className="text-center">
          <h3 className={`kpi-value-${index} text-5xl font-bold`}>
            0{kpi.suffix}
          </h3>
          <p className="text-muted-foreground mt-2">{kpi.label}</p>
        </div>
      ))}
    </div>
  );
};

export default KpiCounters; 