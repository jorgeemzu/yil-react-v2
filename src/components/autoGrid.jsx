import { Link } from "react-router-dom";
import AutoCard from "./autoCard";
import autos from "./util/autos.json";

export default function AutoGrid() {
  console.log(autos);
  return (
    <div>
      {autos.map(auto => {
        return (
          <Link to={`/auto/${auto.id}`}>
            <AutoCard key={auto.id} nombre={auto.nombre} />
          </Link>
        );
      })}
    </div>
  );
}
