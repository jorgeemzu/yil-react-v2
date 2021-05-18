import logo from "../imgs/logo.png";
import instagram from "../imgs/instagram.png";
import location from "../imgs/location.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar({ clase } = "") {
  const [isOpen, setOpen] = useState(false);
  const navFondo = clase;
  console.log(navFondo);
  const toggleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <nav className={`navbar ${clase}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Link className="logo" to="/">
            <img src={logo} alt="Yil Martins Logo" />
          </Link>
          <div onClick={toggleNav} className="nav-toggle"></div>

          <ul className="desktop-nav">
            <Link className="desktop-link-item" to="/">
              Inicio
            </Link>
            <Link className="desktop-link-item" to="/autos">
              Autos
            </Link>
            <Link className="desktop-link-item" to="/contacto">
              Contacto
            </Link>
          </ul>

          <div className="nav-social social-dektop">
            <a
              className="nav-social-item"
              href="https://www.instagram.com/yilmartins/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram Icon" />
            </a>

            <a
              className="nav-social-item"
              href="https://www.google.com/search?q=jj+auto+sales+bayamon&biw=1440&bih=761&tbm=lcl&sxsrf=ALeKk00OT7mjwO2EQLCSdEOew4vNoDQg1g%3A1621286487502&ei=V96iYKn0HaaZ_QbKjI2wAg&oq=jj+auto+sales+ba&gs_l=psy-ab.3.0.0j0i22i30k1l9.9096.9552.0.10845.3.3.0.0.0.0.187.534.0j3.3.0....0...1c.1.64.psy-ab..0.3.534....0.4ScdaDI8-Zk#rlfi=hd:;si:15871089068899532241;mv:[[18.398348877319027,-66.16314752779462],[18.39798892268097,-66.16352687220538]]"
              target="_blank"
              rel="noreferrer"
            >
              <img src={location} alt="Instagram Icon" />
            </a>
          </div>
        </div>

        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <Link className="nav-link-item" to="/">
            Inicio
          </Link>
          <Link className="nav-link-item" to="/autos">
            Autos
          </Link>
          <Link className="nav-link-item" to="/contacto">
            Contacto
          </Link>

          <div className="mobile-social">
            <a
              className="nav-social-mobile"
              href="https://www.instagram.com/yilmartins/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram Icon" />
            </a>

            <a
              className="nav-social-mobile"
              href="https://www.google.com/search?q=jj+auto+sales+bayamon&biw=1440&bih=761&tbm=lcl&sxsrf=ALeKk00OT7mjwO2EQLCSdEOew4vNoDQg1g%3A1621286487502&ei=V96iYKn0HaaZ_QbKjI2wAg&oq=jj+auto+sales+ba&gs_l=psy-ab.3.0.0j0i22i30k1l9.9096.9552.0.10845.3.3.0.0.0.0.187.534.0j3.3.0....0...1c.1.64.psy-ab..0.3.534....0.4ScdaDI8-Zk#rlfi=hd:;si:15871089068899532241;mv:[[18.398348877319027,-66.16314752779462],[18.39798892268097,-66.16352687220538]]"
              target="_blank"
              rel="noreferrer"
            >
              <img src={location} alt="Instagram Icon" />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
}
