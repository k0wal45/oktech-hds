import Image from "next/image";
import React from "react";
import AppearFromBottom from "../Animations/AppearFromBottom";

const LineItem = ({ data, index }: { data: any; index: number }) => {
  return (
    <div className="flex flex-col lg:odd:flex-row lg:even:flex-row-reverse lg:gap-8 items-center justify-center w-full lg:h-[30rem] max-w-7xl">
      {/* 1 side */}

      <div className="flex-1 flex flex-col items-start justify-center gap-4">
        <AppearFromBottom>
          <p className="text-4xl font-bold text-neutral-400">{"0" + index}</p>
        </AppearFromBottom>
        <AppearFromBottom>
          <h5 className="text-2xl font-bold">{data.title}</h5>
        </AppearFromBottom>
        <AppearFromBottom>
          <p className="text-light text-lg text-neutral-600">
            {data.description}
          </p>
        </AppearFromBottom>
      </div>
      {/* line */}
      <div className="hidden relative flex-none h-full lg:flex flex-col items-center justify-center after:content-['']  after:w-0.5 after:h-full  after:bg-neutral-300 after:indivne-block after:absolute after:bottom-0 after:left-1/2">
        <div className="size-8 bg-primary rounded-full z-20 translate-x-[1px]"></div>
      </div>

      {/* 2 side */}
      <div className="flex-1 py-12">
        <AppearFromBottom>
          <Image
            width={700}
            height={500}
            alt=""
            src={"/img/" + data.img}
            className="rounded-xl object-cover h-full"
          />
        </AppearFromBottom>
      </div>
    </div>
  );
};

export default LineItem;
