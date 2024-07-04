import Info from "@/components/Contact/Info";
import Expert from "@/components/Expert/Expert";
import Galery from "@/components/Galery/Galery";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Service/Services";
import Step from "@/components/Steps/Step";

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <Services />
      <Galery />
      <Step />
      <Expert />
    </main>
  );
}
