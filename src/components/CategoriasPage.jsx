import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../components/util/Contentful";
import AutoCard from "./autoCard";
import PageHeader from "./PageHeader";
import Categorias from "./Categorias";
import Location from "./Location";
import FilterAutos from "./FilterAutos";

export default function CategoriasPage() {
  const { autoCat } = useParams();
  const [categoria, setCategoria] = useState([]);
  const catFiltro = [];

  useEffect(() => {
    client.getEntries({}).then(response => {
      setCategoria(response.items);
    });
  }, []);

  return (
    <>
      <section>
        <NavBar clase="black-bg" />
        <PageHeader titulo={autoCat} />
        <div className="container">
          {categoria.map(auto => {
            if (auto.fields.categoria == autoCat) {
              catFiltro.push(auto);
            }
            //   <div className="destacadosGrid">
            //     <AutoCard
            //       titulo={auto.fields.nombre}
            //       img={auto.fields.portada.fields.file.url}
            //       precio={auto.fields.precio}
            //       id={auto.sys.id}
            //     />
            //   </div>
          })}

          <FilterAutos catAutos={catFiltro} />
        </div>
        <Categorias />
        <Location />
      </section>
    </>
  );
}
