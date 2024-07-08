import Contact from "@/components/Contact/Contact";
import ContactPanel from "@/components/ContactPanel";
import FAQ from "@/components/FAQ/FAQ";
import Galery from "@/components/Galery/Galery";
import Step from "@/components/Steps/Step";
import React from "react";

const page = () => {
  return (
    <main>
      <Contact />
      <Step />
      <Galery />
      <ContactPanel />
      <FAQ />
    </main>
  );
};

export default page;
