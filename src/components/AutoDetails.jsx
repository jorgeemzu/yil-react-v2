import { useState } from "react";
import { useParams } from "react-router";
import autos from "./util/autos.json";

export default function AutoDetails() {
  const { carId } = useParams();
  const found = autos.find(carro => carro.id == carId);

  console.log(found);
  return (
    <div>
      <h1>Details {carId} </h1>
      <h2>Marca {found.marca}</h2>
      <h2>precio {found.precio}</h2>
    </div>
  );
}
