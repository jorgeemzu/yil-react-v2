import { Link } from "react-router-dom";
import BG from "../imgs/BG.png";

export default function Hero() {
  return (
    <div className="hero__bg">
      <div className="overlay">
        <div className="container hero__container">
          <h1>
            EL MEJOR FINANCIAMIENTO <strong>SIN IMPORTAR TU CREDITO</strong>{" "}
          </h1>
          <div className="hero_btns">
            <Link to="/autos">Autos</Link>
            <Link to="/contacto">Financiamiento</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
