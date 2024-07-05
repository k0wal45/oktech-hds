import Info from "@/components/Contact/Info";
import Expert from "@/components/Expert/Expert";
import FAQ from "@/components/FAQ/FAQ";
import Pricing from "@/components/Service/Pricing";
import Services from "@/components/Service/Services";
import Step from "@/components/Steps/Step";
import React from "react";

const page = () => {
  return (
    <main>
      <Pricing />
      <Info />
      <Services />
      <Step />
      <Expert />
      <FAQ />
    </main>
  );
};

export default page;
