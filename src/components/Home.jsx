import AutoGrid from "./autoGrid";
import Categorias from "./Categorias";
import ContactFrom from "./ContactForm";
import Hero from "./Hero";
import Location from "./Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Categorias />
      <AutoGrid />
      <Location />
      <ContactFrom />
    </>
  );
}
