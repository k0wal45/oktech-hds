import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Description = () => {
  return (
    <div className="flex flex-col gap-6 flex-1">
      <h1 className="text-5xl font-bold">Skontaktuj się</h1>
      <p className="text-xl text-neutral-600">
        Jeśli potrzebujesz usłgu przewozu, HDS-a lub zwyżki to napisz do nas
        wiadomość lub zadzwoń na jeden z numerów
      </p>
      <div className="flex gap-4">
        <div className="flex items-center  text-xl gap-2 font-semibold">
          <FaPhone className="text-primary" />
          <a href="tel:+48604476647">+48 604 47 66 47</a>
        </div>
        <div className="flex items-center text-xl gap-2 font-semibold">
          <FaPhone className="text-primary" />
          <a href="tel:+48604476647">+48 604 47 66 47</a>
        </div>
      </div>
      <div className="flex items-center text-xl gap-2 font-semibold">
        <FaEnvelope className="text-primary" />
        <a href="mailto:kontenerserwis@interia.pl">kontenerserwis@interia.pl</a>
      </div>
      <div className="flex items-center text-xl gap-2 font-semibold">
        <FaFacebook className="text-primary" />
        <a href="">Oktech HDS</a>
      </div>
      <div className="flex items-center text-xl gap-2 font-semibold">
        <FaLocationDot className="text-primary" />
        Śląsk, Katowice
      </div>
    </div>
  );
};

export default Description;
