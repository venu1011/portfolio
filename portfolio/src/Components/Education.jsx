import React, { useEffect, useRef } from 'react';
import { EDUCATION } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.education-item', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: educationRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          markers: false, // Set to true for debugging
        },
      });

      ScrollTrigger.refresh(); // Optional: helps if layout shift occurs
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="education" ref={educationRef}>
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Education
        </h2>
        <div className="flex flex-col space-y-8">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="education-item rounded-xl border border-purple-300/20 p-6 bg-white/5 backdrop-blur-sm shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold lg:text-2xl">
                {edu.degree}
              </h3>
              <h4 className="text-md font-medium text-purple-200 lg:text-xl">
                {edu.institution}
              </h4>
              <p className="text-sm text-gray-400 lg:text-base">{edu.duration}</p>
              <p className="mt-4 text-sm lg:text-base">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
