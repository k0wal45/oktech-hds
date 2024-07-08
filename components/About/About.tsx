import React from "react";
import AppearFromLeft from "../Animations/AppearFromLeft";
import { FaHelmetSafety } from "react-icons/fa6";
import Image from "next/image";
import AppearFromRight from "../Animations/AppearFromRight";

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

      <AppearFromRight>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xl text-neutral-600 tracking-wider place-items-center">
          <Image
            width={1000}
            height={800}
            alt=""
            src="/img/construction.jpg"
            className="rounded-2xl lg:aspect-square w-full object-cover md:col-span-2 lg:col-span-1"
          />
          <p>
            Nasza firma, założona w 2011 roku, wyrosła na bazie doświadczeń
            zdobytych w branży montażu okien. Od samego początku postawiliśmy na
            najwyższą jakość usług i indywidualne podejście do każdego klienta.
            Jesteśmy dwuosobowym zespołem, który łączy wieloletnie doświadczenie
            z pasją do transportu i szerokiego zakresu usług technicznych.
            Dzięki temu, możemy zapewnić naszym klientom kompleksowe
            rozwiązania, które odpowiadają na ich specyficzne potrzeby.
          </p>
          <p>
            Oferujemy transport HDS, usługi zwyżki, montaż i serwis klimatyzacji
            oraz wynajem autolawety. Nasze wieloletnie doświadczenie pozwala nam
            świadczyć usługi na najwyższym poziomie, gwarantując terminowość,
            profesjonalizm i bezpieczeństwo. Bez względu na to, czy potrzebujesz
            transportu ciężkich ładunków, wynajmu autolawety, czy też montażu
            klimatyzacji, możesz liczyć na naszą fachową pomoc i doradztwo.
          </p>
        </div>
      </AppearFromRight>
    </section>
  );
};

export default About;
