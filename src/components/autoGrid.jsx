import { useState } from "react";
import { Link } from "react-router-dom";
import AutoCard from "./autoCard";

import info from "./util/AutoData";

export default function AutoGrid() {
  const [autos, setAutos] = useState(info);

  return (
    <section className="destacados">
      <h2>Autos Destacados</h2>
      <div className="destacadosGrid">
        {autos.map(auto => {
          return (
            <AutoCard
              titulo={auto.nombre}
              img={auto.portada.fields.file.url}
              precio={auto.precio}
              id={auto.id}
            />
          );
        })}
      </div>

      <Link className="btn-red texto-negro" to="/autos">
        Ver mas Autos
      </Link>
    </section>
  );
}
