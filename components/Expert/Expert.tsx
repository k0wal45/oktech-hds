import { FaPerson } from "react-icons/fa6";
import classes from "./expert.module.css";
import Link from "next/link";
import Image from "next/image";

const Expert = () => {
  function yearsSince(dataObecna: any) {
    const dataUrodzenia: any = new Date("2011-03-12");
    const roznicaCzasu = dataObecna - dataUrodzenia;
    const roznicaWiek = new Date(roznicaCzasu).getFullYear() - 1970;
    return roznicaWiek;
  }

  return (
    <div className="mx-auto grid place-items-center p-4 lg:p-8">
      <section
        className={
          classes.bgBoxes +
          " bg-fixed max-w-7xl rounded-3xl px-4  relative text-white text-center flex flex-col items-center justify-center gap-12 overflow-hidden w-full"
        }
      >
        <div className="text-2xl flex items-center gap-4 text-center font-bold mt-12 z-20">
          <div className="text-primary">
            <FaPerson />
          </div>
          <h4>Usługi</h4>
        </div>

        <p className="text-5xl font-bold text-center z-20">
          Od Telefonu Po Realizacje
        </p>
        <Link
          href="/kontakt"
          className="px-6 py-4 bg-primary rounded-lg font-semibold hover:bg-primarydark active:scale-95 transition-all duration-300 z-20"
        >
          Skontaktuj się
        </Link>
        <div className="z-20 flex flex-col lg:flex-row items-center gap-8 lg:items-end justify-around w-full pt-24 lg:pt-12">
          {/* item */}
          <div className="bg-white px-16 pt-4 rounded-xl lg:rounded-b-none lg:max-w-[20rem] w-full">
            <Image
              width={300}
              height={600}
              src="/img/owner.png"
              alt="Dariusz Kowalski"
              className="scale-[1.4] origin-bottom"
            />
          </div>
          {/* item */}
          <div className="flex flex-col gap-4">
            <p className="text-8xl font-bold text-primary">
              {yearsSince(new Date())}
            </p>
            <div className="bg-white p-8 rounded-xl lg:rounded-b-none lg:max-w-[20rem] lg:w-[1000px]">
              <p className="text-2xl font-bold text-black">
                Tyle lat doświadczenia ma nasza firma
              </p>
              <p className="text-xl text-neutral-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                eveniet.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl lg:rounded-b-none lg:max-w-[20rem] w-full relative overflow-hidden h-[26rem]">
            <Image
              width={600}
              height={800}
              src="/img/sunset.jpg"
              alt="Dariusz Kowalski"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div
          className={
            classes.bgRoudedMask + " absolute top-0 left-0 w-full h-full z-10"
          }
        ></div>
      </section>
    </div>
  );
};

export default Expert;
