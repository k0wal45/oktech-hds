import Info from "@/components/Contact/Info";
import Expert from "@/components/Expert/Expert";
import FAQ from "@/components/FAQ/FAQ";
import Images from "@/components/Galery/Images";
import HeroGalery from "@/components/Hero/HeroGalery";
import Services from "@/components/Service/Services";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroGalery />
      <Images />
      <Info />
      <Services />
      <Expert />
      <FAQ />
    </main>
  );
};

export default page;
