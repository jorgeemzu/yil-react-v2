import { Link } from "react-router-dom";

export default function DetailsInfo(props) {
  const { nombre, precio, color, motor, transmision, images } = props;

  return (
    <section className="container">
      <div className="details-grid">
        <div className="grid-left">
          <div className="grid-left-text">
            <h2>{nombre}</h2>
            <strong className="details-precio">${precio}</strong>
          </div>
          <img src={images} alt="" />
        </div>

        <div className="grid-right">
          <h4>Detalles</h4>
          <p>
            <strong className="details-strong">Color: </strong>
            {color}
          </p>
          <p>
            <strong className="details-strong">Motor: </strong>
            {motor}
          </p>
          <p>
            <strong className="details-strong">Transmision: </strong>
            {transmision}
          </p>

          <Link to="/contacto" className="btn-red texto-negro">
            ¿Necesitas más informacion?
          </Link>
        </div>
      </div>
    </section>
  );
}
