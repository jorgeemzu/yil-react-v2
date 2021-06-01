import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AutoCard from "./autoCard";
import client from "../components/util/Contentful";
import AutoData from "../components/util/AutoData";

//import info from "./util/AutoData";

export default function AutoGrid() {
  console.log(AutoData);
  const [autoInfo, setAutos] = useState();

  useEffect(() => {
    client.getEntries({}).then(response => {
      // const autos = response.items;
      setAutos(response.items);
    });

    // const autoData = formatData(autos);

    // autoData.map(auto => autoInfo.push(auto));
    //   console.log(autoInfo);
  }, []);

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
