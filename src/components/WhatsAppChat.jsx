import React from 'react'
import whatsapp from '../assets/whatsapp.svg'

const WhatsAppChat = () => {
    const phoneNumber = "9810124321";
    const message = "Hello, I have a query regarding...";

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

  return (
    <button
        onClick={handleClick}
        className="text-white"
    >
        <img src={whatsapp} width={55} className="rounded-full" />
    </button>
  )
}

export default WhatsAppChat