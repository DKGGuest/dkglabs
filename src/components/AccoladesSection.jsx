import React from "react";
import { motion } from "framer-motion";

const accolades = [
  { src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/04/awards_2.jpg", alt: "NASSCOM" },
  { src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/04/awards_3.jpg", alt: "AD ASTRA" },
  { src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/04/awards_4.jpg", alt: "HOT 100" },
  { src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/04/awards_5.jpg", alt: "NSIC" },
  { src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/04/awards_1.jpg", alt: "CIO Insider" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AccoladesSection() {
  return (
    <section className="bg-[#0a0a0a] text-white m-7 py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide text-cyan-400 uppercase">Accolades</h2>
        <p className="text-gray-400 mt-2 text-lg">Recognized for excellence in innovation, technology, and impact.</p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {accolades.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#121212] border border-[#00f6ff44] rounded-xl p-3 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-[0_0_20px_#00f6ff77]"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="rounded-md object-contain h-full w-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
