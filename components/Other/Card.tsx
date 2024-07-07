import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  title,
  desc,
  icon,
  link,
  img,
}: {
  title: string;
  desc: string;
  icon: JSX.Element;
  link: string;
  img: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-xl border-2 border-neutral-300 hover:shadow-xl text-center max-w-[22rem] transition-all duration-200 overflow-hidden">
      <Image
        width={600}
        height={500}
        src={"/img/" + img}
        alt="Dariusz Kowalski"
        className="w-full h-48 object-cover"
      />
      <p className="text-3xl font-bold px-8">{title}</p>
      <p className="text-lg text-neutral-600 px-8">{desc}</p>
      <Link
        href={link}
        className="px-6 py-4 text-xl bg-primary rounded-lg font-semibold hover:bg-primarydark active:scale-95 transition-all duration-300 z-20 mb-8"
      >
        Skontaktuj się
      </Link>
    </div>
  );
};

export default Card;
