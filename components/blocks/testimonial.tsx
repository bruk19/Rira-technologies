"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TestimonialsColumn } from "./testimonials-columns-1"; // adjust path if needed

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const testimonialsData = [
  {
    text: "Rira Technologies transformed our blockchain project with speed and reliability!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Alice Johnson",
    role: "Product Manager",
  },
  {
    text: "Their expertise in Web3 is unmatched. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Oliad Berhanu",
    role: "Founder, Mo-farm",
  },
  {
    text: "We couldn’t have scaled our platform without their brilliant solutions.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Sara Lee",
    role: "Founder, ChainWorks",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black relative md:h-[700px] flex items-center py-10">
      <div className="mx-auto md:h-full h-[600px] flex flex-col">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="md:text-4xl text-3xl font-bold text-white md:mb-0 mb-2">What our users say</h2>
          <p className="opacity-70 text-white md:text-lg text-[15px]">See how our clients describe their experience with us.</p>
        </MotionDiv>

        {/* Auto-scrolling columns */}
        <div className="flex-1 flex justify-center gap-6 overflow-hidden bg-black testimonials-container z-0">
          <TestimonialsColumn testimonials={testimonialsData} duration={15} className="text-gray-300" />
          <TestimonialsColumn testimonials={testimonialsData} duration={20} className="hidden md:block text-gray-300" />
          <TestimonialsColumn testimonials={testimonialsData} duration={25} className="hidden lg:block text-gray-300" />
        </div>
      </div>
    </section>
  );
}
