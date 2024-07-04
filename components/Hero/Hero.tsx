import Link from "next/link";
import classes from "./background.module.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Reveal from "../Animations/Reveal";

const Hero = () => {
  return (
    <header
      className={`${classes.bgFixed} min-h-[90vh] bg-cover h-fit m-6 lg:m-12 my-16 lg:my-20 rounded-3xl flex flex-col lg:flex-row items-end justify-between overflow-hidden`}
    >
      <section className="flex flex-col lg:h-[90vh] gap-12 items-start justify-start lg:w-1/2 p-6 py-12 lg:p-24 lg:py-36">
        <Reveal>
          <h1 className="text-6xl lg:text-8xl font-bold text-white max-w-4xl">
            Usługi Przewozu HDS i Zwyżki
          </h1>
        </Reveal>

        <Link
          href="/cennik"
          className="py-2 px-6 bg-transparent text-center text-neutral-900 font-bold transition-all duration-300 bg-white rounded-xl
            flex items-center justify-center gap-4
            hover:bg-gray-200
            active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
            "
        >
          Sprawdź nasz cennik
        </Link>
      </section>

      <section className=" flex items-end justify-end">
        <div className="flex w-fit p-4 lg:p-8 pb-0 lg:pb-0 bg-black/40 lg:rounded-tl-xl flex-col lg:flex-row text-white">
          <div className="flex flex-col gap-12">
            <Reveal>
              <p className="max-w-md text-2xl text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              </p>
            </Reveal>
            <Reveal>
              <Link
                href="/galeria"
                className="flex items-center justify-start gap-4 text-xl hover:border-b-2 pb-2 border-white w-fit"
              >
                Zobacz Galerię
                <FaArrowRight />
              </Link>
            </Reveal>
          </div>
          <Image
            width={700}
            height={600}
            src="/img/worker.png"
            alt=""
            className="max-w-[22rem] w-72 lg:scale-[1.6] origin-bottom"
          />
        </div>
      </section>
    </header>
  );
};

export default Hero;
