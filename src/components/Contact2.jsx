import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { motion } from "framer-motion";


const Contact2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [organization, setOrganization] = useState("");
  const [number, setNumber] = useState('');

  function Check() {
    if (!message || !organization || !email || !name || !number) {
      toast.error("Invalid inputs", {
        style: { backgroundColor: "#303030", color: "#fff" },
      });
    }
  }

  function handleForm(e) {
    e.preventDefault();

    toast.success("Message Sent Successfully", {
      style: { backgroundColor: "#303030", color: "#fff" },
    });

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/vleaptba@gmail.com", {
        name,
        message,
        email,
        organization,
        number
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Message Sent Successfully", {
            style: { backgroundColor: "#303030", color: "#fff" },
          });
        }
      })
      .catch(() =>
        toast.error("Unable to send messages", {
          style: { backgroundColor: "#303030", color: "#fff" },
        })
      );
  }

  return (
    <div className="relative bg-black text-white min-h-screen">
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

      <div><Toaster /></div>

      <h1 id="contact" className="mb-8 p-3 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-br from-purple-500">
        Contact Us
      </h1>

      {/* Contact Form */}
      <section className="flex justify-center max-lg:w-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8">
        <div className="mx-auto">
          <div className="pb-8 text-center">
            <h2 className="text-primary sm:text-5xl text-3xl font-bold">Start your Journey</h2>
            <h2 className="text-primary sm:text-5xl text-3xl font-bold">with us Today 👋</h2>
          </div>

          <form id="form" className="xl:px-24 sm:px-0" onSubmit={handleForm}>
            <div className="grid sm:grid-cols-4 grid-cols-1 gap-x-8 gap-y-4 w-full justify-center">
              <div>
                <label className="text-primary font-semibold">
                  Your Name
                  <input onChange={(e) => setName(e.target.value)} required className="w-full bg-white text-black rounded-md h-10 px-2" type="text" />
                </label>
              </div>

              <div>
                <label className="text-primary font-semibold">
                  Email Address
                  <input onChange={(e) => setEmail(e.target.value)} required className="w-full bg-white text-black rounded-md h-10 px-2" type="email" />
                </label>
              </div>

              <div>
                <label className="text-primary font-semibold">
                  Your Organization
                  <input onChange={(e) => setOrganization(e.target.value)} className="w-full bg-white text-black rounded-md h-10 px-2" type="text" />
                </label>
              </div>

              <div>
                <label className="text-primary font-semibold">
                  Contact No.
                  <PhoneInput defaultCountry="IN" international withCountryCallingCode value={number} onChange={setNumber} className="h-10 rounded-md px-2 text-sm bg-white" required />
                </label>
              </div>
            </div>

            <div className="py-4">
              <label className="text-primary font-semibold">
                Message
                <textarea onChange={(e) => setMessage(e.target.value)} className="w-full bg-white text-black rounded-md h-28 p-2" required></textarea>
              </label>
            </div>

            <div className="text-center">
              <Button onClick={Check}>Submit</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Google Map Embed + Contact Info */}
      <div className="w-full flex flex-col lg:flex-row justify-center mt-12 px-4 gap-10">
        <div className="lg:w-1/2 w-full m-7 rounded-xl shadow-xl border border-purple-500 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.264536016029!2d77.0644846754982!3d28.56181807570351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c0827451cd%3A0xdd5c02a5efb3fcb8!2sDKG%20Labs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1749468044006!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - DKG Labs Pvt. Ltd."
          ></iframe>
        </div>

        <div className="lg:w-1/2 w-full space-y-6 pb-10">
          <h2 className="text-3xl font-bold text-center text-gradient">Contact Info</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-red-600">INDIA</h3>
            <p className="text-gray-300">DKG Labs Pvt. Ltd.</p>
            <p className="text-lime-400">New Delhi</p>
            <p className="text-blue-400">201C/6, D–21 Corporate Park, New Delhi – 110077</p>
            <p className="text-white">📞 +91-9810805605</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-green-400">USA</h3>
            <p className="text-white">DKG Labs LLC, 2538 Monroe Ave, Everett WA 98203</p>
            <p className="text-white">📞 (425) 223–3393</p>
          </div>

          <div className="space-y-2 text-sm">
            <p>💼 <strong>Sales:</strong> <a href="mailto:sales@dkgrouplabs.com" className="text-sky-400 underline">sales@dkgrouplabs.com</a></p>
            <p>🔧 <strong>IOT:</strong> <a href="mailto:iot@dkgrouplabs.com" className="text-sky-400 underline">iot@dkgrouplabs.com</a></p>
            <p>🧠 <strong>Resume:</strong> <a href="mailto:talent@dkgrouplabs.com" className="text-sky-400 underline">talent@dkgrouplabs.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
