import React from "react";
import { FaHelmetSafety } from "react-icons/fa6";
import AppearFromLeft from "../Animations/AppearFromLeft";
const data = ["", ""];

const Step = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <AppearFromLeft>
        <div className="text-2xl font-medium text-neutral-700 flex items-center gap-4 text-center">
          <div className="text-primary">
            <FaHelmetSafety />
          </div>
          <h4>Usługi</h4>
        </div>
      </AppearFromLeft>
      <AppearFromLeft>
        <p className="text-5xl font-bold text-center">
          Od Telefonu Po Realizacje
        </p>
      </AppearFromLeft>
      <ul>
        {data.map((item) => (
          <li className="relative h-72 flex-1 flex flex-col items-center justify-center after:content-['']  after:w-0.5 after:h-full  after:bg-neutral-300 after:inline-block after:absolute after:bottom-0 odd:after:left-0 even:after:right-0  z-[-1] odd:translate-x-1/2 even:-translate-x-[calc(50%-1.5px)] group">
            <div className="flex group-even:flex-row-reverse items-center font-medium w-full  ">
              <span className="max-w-8 h-8 bg-primary border-2 border-transparent rounded-full flex justify-center items-center group-odd:mr-3 group-even:ml-3 text-sm text-white z-20 group-odd:-translate-x-1/2 group-even:translate-x-1/2"></span>
              <div className="block">
                <h4 className="text-lg  text-indigo-600">Step 1</h4>
                <span className="text-sm">Create Pagedone Account</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Step;
