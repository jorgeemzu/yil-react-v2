import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <div className="hero__bg">
      <NavBar />
      <div className="overlay">
        <div className="container hero-container">
          <h1 className="hero-text">
            EL MEJOR FINANCIAMIENTO <strong>SIN IMPORTAR TU CREDITO</strong>{" "}
          </h1>
          <div className="hero_btns">
            <Link className="btn-red" to="/autos">
              Autos
            </Link>
            <Link className="btn-transparent" to="/contacto">
              Financiamiento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
