import React from "react";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import AppearFromBottom from "../Animations/AppearFromBottom";

const Info = () => {
  return (
    <section className="mx-6 lg:mx-12 p-6 lg:p-8 flex flex-wrap gap-12 items-start justify-start lg:justify-around bg-secondary rounded-3xl">
      {/* card */}
      <div className="flex gap-4 items-start text-2xl text-primary">
        <FaPhone />
        <div className="flex flex-col gap-2 text-white items-start justify-start">
          <p className="text-2xl font-bold">Telefon</p>
          <ul className="text-xl font-light flex flex-col gap-2">
            <li>
              <AppearFromBottom>
                <a href="tel:+48604476647">+48 604 47 66 47</a>
              </AppearFromBottom>
            </li>
            <li>
              <AppearFromBottom>
                <a href="tel:+48608403675">+48 608 403 675</a>
              </AppearFromBottom>
            </li>
          </ul>
        </div>
      </div>
      {/* card */}
      <div className="flex gap-4 items-start text-2xl text-primary">
        <FaEnvelope />
        <div className="flex flex-col gap-2 text-white items-start justify-start">
          <p className="text-2xl font-bold">E-mail</p>
          <ul className="text-xl font-light flex flex-col gap-2">
            <li>
              <AppearFromBottom>
                <a href="mailto:kontenerserwis@interia.pl">
                  kontenerserwis@interia.pl
                </a>
              </AppearFromBottom>
            </li>
          </ul>
        </div>
      </div>
      {/* card */}
      <div className="flex gap-4 items-start text-2xl text-primary">
        <FaMapLocationDot />
        <div className="flex flex-col gap-2 text-white items-start justify-start">
          <p className="text-2xl font-bold">Teren Działania</p>
          <ul className="text-xl font-light flex flex-col gap-2">
            <li>
              <AppearFromBottom>Katowice</AppearFromBottom>
            </li>
            <li>
              <AppearFromBottom>Śląsk i okolice</AppearFromBottom>
            </li>
          </ul>
        </div>
      </div>
      {/* card */}
      <div className="flex gap-4 items-start text-2xl text-primary">
        <FaGlobe />
        <div className="flex flex-col gap-2 text-white items-start justify-start">
          <p className="text-2xl font-bold">Dane Firmy</p>
          <ul className="text-xl font-light flex flex-col gap-2">
            <li>
              <AppearFromBottom>Oktech Dariusz Kowalski</AppearFromBottom>
            </li>
            <li>
              <AppearFromBottom>NIP: 6342285670</AppearFromBottom>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Info;
