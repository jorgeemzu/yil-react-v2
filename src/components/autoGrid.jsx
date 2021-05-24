import { Link } from "react-router-dom";
import AutoCard from "./autoCard";
import nissan from "../imgs/autos/nissan.jpeg";
import kia from "../imgs/autos/kia-soul.jpeg";
import toyota from "../imgs/autos/toyota-4Runner.jpeg";

export default function AutoGrid() {
  const autos = [
    {
      id: 1,
      img: kia,
      titulo: "Kia Soul 2020",
      precio: "$15,000",
    },

    {
      id: 2,
      img: nissan,
      titulo: "Nissan 2015",
      precio: "$5,000",
    },

    {
      id: 3,
      img: toyota,
      titulo: "Toyota 4Runner Sport 2004",
      precio: "$10,999",
    },
  ];

  return (
    <section className="destacados">
      <h2>Autos Destacados</h2>
      <div className="destacadosGrid">
        {autos.map(auto => {
          console.log(auto.img);
          return (
            <AutoCard
              titulo={auto.titulo}
              img={auto.img}
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
