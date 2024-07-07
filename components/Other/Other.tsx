import React from "react";
import AppearFromRight from "../Animations/AppearFromRight";
import { FaGlobeEurope } from "react-icons/fa";
import Card from "./Card";
import { FaTruck } from "react-icons/fa6";

const Other = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <AppearFromRight>
        <div className="text-2xl font-medium text-neutral-700 flex items-center gap-4 text-center">
          <div className="text-primary">
            <FaGlobeEurope />
          </div>
          <h4>Odnogi Firmy</h4>
        </div>
      </AppearFromRight>
      <AppearFromRight>
        <p className="text-5xl font-bold text-center">
          Sprawdź inne działalności naszej firmy
        </p>
      </AppearFromRight>
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center">
        <Card
          title="Wynajem Autolawety"
          desc="Świadczymy usługi wynajmu autolawet dostępne 7 dni w tygodniu. Zapewniamy szybki, przystępny cenowo, przyjazny i niezawodny pojazd."
          icon={<FaTruck />}
          link="https://www.autolaweta24.com.pl/"
          img="laweta.jpg"
        />
        <Card
          title="Montaż i serwis kliamtyzacji"
          desc="Montaż i serwis klimatyzacji w biurach, domach, mieszkaniach oraz kontenerach, zapewniając komfortowe warunki w każdej przestrzeni"
          icon={<FaTruck />}
          link="https:klima-serwis.eu/"
          img="klima.jpg"
        />
      </div>
    </section>
  );
};

export default Other;
