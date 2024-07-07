import Link from "next/link";
import classes from "../Expert/expert.module.css";
import { FaGears } from "react-icons/fa6";

const Pricing = () => {
  return (
    <header
      className={
        classes.bgBoxes +
        " m-4 lg:m-12 rounded-2xl mt-16 lg:mt-16 p-4 py-16 relative overflow-hidden"
      }
    >
      <div className="container mx-auto flex flex-col items-center gap-8 z-20">
        <div className="text-2xl flex items-center gap-4 text-center font-bold z-20 text-white">
          <div className="text-primary">
            <FaGears />
          </div>
          <h1>Usługi HDS i Zwyżka</h1>
        </div>

        <p className="text-5xl font-bold text-center z-20 text-white">
          Od Telefonu Po Realizacje
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 z-20">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Transport dużym HDS</h3>
            <p className="text-lg mb-2">
              Cena za godzinę: <p className="font-semibold">150 PLN</p>
            </p>
            <p className="text-lg mb-2">
              Cena za kilometr: <p className="font-semibold">5 PLN</p>
            </p>
            <p className="text-lg mb-4">
              Minimalna opłata: <p className="font-semibold">300 PLN</p>
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Wynajem Zwyżki</h3>
            <p className="text-lg mb-2">
              Cena za godzinę: <p className="font-semibold">120 PLN</p>
            </p>
            <p className="text-lg mb-2">
              Cena za dzień: <p className="font-semibold">900 PLN</p>
            </p>
            <p className="text-lg mb-4">
              Minimalna opłata: <p className="font-semibold">240 PLN</p>
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Transport małym HDS</h3>
            <p className="text-lg mb-2">
              Cena za godzinę: <p className="font-semibold">160 PLN</p>
            </p>
            <p className="text-lg mb-2">
              Cena za kilometr: <p className="font-semibold">6 PLN</p>
            </p>
            <p className="text-lg mb-4">
              Minimalna opłata: <p className="font-semibold">320 PLN</p>
            </p>
          </div>
        </div>
        <Link
          href="/kontakt"
          className="px-6 py-4 bg-primary rounded-lg font-semibold hover:bg-primarydark active:scale-95 transition-all duration-300 z-20"
        >
          Skontaktuj się
        </Link>
      </div>
      <div
        className={
          classes.bgRoudedMask + " absolute top-0 left-0 w-full h-full z-10"
        }
      ></div>
    </header>
  );
};

export default Pricing;
