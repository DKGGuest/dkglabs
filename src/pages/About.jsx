import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const leadershipData = [
  {
    name: "Deep Krishna",
    role: "Founder",
    image: "https://www.dkgrouplabs.com/wp-content/uploads/2020/06/Deep1.png",
    bio: `Deep Krishna, Founder of DKG Labs is an entrepreneur and IT professional having 19 years of experience in ERP Program delivery, Product development and IT Consulting.`,
  },
  {
    name: "Deepak",
    role: "Technical Advisor",
    image: "https://www.dkgrouplabs.com/wp-content/uploads/2020/06/deepak1.png",
    bio: `Deepak has 20 years of experience in the IT industry with companies like Microsoft, HCL, Wipro and Newgen.`,
  },
  {
    name: "Sushil",
    role: "Product Design Lead",
    image: "https://www.dkgrouplabs.com/wp-content/uploads/2020/06/sushil1.png",
    bio: `Sushil is based out at Seattle, USA and has IT industry experience of over 19 years.`,
  },
  // {
  //   name: "Inderjeet",
  //   role: "VP, Healthcare IoT",
  //   image: "https://www.dkgrouplabs.com/wp-content/uploads/2020/06/Inderjeet1.png",
  //   bio: `Inderjeet has worked in the semiconductor industry for many years.`,
  // },
];


const advisoryData = [
  {
    name: "Prof B.B. Dhar",
    role:
      "Chief Mentor and Mining Visionary – DKG Labs, Ex.Vice President -RBEF, Ph.D, McGill University, Former Director CMRI, CSIR",
    image: "https://www.dkgrouplabs.com/wp-content/uploads/2019/03/profile.jpg",
  },
  {
    name: "Mr. N.N. Gautam",
    role:
      "Adviser, GMR Group, ACB India Ltd, Former Advisor, Ministry of Coal, UNDP/GEF-GOI CBM",
    image: "https://www.dkgrouplabs.com/wp-content/uploads/2020/01/N.N.Gautam.png",
  },
  {
    name: "Mr. Anil Mathur",
    role:
      "Mining Consultant, Vice Chairman, MEAI, Rajasthan Chapter – Jaipur.",
    image: "https://www.dkgrouplabs.com/wp-content/uploads/2020/01/Anil-Mathur.png",
  },
  {
    name: "Mr. M.S. Nagar",
    role:
      "Chairman, Appraisal Committee on Mining, Ministry of Environment & Forest, Government of India",
    image: "", // Use a default image if photo is missing
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
  }),
};

const AboutUs = () => {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen px-6 md:px-16 py-14">
      
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

      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Meet Our Leadership
      </motion.h1>

      {/* Team Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {leadershipData.map((leader, idx) => (
          <motion.div
            key={idx}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={idx}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-6">
              <motion.img
                src={leader.image}
                alt={leader.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-500 shadow-md"
                whileHover={{ rotate: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
              <div>
                <h2 className="text-xl font-semibold text-white">{leader.name}</h2>
                <p className="text-sm text-purple-300">{leader.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">{leader.bio}</p>
          </motion.div>
        ))}
      </div>




      {/* Advisory Heading */}
<motion.h2
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-3xl sm:text-4xl font-bold text-center mt-20 mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600"
>
  Advisory Members
</motion.h2>

{/* Advisory Cards */}
<div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
  {advisoryData.map((member, idx) => (
    <motion.div
      key={idx}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={idx}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-6">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-green-500 shadow-md"
          whileHover={{ rotate: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
        <div>
          <h2 className="text-xl font-semibold text-white">{member.name}</h2>
          <p className="text-sm text-green-300">Advisory Board</p>
        </div>
      </div>
      <p className="mt-4 text-gray-300 text-sm leading-relaxed">{member.role}</p>
    </motion.div>
  ))}
</div>


      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-16 text-center text-gray-500 text-xs"
      >
        © {new Date().getFullYear()} DKG Labs Pvt. Ltd. All rights reserved.
      </motion.div>
    </div>
  );
};

export default AboutUs;
