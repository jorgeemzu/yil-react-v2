import logo from "../imgs/logo.png";
import location from "../imgs/marker.svg";
import instagram from "../imgs/instagram.png";
import sobre from "../imgs/envelope.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="info-container">
          <img className="footer-logo" src={logo} alt="Yil Martins Logo" />
          <div className="info">
            <a
              className="info-item info-location"
              href="https://www.google.com/search?q=jj+auto+sales+bayamon&biw=1440&bih=761&tbm=lcl&sxsrf=ALeKk00OT7mjwO2EQLCSdEOew4vNoDQg1g%3A1621286487502&ei=V96iYKn0HaaZ_QbKjI2wAg&oq=jj+auto+sales+ba&gs_l=psy-ab.3.0.0j0i22i30k1l9.9096.9552.0.10845.3.3.0.0.0.0.187.534.0j3.3.0....0...1c.1.64.psy-ab..0.3.534....0.4ScdaDI8-Zk#rlfi=hd:;si:15871089068899532241;mv:[[18.398348877319027,-66.16314752779462],[18.39798892268097,-66.16352687220538]]"
              target="_blank"
              rel="noreferrer"
            >
              <img src={location} alt="GPS Icon" />
              <p>951 Carr Puerto Rico 2, Bayamón, 00961, Puerto Rico</p>
            </a>

            <a
              className="info-item info-instagram"
              href="https://www.instagram.com/yilmartins/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram Icon" />
              <p>@yilmartins</p>
            </a>

            <a
              className="info-item info-email"
              href="https://www.instagram.com/yilmartins/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={sobre} alt="Instagram Icon" />
              <p>yiljjautosales@gmail.com</p>
            </a>
          </div>
        </div>

        <div className="footer-menu">
          <Link className="footer-nav-item" to="/">
            Inicio
          </Link>
          <Link className="footer-nav-item" to="/autos">
            Autos
          </Link>
          <Link className="footer-nav-item" to="/contacto">
            Contacto
          </Link>
        </div>

        <div className="footer-cat-container">
          <h3>Categorias</h3>
          <Link className="footer-cat" to="/categorias/pickup">
            Pickup
          </Link>
          <Link className="footer-cat" to="/categorias/sedan">
            Sedan
          </Link>
          <Link className="footer-cat" to="/categorias/suv">
            SUV
          </Link>
          <Link className="footer-cat" to="/categorias/HatchBack">
            HatchBack
          </Link>
        </div>
      </div>
    </footer>
  );
}
