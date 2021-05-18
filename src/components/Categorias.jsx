import hatchback from "../imgs/hatchback.jpg";
import suv from "../imgs/suv.jpg";
import sedan from "../imgs/sedan.jpg";
import pickup from "../imgs/pickup.jpg";
import CategoriaCard from "./CategoriaCard";
import { Link } from "react-router-dom";

export default function Categorias() {
  const catInfo = [
    {
      imagen: hatchback,
      titulo: "Hatchback",
      cat: "hatchback",
    },

    {
      imagen: pickup,
      titulo: "PickUp",
      cat: "pickup",
    },

    {
      imagen: suv,
      titulo: "SUV",
      cat: "suv",
    },

    {
      imagen: sedan,
      titulo: "Sedan",
      cat: "sedan",
    },
  ];

  return (
    <section className="categorias">
      <h2>¿Qué estas buscando?</h2>
      <div className="cat-flex">
        {catInfo.map(categoria => (
          <Link className="cat-link" to={`/categorias/${categoria.cat}`}>
            <CategoriaCard categoria={categoria} />
          </Link>
        ))}
      </div>
    </section>
  );
}
