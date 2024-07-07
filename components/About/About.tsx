import React from "react";
import AppearFromLeft from "../Animations/AppearFromLeft";
import { FaHelmetSafety } from "react-icons/fa6";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col gap-8 items-start justify-center m-12 p-4 lg:p-8 max-w-7xl mx-auto ">
      <AppearFromLeft>
        <div className="text-2xl font-medium text-neutral-700 flex items-center gap-4">
          <div className="text-primary">
            <FaHelmetSafety />
          </div>
          <h3>Firma</h3>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xl text-neutral-600 tracking-wider place-items-center">
        <Image
          width={1000}
          height={800}
          alt=""
          src="/img/construction.jpg"
          className="rounded-2xl lg:aspect-square w-full object-cover md:col-span-2 lg:col-span-1"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis
          quia placeat incidunt perspiciatis optio, quisquam officiis temporibus
          assumenda similique repellendus reiciendis modi labore unde ipsum
          consequatur adipisci laborum eligendi facilis tempora atque minus
          explicabo. Ipsa accusamus provident, enim nemo iusto, totam
          accusantium adipisci, officia libero non rerum modi incidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis
          quia placeat incidunt perspiciatis optio, quisquam officiis temporibus
          assumenda similique repellendus reiciendis modi labore unde ipsum
          consequatur adipisci laborum eligendi facilis tempora atque minus
          explicabo. Ipsa accusamus provident, enim nemo iusto, totam
          accusantium adipisci, officia libero non rerum modi incidunt.
        </p>
      </div>
    </section>
  );
};

export default About;
