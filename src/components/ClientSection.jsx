import { motion } from "framer-motion";

const clients = [
  { name: "Tata Steel", src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/03/tata.png" },
  { name: "Hero Cycles", src: "https://www.dkgrouplabs.com/wp-content/uploads/2020/01/Clients1.png" },
  { name: "NSIC", src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/03/NSIC-jobs-for-Persons-with-Disabilities.png" },
  { name: "Aditya Birla", src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/03/image25-1.jpg" },
  { name: "NMDC", src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/03/NMDC-Logo.jpg" },
  { name: "Jitendra EV", src: "https://www.dkgrouplabs.com/wp-content/uploads/2020/01/Clients2.png" },
  { name: "Henkel", src: "https://www.dkgrouplabs.com/wp-content/uploads/2020/01/Henkel.png" },
  { name: "NSIT", src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/03/0.png" },
  { name: "SESA", src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/03/sesa-goa1-300x280.jpg" },
  { name: "Exide", src: "https://www.dkgrouplabs.com/wp-content/uploads/2020/01/Clients3.png" },
  { name: "Wipro", src: "https://www.dkgrouplabs.com/wp-content/uploads/2019/03/1024px-Wipro_Logo.svg_.png" },
  { name: "Tech Mahindra", src: "https://www.dkgrouplabs.com/wp-content/uploads/2020/01/Tech-Mahindra-1.png" },
  { name: "Hcl", src: "https://www.dkgrouplabs.com/wp-content/uploads/2020/01/HCL-1.png" },
  { name: "Gg", src: "https://www.dkgrouplabs.com/wp-content/uploads/2020/01/GE.png" },
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
