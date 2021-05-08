import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link className="logo" to="/">
            <img src={logo} alt="Yil Martins Logo" />
          </Link>
          <div onClick={toggleNav} className="nav-toggle"></div>
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
        </ul>
      </div>
    </nav>
  );
}
