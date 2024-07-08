import React from "react";
import AppearFromRight from "../Animations/AppearFromRight";
import { FaArrowRight, FaCamera } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Naprawa znaków",
    img: "oktech (4).jpg",
  },
  {
    title: "Przenoszenie ciężkich obiektów",
    img: "oktech (5).jpg",
  },
  {
    title: "Przewóz kontenerów",
    img: "oktech (17).jpg",
  },
  {
    title: "Wycinka drzew",
    img: "oktech (31).jpg",
  },
];

interface Img {
  title: string;
  img: string;
}

const Galery = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-4 lg:p-12">
      <AppearFromRight>
        <div className="text-2xl font-medium text-neutral-700 flex items-center gap-4 text-center">
          <div className="text-primary">
            <FaCamera />
          </div>
          <h4>Zdjęcia</h4>
        </div>
      </AppearFromRight>
      <AppearFromRight>
        <p className="text-5xl font-bold text-center">
          Zobacz zdjęcia naszej pracy
        </p>
      </AppearFromRight>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center text-white">
        {data.map((item: Img, index: number) => (
          <div
            className="w-full h-[27rem] relative p-8 lg:p-12 flex flex-col justify-between items-start bg-black/30"
            key={index}
          >
            <p className="text-5xl font-bold z-10">{item.title}</p>
            <Link
              href="/galeria"
              className="flex items-center justify-start gap-4 text-xl hover:border-b-2 pb-2 border-white w-fit"
            >
              Zobacz Galerię
              <FaArrowRight />
            </Link>
            <Image
              width={700}
              height={500}
              alt=""
              src={"/img/Photos/" + item.img}
              className="absolute top-0 left-0 rounded-xl object-cover w-full h-full z-[-1]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galery;
