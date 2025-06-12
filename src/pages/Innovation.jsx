import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  {
    title: 'Empowering Innovation',
    desc: 'Explore the next frontier in AI, Vision, and IoT.',
    image: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/04/home_banner_image_5.jpg',
  },
  {
    title: 'Transforming Industries',
    desc: 'Cutting-edge solutions for real-world problems.',
    image: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/02/1657b3cea5bb265.jpg',
  },
  {
    title: 'Seamless Integration',
    desc: 'Connecting hardware and software like never before.',
    image: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/02/Connectedcars_EV_1.png',
  },
];

const innovations = [
  {
    title: 'Generative AI',
    desc: 'Pushing the boundaries of content creation and automation with custom LLMs and multimodal AI.',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Computer Vision',
    desc: 'Creating vision-based systems for industry-grade defect detection, security, and surveillance.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'IoT & System Integration',
    desc: 'Bridging physical and digital with seamless, scalable integration of smart systems.',
    color: 'from-green-500 to-emerald-600',
  },
];

export default function Innovation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">

      {/* 🔁 Hero Image Slideshow */}
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={heroImages[index].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[index].image})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
          <motion.h2
            key={heroImages[index].title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            {heroImages[index].title}
          </motion.h2>
          <motion.p
            key={heroImages[index].desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl max-w-3xl text-white/90"
          >
            {heroImages[index].desc}
          </motion.p>
        </div>
      </div>

      {/* ⬅️ Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gray-900  border-2 border-pink-500 text-pink-400 px-5 py-2 rounded-xl shadow-lg text-sm font-medium hover:from-gray-700 hover:to-gray-500 transition"
          >
            ← Back to Main
          </motion.button>
        </Link>
      </div>

      {/* 🌟 Innovation Title + Cards */}
      <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-6 py-14">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Innovation at DKG Labs
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {innovations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className={`rounded-3xl p-6 md:p-8 bg-gradient-to-br ${item.color} shadow-lg border border-white/10 transition-all`}
            >
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/90">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 text-center text-gray-500 text-xs"
        >
          © {new Date().getFullYear()} DKG Labs Pvt. Ltd. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
}



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const innovations = [
//   {
//     title: 'Generative AI',
//     desc: 'Pushing the boundaries of content creation and automation with custom LLMs and multimodal AI.',
//     color: 'from-purple-500 to-indigo-600',
//   },
//   {
//     title: 'Computer Vision',
//     desc: 'Creating vision-based systems for industry-grade defect detection, security, and surveillance.',
//     color: 'from-blue-500 to-cyan-600',
//   },
//   {
//     title: 'IoT & System Integration',
//     desc: 'Bridging physical and digital with seamless, scalable integration of smart systems.',
//     color: 'from-green-500 to-emerald-600',
//   },
// ];

// export default function Innovation() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-14">

//       {/* 🔙 Back Button */}
//       <div className="fixed top-6 left-6 z-50">
//         <Link to="/abc">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md text-sm hover:bg-gray-700 transition"
//           >
//             ← Back to Main
//           </motion.button>
//         </Link>
//       </div>

//       {/* Page Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
//       >
//         Innovation at DKG Labs
//       </motion.h1>

//       {/* Innovation Cards */}
//       <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {innovations.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.2 }}
//             whileHover={{ scale: 1.03 }}
//             className={`rounded-3xl p-6 md:p-8 bg-gradient-to-br ${item.color} shadow-lg border border-white/10 transition-all`}
//           >
//             <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
//             <p className="text-white/90">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Footer */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ delay: 1.5, duration: 0.8 }}
//         className="mt-20 text-center text-gray-500 text-xs"
//       >
//         © {new Date().getFullYear()} DKG Labs Pvt. Ltd. All rights reserved.
//       </motion.div>
//     </div>
//   );
// }
