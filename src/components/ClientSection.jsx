import { motion } from "framer-motion";

const clients = [
  { name: "Tata Steel", src: "/imagesdkg/tata.png" },
  { name: "Hero Cycles", src: "/imagesdkg/hero cycle.png" },
  { name: "NSIC", src: "/imagesdkg/NSIC.png" },
  { name: "Aditya Birla", src: "/imagesdkg/aditya birla.jpg" },
  { name: "NMDC", src: "/imagesdkg/NMDC-Logo.jpg" },
  { name: "Jitendra EV", src: "/imagesdkg/jitendra.png" },
  { name: "Henkel", src: "/imagesdkg/henkel.png" },
  { name: "NSIT", src: "/imagesdkg/nsit.png" },
  { name: "SESA", src: "/imagesdkg/sesa.jpg" },
  { name: "Exide", src: "/imagesdkg/excide.png" },
  { name: "Wipro", src: "/imagesdkg/wipro.png" },
  { name: "Tech Mahindra", src: "/imagesdkg/Tech-Mahindra-1.png" },
  { name: "Hcl", src: "/imagesdkg/HCL-1.png" },
  { name: "Gg", src: "/imagesdkg/GE.png" },
  { name: "Vedanta", src: "/imagesdkg/vedanta.png" },
  { name: "Sai", src: "/imagesdkg/sai.png" },
  { name: "Rites", src: "/imagesdkg/rites.png" },
  { name: "Perfect", src: "/imagesdkg/perfect.png" },
  { name: "Ncl", src: "/imagesdkg/ncl.png" },
  { name: "IIT", src: "/imagesdkg/iit.png" },
  { name: "IIA", src: "/imagesdkg/iia.png" },
  { name: "Gir", src: "/imagesdkg/gir.png" },
  { name: "Gazelle", src: "/imagesdkg/gazelle.png" },
  { name: "Firefox", src: "/imagesdkg/firefox.png" },
  { name: "CCRYN", src: "/imagesdkg/ccryn.png" },
];

export default function ClientSection() {
  return (
    <div className="bg-black text-white py-32 px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Our Clients
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 justify-items-center">
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className=" rounded-lg  w-40 h-40 flex items-center justify-center shadow-md hover:shadow-[0_0_20px_#00f6ff77]"
          >
            <img src={client.src} alt={client.name} className="max-h-28 object-contain" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
