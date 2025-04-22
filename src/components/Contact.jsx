import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Contact =  () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [organization, setOrganization] = useState("");
  const [number, setNumber] = useState('');
  const [isToast, setisToast] = useState(false);

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
        name: name,
        message: message,
        email: email,
        organization: organization,
        number: number
      })
      .then((response) => {
        if (response.status == 200) {
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
    <>
      <div>
        <Toaster />
      </div>
      <h1 id="contact" className="mb-8 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-br from-purple-500">
        Contact Us
      </h1>
      <section className="flex justify-center max-lg:w-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8">
        <div className="mx-auto">
          <div className="pb-8 text-center">
            <h2 className="text-primary sm:text-5xl text-3xl font-bold">
              Start your AI Journey
            </h2>
            <h2 className="text-primary sm:text-5xl text-3xl font-bold">
              with us Today 👋
            </h2>
          </div>
          <form id="form" className="xl:px-24 sm:px-0" onSubmit={handleForm}>
            <div className="grid sm:grid-cols-4 grid-cols-1 gap-x-8 gap-y-4 w-full justify-center">
              <div>
                <label className="text-primary font-semibold">
                  Your Name
                  <input onChange={(e) => setName(e.target.value)} required className="w-full bg-white text-black rounded-md h-10 px-2" type="text" name="name" id="name" />
                </label>
              </div>

              <div>
                <label className="text-primary font-semibold">
                  Email Address
                  <input onChange={(e) => setEmail(e.target.value)} required className="w-full bg-white text-black rounded-md h-10 px-2" type="email" name="email" id="email" />
                </label>
              </div>

              <div>
                <label className="text-primary font-semibold">
                  Your Organization
                  <input onChange={(e) => setOrganization(e.target.value)} className="w-full bg-white text-black rounded-md h-10 px-2" type="text" name="organization" id="organization" />
                </label>
              </div>

              <div>
                <label className="text-primary font-semibold">
                  Contact No.
                  <PhoneInput defaultCountry="IN" international withCountryCallingCode value={number} onChange={(number) => setNumber(number)} className="h-10 rounded-md px-2 text-sm bg-white" name="number" id="number" required />
                </label>
              </div>
            </div>

            <div className="py-4">
              <label className="text-primary font-semibold">
                Message
                <textarea onChange={(e) => setMessage(e.target.value)} className="w-full bg-white text-black rounded-md h-28 p-2" name="message" id="message" required></textarea>
              </label>
            </div>

            <div className="text-center">
              <Button onClick={Check}>Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
