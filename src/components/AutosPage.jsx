import FilterAutos from "./FilterAutos";
import NavBar from "./NavBar";
import PageHeader from "./PageHeader";
import client from "../components/util/Contentful";
import { useState } from "react";

export default function AutosPage() {
  const [autos, setAutos] = useState([]);
  client.getEntries({}).then(response => {
    setAutos(response.items);
  });
  return (
    <>
      <NavBar clase="black-bg" />
      <PageHeader titulo="Nuestros Autos" />
      <FilterAutos catAutos={autos} />
    </>
  );
}
