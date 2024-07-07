import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";

const Images = () => {
  return (
    <section className="flex flex-col items-center justify-center max-w-7xl mx-auto p-4">
      <div className="container mx-auto flex flex-col items-center gap-8 mb-12">
        <div className="text-2xl flex items-center gap-4 text-center font-bold z-20 ">
          <div className="text-primary">
            <FaCamera />
          </div>
          <h1>Zdjęcia naszej pracy</h1>
        </div>

        <p className="text-5xl font-bold text-center z-20 ">
          Sprawdź zdjęcia z naszej pracy
        </p>
      </div>
      <div className=" columns-1 md:columns-2 xl:columns-3 ">
        {data.map((item: string, index: number) => (
          <Image
            width={800}
            height={800}
            alt="HDS i budowa"
            src={"/img/Photos/" + item}
            className="w-full h-full object-fit rounded-xl my-6"
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Images;

const data = [
  "oktech (1).jpg",
  "oktech (2).jpg",
  "oktech (3).jpg",
  "oktech (4).jpg",
  "oktech (5).jpg",
  "oktech (6).jpg",
  "oktech (7).jpg",
  "oktech (8).jpg",
  "oktech (9).jpg",
  "oktech (10).jpg",
  "oktech (11).jpg",
  "oktech (12).jpg",
  "oktech (13).jpg",
  "oktech (14).jpg",
  "oktech (15).jpg",
  "oktech (16).jpg",
  "oktech (17).jpg",
  "oktech (18).jpg",
  "oktech (19).jpg",
  "oktech (20).jpg",
  "oktech (21).jpg",
  "oktech (22).jpg",
  "oktech (23).jpg",
  "oktech (24).jpg",
  "oktech (25).jpg",
  "oktech (26).jpg",
  "oktech (27).jpg",
  "oktech (28).jpg",
  "oktech (29).jpg",
  "oktech (30).jpg",
  "oktech (31).jpg",
  "oktech (32).jpg",
  "oktech (33).jpg",
];
