import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsAppChat from "../components/WhatsAppChat";
import LeadFormModal from "../components/LeadFormModal";
import Contact from "../components/Contact";
import AccoladesSection from "../components/AccoladesSection";
import ClientSection from "../components/ClientSection";
import { background, DKGLogo } from "../assets";





const abc = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedCase, setSelectedCase] = useState(null);
    const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

    return (
        

        // <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
        <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">

            {/* <header className="fixed top-0 left-0 w-full z-50
  bg-white/20 backdrop-blur-lg
  border-b border-white/20
  shadow-md py-7 px-7
  flex justify-between items-center">
      <h1 className="text-2xl font-bold"></h1>
      <nav className="space-x-4  ">
        <Link to="/abc" className="hover:underline  border-2  rounded-xl m-3 p-2">
          Home
        </Link>
        <Link to="/About" className="hover:underline border-2 rounded-xl m-3 p-2">
          About
        </Link> */}
        {/* <div>
            <Innovation />
        </div> */}
        {/* <Link to="/Innovation" className="hover:underline border-2  rounded-xl m-3 p-2">
          Innovation
        </Link>
        <Link to="/Product" className="hover:underline border-2  rounded-xl m-3 p-2">
          Product
        </Link>
        <Link to="/Consulting" className="hover:underline border-2  rounded-xl m-3 p-2">
          Consulting
        </Link>
        
        <Link to="../components/Contact2" className="hover:underline border-2  rounded-xl m-3 p-2">
          Contact
        </Link>
      </nav>
    </header> */}
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
    <Link to="/abc" className="font-serif hover:text-black transition-colors duration-300 rounded-xl m-2 p-1">
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
    <Link to="/" className="font-serif hover:text-black transition-colors duration-300 rounded-xl m-2 p-1">
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




    
    {/* Fullscreen Hero Video */}
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/your-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md">
          Welcome to Our World
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-white max-w-3xl">
          Empowering industries with cutting-edge artificial intelligence.
        </p>
      </div>
    </div>
           

            {/* Lead Form Modal */}
            <LeadFormModal
                isOpen={isLeadFormOpen}
                onClose={() => setIsLeadFormOpen(false)}
            />
            {/* Industry we serve */}
            <section className="max-w-7xl mx-auto py-4 px-4 m-7">
                <h2 className="text-4xl font-bold text-center text-blue-400">Industry we serve</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {industry.map((industry, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex">
                            <Card className="bg-gray-900 p-6 text-center shadow-xl border border-red-500 rounded-lg hover:shadow-red-500 flex-1">
                                <CardContent>
                                    <img src={industry.icon}  className="mx-auto h-12 mb-4" />
                                    <h3 className="text-2xl font-semibold mb-3 text-white">{industry.title}</h3>
                                    <p className="text-gray-300 mb-4">{industry.description}</p>
                                    
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))} 
                </div>
            </section>


           <section className="px-6 py-16 bg-[#0b0c1a] text-white font-sans">
      {/* Section Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="https://www.dkgrouplabs.com/wp-content/uploads/2018/10/Myheart_image_2.png"
            alt="IoT Illustration"
            className="rounded-xl shadow-[0_0_30px_#00f6ff55] w-full max-w-xl "
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#00f6ff]">Business Transformation</span> with <br />
            <span className="text-white">value-driven IoT solutions</span>
          </h2>
          <p className="text-gray-300 mb-4">
            Galaxy of linked devices, services and people is the key to Industry 4.0
          </p>
          <p className="text-gray-400 mb-6">
            We help enterprises unlock the value of IoT through expert solutions spanning
            sensors, connectivity, analytics, security, and lifecycle management.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-[#00f6ff] text-[#00f6ff] px-6 py-2 rounded-md hover:bg-[#00f6ff] hover:text-black transition-all duration-300"
          >
            ▶ LEARN MORE
          </motion.button>
        </motion.div>
      </div>



      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
        {[
          { value: "10+", label: "Years in Business", icon: "🧪" },
          { value: "45+", label: "Ideas Incubated", icon: "💡" },
          { value: "65+", label: "Ecosystem Partners", icon: "🌐" },
          { value: "70+", label: "Support Centres", icon: "🛠️" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-[#111427] border border-[#00f6ff44] rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_#00f6ff77] transition duration-300"
          >
            <div className="text-3xl font-bold text-[#00f6ff]">{stat.icon} {stat.value}</div>
            <div className="text-gray-300 mt-2 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>

            {/* Our AI Expertise Section */}
            <section className="max-w-7xl mx-auto py-4 px-4 m-7">
                <h2 className="text-4xl font-bold text-center text-blue-400">Our AI Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {services.map((service, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex">
                            <Card className="bg-gray-800 p-6 text-center shadow-xl border border-blue-500 rounded-lg hover:shadow-blue-500 flex-1">
                                <CardContent>
                                    <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                                    <p className="text-gray-400 mb-4">{service.description}</p>
                                    
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            
<div>
  <AccoladesSection />
</div>


            {/* AI Success Stories Section */}
<section className="max-w-7xl mx-auto py-4 px-4 m-7">
    <h2 className="text-4xl font-bold text-center text-green-400">AI Success Stories</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {caseStudies.map((caseStudy, index) => (
            <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                className="flex"
            >
                <Card 
                    className="bg-gray-800 p-6 shadow-xl border border-green-500 flex-1 cursor-pointer hover:shadow-green-500"
                    onClick={() => { setSelectedCase(caseStudy); setShowModal(true); }}
                >
                    <CardContent>
                        <h3 className="text-2xl font-semibold mb-3 text-white">{caseStudy.title}</h3>
                        <p className="text-gray-400 mb-4">{caseStudy.description}</p>
                        
                        {/* Explore More Button */}
                        {/* <a href={caseStudy.pdf} download onClick={(e) => e.stopPropagation()}>
                            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
                                Explore More
                            </button>
                        </a> */}
                    </CardContent>
                </Card>
            </motion.div>
        ))}
    </div>
</section>

            

            {/* Modal for AI Success Stories */}
            {showModal && selectedCase && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center m-7">
                    <div className="bg-gray-800 p-6 rounded-lg w-1/2 text-white">
                        <h3 className="text-2xl font-bold">{selectedCase.title}</h3>
                        <p className="mt-4">{selectedCase.details}</p>
                        <button className="mt-6 bg-red-500 px-4 py-2 rounded" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}

            {/* WhatsApp Chat Button */}
            <div className="fixed bottom-6 right-6">
                <WhatsAppChat />
            </div>

            {/* Back to Home Button */}
            {/* <div className="fixed top-6 left-6">
                <Link to="/">
                    <button className="bg-gray-800 text-white px-3 py-1 rounded-md shadow-md text-sm hover:bg-gray-700">
                        Back to Main
                    </button>
                </Link>  bg-gradient-to-r from-gray-900 to-gray-600
            </div> */}
            {/* <div className="fixed top-6 left-6 z-50">
  <Link to="/">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-2 bg-gray-900  border-2 border-pink-500 text-pink-400 px-5 py-2 rounded-xl shadow-lg text-sm font-medium hover:from-gray-700 hover:to-gray-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back to Main
    </motion.button>
  </Link>
</div> */}

<div>
  <ClientSection />
</div>
             <div>
             <Contact />
        </div>

            <Footer />
        </div>
    );
};


// industry card
const industry = [
  {
    title: 'MINING',
    description: 'Remote Mining Site Monitoring Solution helps keep track of the assets and their security in the mining sites. Data from tags and',
    icon: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/mining_1.png',
  },
  {
    title: 'Oil & Gas',
    description: 'Deep industry expertise and innovative IoT solutions & offerings can help the Oil & Gas industry clients optimize production,',
    icon: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/oil_gas.png',
  },
  {
    title: 'Logistics',
    description: 'Leverage the power of IoT offerings, which can provide highly integrated “Transportation and Warehouse Management Solutions”',
    icon: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/logistics.png',
  },
  {
    title: 'Healthcare',
    description: 'IoT solutions help healthcare companies continuously collect and analyze health data throughout the healthcare value chain,',
    icon: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/automotive.png',
  },
  {
    title: 'Industrial Manufacturing',
    description: 'Helps industrial manufacturers capitalize on the emerging business opportunities with digital disruptions, and better understand market trends',
    icon: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/industrial_manufacturing.png',
  },
  {
    title: 'Engineering & Construction',
    description: 'Helps E&C companies simplify, modernize and accelerate projects, thus supporting them by optimizing operations & maintenance,',
    icon: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/automotive.png',
  },
  {
    title: 'Automotive',
    description: 'Company has a comprehensive understanding of the Automotive & Aerospace value chains, and helps companies in imagining',
    icon: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/engineering_construction.png',
  },
  {
    title: 'Consumer Packaged Goods and Retail',
    description: 'IoT solutions enable merchants to collect, share and analyze real-time IoT',
    icon: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/logistics.png',
  },
  {
    title: 'Hi-Tech & Consumer Electronics',
    description: 'Helps Hi-Tech companies innovate faster and operate in real-time, by leveraging IoT for a wide variety of business outcomes,',
    icon: 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/engineering_construction.png',
  },
];


// AI Services and Case Studies Data
const services = [
    {
        title: "Generative AI & Foundation Models",
        description: "Fine-tuned LLMs (GPT-4, LLaMA, Claude), Diffusion Models, and AI-driven personalization.",
        
    },
    {
        title: "Autonomous AI & Decision Intelligence",
        description: "AI-driven process automation, Reinforcement Learning, and AI-enhanced predictive analytics.",
       
    },
    {
        title: "Computer Vision & Multi-Modal AI",
        description: "AI for real-time object detection, OCR, 3D reconstruction, and video analytics.",
       
    }
];

const caseStudies = [
    {
        title: "AI-Powered Fraud Detection",
        description: "How our AI helped a bank reduce fraud losses by 40%.",
        details: "Implemented real-time fraud analytics using machine learning models trained on historical transaction data.",
        pdf: "/pdfs/AI Projects and Case Studies.pdf"
       
    },
    {
        title: "Smart Manufacturing AI",
        description: "AI-driven defect detection improved production efficiency by 30%.",
        details: "Utilized deep learning for real-time visual inspections, reducing manual errors.",
        pdf: "/pdfs/AI Projects and Case Studies.pdf"
    }
];

//

export default abc;
