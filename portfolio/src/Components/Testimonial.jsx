import React, { useEffect, useRef } from 'react';
import { TESTIMONIAL } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.test-image', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
      })
      gsap.from(".test-quote",{
        opacity:0,
        y:30,
        duration:1,
        ease:"power3.out",
        delay:0.4,
        scrollTrigger:{
            trigger:testimonialRef.current,
            start:"top 80%",
            toggleActions:"play none none none"

        }
      })
      gsap.from(".test-info",{
        opacity:0,
        y:20,
        duration:1,
        ease:"power3.out",
        delay:0.4,
        scrollTrigger:{
            trigger:testimonialRef.current,
            start:"top 80%",
            toggleActions:"play none none none"

        }
      })
    }, testimonialRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonial" className="py-16" ref={testimonialRef}>
      <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
        Testimonial
      </h2>
      <div className="px-4">
        <div className="flex flex-col items-center text-center">
          <img
            src={TESTIMONIAL.image}
            alt={TESTIMONIAL.name || 'Testimonial'}
            className="test-image mb-6 h-24 w-24 rounded-full border-4 border-purple-300/30 object-cover shadow-lg"
          />
          <blockquote className="test-quote max-w-xl text-lg leading-relaxed italic text-gray-300 lg:text-2xl">
            &quot;{TESTIMONIAL.quote}&quot;
          </blockquote>
          <div className="test-info mt-4 text-lg font-medium text-purple-100">
            <p>{TESTIMONIAL.name}</p>
            <p className="text-sm text-purple-400">{TESTIMONIAL.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

