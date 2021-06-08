import client from "../components/util/Contentful";
import { useEffect, useState } from "react";
import AutoCard from "./autoCard";

export default function FilterAutos({ catAutos }) {
  const [autoInfo, setAutos] = useState([]);
  const [searchAuto, setSearch] = useState("");

  // useEffect(() => {
  //   client.getEntries({}).then(response => {
  //     setAutos(response.items);
  //   });
  // }, []);

  useEffect(() => setAutos(catAutos), []);

  console.log(autoInfo);

  return (
    <section className="destacados">
      <input
        className="search-bar"
        type="text"
        placeholder="Busca por Marca, Modelo o Año"
        onChange={event => {
          setSearch(event.target.value);
          console.log(searchAuto);
        }}
      />
      <div className="destacadosGrid">
        {autoInfo
          .filter(value => {
            if (searchAuto === "") {
              return value;
            } else if (
              value.fields.nombre
                .toLowerCase()
                .includes(searchAuto.toLocaleLowerCase())
            ) {
              return value;
            }
          })
          .map(auto => {
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
    </section>
  );
}
