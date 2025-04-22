import React from "react";
import Section from "./Section";
import { linkedin, twitter, facebook } from "../assets";

// Social links with branding colors
const socials = [
  {
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/company/dkg-labs/",
    bgColor: "bg-[#0077B5]", // LinkedIn Blue
  },
  {
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/DKGLabs",
    bgColor: "bg-[#1877F2]", // Facebook Blue
  },
  {
    title: "Twitter",
    iconUrl: twitter,
    url: "https://www.twitter.com/DKGLabs",
    bgColor: "bg-[#1DA1F2]", // Twitter Blue
  },
];

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 ${item.bgColor} rounded-full transition-transform hover:scale-110`}
            >
              <img
                src={item.iconUrl}
                width={24}
                height={24}
                alt={item.title}
                className="brightness-0 invert"
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;

