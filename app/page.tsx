import Info from "@/components/Contact/Info";
import ContactPanel from "@/components/ContactPanel";
import Expert from "@/components/Expert/Expert";
import FAQ from "@/components/FAQ/FAQ";
import Galery from "@/components/Galery/Galery";
import Hero from "@/components/Hero/Hero";
import Other from "@/components/Other/Other";
import Services from "@/components/Service/Services";
import Step from "@/components/Steps/Step";

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <Services />
      <Galery />
      <ContactPanel />
      <Step />
      <Expert />
      <Other />
      <FAQ />
    </main>
  );
}
