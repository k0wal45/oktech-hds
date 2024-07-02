import React from "react";
import { FaIndustry, FaShippingFast, FaWrench } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { GiBrickWall, GiElectric, GiFarmTractor } from "react-icons/gi";
import AppearFromBottom from "../Animations/AppearFromBottom";
import AppearFromLeft from "../Animations/AppearFromLeft";

const Services = () => {
  return (
    <section className="flex flex-col gap-8 items-start justify-center m-12 p-4 lg:p-8 max-w-7xl mx-auto ">
      <AppearFromLeft>
        <div className="text-2xl font-medium text-neutral-700 flex items-center gap-4">
          <div className="text-primary">
            <FaHelmetSafety />
          </div>
          <h3>Usługi</h3>
        </div>
      </AppearFromLeft>

      <AppearFromLeft>
        <p className="text-3xl font-bold">
          Nasza firma specjalizuje się w profesjonalnych usługach transportu HDS
          na terenie Katowic i całego Śląska. Oferujemy kompleksowe rozwiązania,
          w tym transport i załadunek kontenerów, przewóz materiałów
          budowlanych, relokację maszyn i urządzeń przemysłowych oraz transport
          elementów infrastruktury.
        </p>
      </AppearFromLeft>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className=" p-2 flex flex-col gap-6 border-b-2 border-neutral-300"
          >
            <AppearFromBottom>
              <div className="rounded-xl bg-primary p-4 text-3xl text-white w-fit">
                {service.icon}
              </div>
            </AppearFromBottom>
            <AppearFromBottom>
              <h4 className="text-xl font-bold">{service.title}</h4>
            </AppearFromBottom>
            <AppearFromBottom>
              <p className="text-light text-lg">{service.description}</p>
            </AppearFromBottom>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

const services = [
  {
    icon: <FaShippingFast />,
    title: "Transport i załadunek kontenerów",
    description:
      "Oferujemy kompleksowe usługi transportu i załadunku kontenerów różnego typu, zapewniając bezpieczne i sprawne przewozy dzięki naszym samochodom wyposażonym w dźwigi HDS.",
  },
  {
    icon: <GiBrickWall />,
    title: "Przewóz materiałów budowlanych",
    description:
      "Specjalizujemy się w transporcie materiałów budowlanych, takich jak stal, drewno, beton czy prefabrykaty, gwarantując szybki i bezpieczny dowóz na plac budowy.",
  },
  {
    icon: <FaIndustry />,
    title: "Relokacja maszyn i urządzeń przemysłowych",
    description:
      "Zapewniamy profesjonalny transport oraz relokację ciężkich maszyn i urządzeń przemysłowych, oferując kompleksową obsługę od załadunku po rozładunek.",
  },
  {
    icon: <GiElectric />,
    title: "Transport elementów infrastruktury",
    description:
      "Realizujemy przewozy dużych elementów infrastruktury, takich jak słupy energetyczne, rurociągi czy elementy mostów, przy użyciu naszych specjalistycznych pojazdów z dźwigami HDS.",
  },
  {
    icon: <FaWrench />,
    title: "Usługi dźwigowe i montażowe",
    description:
      "Nasze samochody HDS umożliwiają także wykonywanie precyzyjnych prac dźwigowych i montażowych, takich jak ustawianie billboardów, masztów czy instalacji reklamowych.",
  },
  {
    icon: <GiFarmTractor />,
    title: "Transport pojazdów i sprzętu rolniczego",
    description:
      "Oferujemy profesjonalny transport pojazdów oraz sprzętu rolniczego, zapewniając bezpieczny załadunek i rozładunek dzięki naszym zaawansowanym technicznie pojazdom HDS.",
  },
];
