import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Product() {
  // const products = [
  //   'AI Dashboard',
  //   'IoT Gateway',
  //   'Smart Health Monitor',
  //   'Data Analytics Suite',
  //   'Mobile App SDK',
  //   'Device Management Console'
  // ];
  const products = [
  { id: 0, title: 'GPS Factory' , text: 'DKG Labs has partnered with multiple chip manufacturers to provide a comprehensive GPS solution for various industries.' },
  { id: 1, title: 'Sensor Factory' , text: 'DKG Labs has partnered with multiple chip manufacturers to provide a comprehensive GPS solution for various industries.' },,
  { id: 2, title: 'Lora Wan Portfolio', text: 'DKG Labs has partnered with multiple chip manufacturers to provide a comprehensive GPS solution for various industries.' }, 
  { id: 3, title: 'OBD', text: 'DKG Labs has partnered with multiple chip manufacturers to provide a comprehensive GPS solution for various industries.' }, 
  { id: 4, title: 'Car Tracker', text: 'DKG Labs has partnered with multiple chip manufacturers to provide a comprehensive GPS solution for various industries.' }, 
  { id: 5, title: 'Mobile App SDK' , text: 'DKG Labs has partnered with multiple chip manufacturers to provide a comprehensive GPS solution for various industries.' }, 
  { id: 6, title: 'Device Management Console', text: 'DKG Labs has partnered with multiple chip manufacturers to provide a comprehensive GPS solution for various industries.' }, 
];

  const heroImages = [
    {
      title: 'Revolutionizing Technology',
      desc: 'Delivering products that power the future.',
      image: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/02/bg10.png',
    },
    {
      title: 'Scalable & Smart Solutions',
      desc: 'From AI to IoT — engineered for performance.',
      image: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/02/bg4.png',
    },
    {
      title: 'Powerful Developer Tools',
      desc: 'Designed to accelerate your digital journey.',
      image: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/product_page.jpg',
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">
      {/* 🔁 Hero Slideshow Section */}
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
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <motion.h2
            key={heroImages[index].title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-lime-400"
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

      {/* 🔙 Fixed Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/abc">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gray-900  border-2 border-pink-500 text-pink-400 px-5 py-2 rounded-xl shadow-lg text-sm font-medium hover:from-gray-700 hover:to-gray-500 transition"
          >
            ← Back to Main
          </motion.button>
        </Link>
      </div>

      {/* 🏷️ Heading + Product Grid Section */}
      <div className="relative min-h-screen bg-black px-6 py-14">
        {/* 🏷️ Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-300 to-green-500 mb-14"
        >
          Our Products
        </motion.h1>

        {/* 🛍️ Product Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* {products.map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-800 hover:bg-gray-700 rounded-2xl p-6 shadow-xl border border-white/10 transition-colors"
            >
              <h2 className="text-xl font-semibold text-green-300 mb-2">{title}</h2>
              <p className="text-white/80 text-sm">
                High-performance solution built for enterprise-grade scalability and user-friendliness.
              </p>
            </motion.div>
          ))} */}
        {products.map((product, i) => (
  <Link to={`/products/${product.id}`} key={i}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="bg-gray-800 hover:bg-gray-700 rounded-2xl p-6 shadow-xl border border-white/10 transition-colors cursor-pointer"
    >
      <h2 className="text-xl font-semibold text-green-300 mb-2">{product.title}</h2>
      <h2 className="text-l text-white mb-2">{product.text}</h2>
      
    </motion.div>
  </Link>
))}
        </motion.div>


        {/* 🧾 Footer */}
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
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// export default function Product() {
//   const products = [
//     'AI Dashboard',
//     'IoT Gateway',
//     'Smart Health Monitor',
//     'Data Analytics Suite',
//     'Mobile App SDK',
//     'Device Management Console'
//   ];

//   return (
//     <div className="relative min-h-screen bg-black text-white px-6 py-14">
      
//       {/* 🔙 Fixed Back Button */}
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

//       {/* 🏷️ Heading */}
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-300 to-green-500 mb-14"
//       >
//         Our Products
//       </motion.h1>

//       {/* 🛍️ Product Cards */}
//       <motion.div 
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
//       >
//         {products.map((title, i) => (
//           <motion.div 
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="bg-gray-800 hover:bg-gray-700 rounded-2xl p-6 shadow-xl border border-white/10 transition-colors"
//           >
//             <h2 className="text-xl font-semibold text-green-300 mb-2">{title}</h2>
//             <p className="text-white/80 text-sm">
//               High-performance solution built for enterprise-grade scalability and user-friendliness.
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* 🧾 Footer */}
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
