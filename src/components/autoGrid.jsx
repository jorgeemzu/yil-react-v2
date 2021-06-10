import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AutoCard from "./autoCard";
import AutoData from "./util/AutoData";

export default function AutoGrid() {
  const [autoInfo, setAutos] = useState();

  useEffect(() => {
    AutoData().then(autos => setAutos(autos));
  }, [autoInfo]);

  if (autoInfo === undefined) {
    return <h1>error</h1>;
  } else {
    return (
      <section className="destacados">
        <h2>Autos Destacados</h2>
        <div className="destacadosGrid">
          {autoInfo.map(auto => {
            return (
              <AutoCard
                titulo={auto.fields.nombre}
                img={auto.fields.portada.fields.file.url}
                precio={auto.fields.precio}
                id={auto.sys.id}
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
}
