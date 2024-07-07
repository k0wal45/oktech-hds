import About from "@/components/About/About";
import Expert from "@/components/Expert/Expert";
import FAQ from "@/components/FAQ/FAQ";
import HeroAbout from "@/components/Hero/HeroAbout";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroAbout />
      <About />
      <Expert />
      <FAQ />
    </main>
  );
};

export default page;
