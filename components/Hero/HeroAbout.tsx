import Image from "next/image";
import React from "react";

const HeroAbout = () => {
  return (
    <header className="bg-black/40 m-6 lg:m-12 my-16 lg:my-20 rounded-3xl flex flex-col items-center justify-center text-white overflow-hidden relative py-24 gap-4 p-4 text-center">
      <h1 className="font-bold text-6xl">O Nas</h1>
      <p className="text-xl">
        Przeczytaj tu pare informacji o naszej firmie i naszej historii
      </p>
      <Image
        width={1920}
        height={600}
        alt="Freepik Zdjęcie z budowy"
        src="/img/construction.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
    </header>
  );
};

export default HeroAbout;
