import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Roadmap from "./sections/Roadmap";
import Pricing from "./sections/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
// import ExploreMorePage from "./pages-dummy/ExploreMorePage";

const App = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>DKG Labs – AI-Driven Computer Vision & Generative AI Solutions</title>
        <meta name="description" content="Best services for your needs. Explore our features now!" />
        <meta name="keywords" content="React, SEO, Vercel, Web Development, AI, Computer Vision, Generative AI" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags (for social media preview) */}
        <meta property="og:title" content="Your Website Title" />
        <meta property="og:description" content="Your website description." />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://dkglabs.com" />
        <meta property="og:type" content="website" />

        {/* Structured Data for Google Indexing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DKG Labs",
            "url": "https://www.dkglabs.com",
            "description": "AI-Driven Computer Vision & Generative AI Solutions",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "mdoffice@dkgrouplabs.com",
              "contactType": "Customer Service"
            }
          })}
        </script>
      </Helmet>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <>
          <Hero />
          <Benefits />
          <Roadmap />
          <Pricing />
          <Contact />
        </>
        <Footer />
      </div>

      <div className="fixed bottom-1 right-2" style={{ zIndex: "6", left: "initial" }}>
        <WhatsAppChat />
      </div>
    </>
  );
};

export default App;






