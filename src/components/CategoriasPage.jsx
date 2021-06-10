import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import Categorias from "./Categorias";
import Location from "./Location";
import FilterAutos from "./FilterAutos";
import AutoData from "./util/AutoData";

export default function CategoriasPage() {
  const { autoCat } = useParams();
  const [categoria, setCategoria] = useState([]);
  const catFiltro = [];

  useEffect(() => {
    AutoData().then(autos => setCategoria(autos));
  }, [categoria]);

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
