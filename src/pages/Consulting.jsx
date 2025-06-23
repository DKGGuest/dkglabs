import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { background, DKGLogo } from "../assets";

const services = [
  {
    title: 'Digital IoT Consulting',
    text: 'End-to-end digital transformation for SMEs and enterprises using cloud, AI, and agile methodology.',
  },
  {
    title: 'IoT Strategy & Deployment',
    text: 'Helping businesses design, deploy and scale IoT ecosystems with robust data flows and device orchestration.',
  },
  {
    title: 'AI/ML Consulting',
    text: 'From proof-of-concept to deployment—custom AI models that drive predictive insights and automation.',
  },
  {
    title: 'Hardware Integration Consulting',
    text: 'Expertise in integrating sensors, boards, and communication protocols with real-time monitoring capabilities.',
  },
];


const smartCityCards = [
  {
    title: "Waste to Energy",
    content:
      "WTE solutions help cities convert municipal waste into usable energy. India is projected to produce over 500 million tons of waste by 2050. Circular economy principles and PPP models are redefining waste management.",
    image: "/imagesdkg/waste.jpg", // replace with your own URL
  },
  {
    title: "Garbage Monitoring",
    content:
      "Using IoT, GPS, LoRaWAN & RFID sensors to automate waste collection, track fill levels in bins, and route collection trucks efficiently through cloud-based dashboards.",
    image: "/imagesdkg/342.png", // replace with your own URL
  },
  {
    title: "Early Warning for Landslides",
    content:
      "IoT and AI models monitor precipitation, slopes, and terrain data to predict landslides. These wireless systems function across rugged terrains with long-range connectivity and real-time alerts.",
    image: "/imagesdkg/landslide.jpeg", // replace with your own URL
  },
];

const heroImages = [
  '/imagesdkg/home_banner_1.jpg',
  '/imagesdkg/ai.jpg',
  '/imagesdkg/home_banner-3.jpg',
];

export default function Consulting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white">


      <header className="fixed top-0 left-0 w-full z-50
              bg-white/40 backdrop-blur-lg
              border-b border-white/20
              shadow-md py-3 px-7
              flex justify-between items-center">
              
              {/* Logo and Title */}
              <div className="flex items-center space-x-1">
                <img
                  // src="https://www.dkgrouplabs.com/wp-content/uploads/2025/05/DKGLogo.png"  // ⬅️ Replace with your logo path
                  src={DKGLogo}  // ⬅️ Replace with your logo path
                  alt="Logo"
                  className="h-16 w-28   "
                />
                {/* <h1 className="text-2xl font-bold text-pink-200">Your Company</h1> */}
              </div>
            
              {/* Navigation */}
              <nav className="space-x-4">
                <Link to="/" className="font-serif hover:text-black transition-colors duration-300 rounded-xl m-2 p-1">
                  Home
                </Link>
                <Link to="/About" className="font-serif hover:text-black transition-colors duration-300  rounded-xl m-2 p-1">
                  About Us
                </Link>
                <Link to="/Product" className="font-serif hover:text-black transition-colors duration-300  rounded-xl m-2 p-1">
                  Product
                </Link>
                <Link to="/Consulting" className="font-serif hover:text-black transition-colors duration-300  rounded-xl m-2 p-1">
                  Consulting
                </Link>
                <Link to="/Home" className="font-serif hover:text-black transition-colors duration-300 rounded-xl m-2 p-1">
                  AI CoE
                </Link>
                <Link to="/Innovation" className="font-serif hover:text-black transition-colors duration-300  rounded-xl m-2 p-1">
                  Innovation
                </Link>
                <Link to="../components/Contact2" className="font-serif hover:text-black transition-colors duration-300  rounded-xl m-2 p-1">
                  Contact Us
                </Link>
              </nav>
            </header> 



      {/* 🔁 Fullscreen Image Slideshow */}
      <div className="relative w-full h-screen">
        <AnimatePresence>
          <motion.div
            key={heroImages[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[index]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* 🔧 Consulting Section BELOW the slideshow */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black px-6 py-14">
        {/* 🔙 Back Button */}
        {/* <div className="fixed top-6 left-6 z-50">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gray-900  border-2 border-pink-500 text-pink-400 px-5 py-2 rounded-xl shadow-lg text-sm font-medium hover:from-gray-700 hover:to-gray-500 transition"
            >
              ← Back to Main
            </motion.button>
          </Link>
        </div> */}

        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"
        >
          Consulting Services
        </motion.h1>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 md:p-8 rounded-3xl shadow-md hover:shadow-yellow-400/40 transition-all border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">{s.title}</h3>
              <p className="text-white/90">{s.text}</p>
            </motion.div>
          ))}
        </div>



       {/* IoT Solutions Section with Images */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24 max-w-5xl mx-auto p-6"
>
  <h2 className="text-4xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
    Enterprise Solutions
  </h2>

  <div className="grid md:grid-cols-2 gap-10">
    {[
      {
        title: 'Vehicle Tracking System',
        text: 'Real-time GPS tracking with analytics, alerts, and route optimization for fleet management.',
        img: 'https://cdn-icons-png.flaticon.com/512/854/854894.png',
      },
      {
        title: 'Iot Solutions',
        text: 'Custom IoT integration for streamlining enterprise operations, data insights, and automation workflows.',
        img: 'https://cdn-icons-png.flaticon.com/512/4213/4213958.png',
      },
      {
        title: 'Mining Solution – (Pit to Port)',
        text: 'End-to-end visibility and automation in mining operations from extraction to port delivery.',
        img: 'https://cdn-icons-png.flaticon.com/512/1159/1159633.png',
      },
      {
        title: 'Electrical Vehicle Solutions',
        text: 'IoT-powered EV infrastructure support, including charging, diagnostics, and battery health monitoring.',
        img: 'https://cdn-icons-png.flaticon.com/512/10483/10483574.png',
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800 p-6 md:p-8 rounded-3xl shadow-md hover:shadow-yellow-400/40 transition-all border border-white/10 text-center"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
          {item.title}
        </h3>
        <p className="text-white/90">{item.text}</p>
      </motion.div>
    ))}
  </div>
</motion.div>



 {/* smartcity Solutions Section with Images */}
 <section className="bg-[#0b0f1c] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10">
          Building Smart Cities With IoT Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {smartCityCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-[#121929] rounded-2xl shadow-lg p-6 border border-[#1e2b40] hover:shadow-yellow-500/20 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-40 w-full object-contain mb-4 "
              />
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


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





// impo