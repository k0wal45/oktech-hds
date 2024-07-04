import React from "react";
import AppearFromLeft from "../Animations/AppearFromLeft";
import LineItem from "./LineItem";
import { GiTowTruck } from "react-icons/gi";

const data = [
  {
    title: "Telefoniczna konsultacja",
    description:
      "Skontaktuj się z nami telefonicznie, aby omówić swoje potrzeby transportowe. Nasi eksperci są dostępni, aby doradzić i odpowiedzieć na wszelkie pytania.",
  },
  {
    title: "Ustalenie szczegółów",
    description:
      "Po wstępnej konsultacji, ustalamy wszystkie szczegóły dotyczące transportu, w tym terminy, trasę oraz specyfikę ładunku, aby zapewnić bezproblemowy przebieg usługi.",
  },
  {
    title: "Realizacja przewozu",
    description:
      "Nasi doświadczeni operatorzy realizują transport zgodnie z ustaleniami, dbając o bezpieczeństwo i terminowość. Każdy etap jest monitorowany, aby zapewnić najwyższą jakość usług.",
  },
  {
    title: "Zadowolenie klienta",
    description:
      "Po zakończeniu usługi upewniamy się, że jesteś w pełni zadowolony z wykonanej pracy. Twoje opinie i satysfakcja są dla nas najważniejsze.",
  },
];

const Step = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-4 lg:p-12">
      <AppearFromLeft>
        <div className="text-2xl font-medium text-neutral-700 flex items-center gap-4 text-center">
          <div className="text-primary">
            <GiTowTruck />
          </div>
          <h4>Usługi</h4>
        </div>
      </AppearFromLeft>
      <AppearFromLeft>
        <p className="text-5xl font-bold text-center">
          Od Telefonu Po Realizacje
        </p>
      </AppearFromLeft>

      <div className="flex flex-col items-center justify-center">
        {data.map((item, index) => (
          <LineItem data={item} index={index + 1} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Step;
