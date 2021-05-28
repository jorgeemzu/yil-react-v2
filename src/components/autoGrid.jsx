import { Link } from "react-router-dom";
import AutoCard from "./autoCard";

import info from "./util/AutoData";
console.log(info);
export default function AutoGrid() {
  console.log("hola2");
  return (
    <section className="destacados">
      <h2>Autos Destacados</h2>
      <div className="destacadosGrid">
        {info.map(auto => {
          console.log(auto);
          console.log("hola3");
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
