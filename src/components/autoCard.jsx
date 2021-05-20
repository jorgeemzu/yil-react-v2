import { Link } from "react-router-dom";

export default function AutoCard(props) {
  const { img, titulo, precio, id } = props;

  return (
    <div className="car-card container">
      <Link key={id} to={`/auto/detalles/${id}`}>
        <div className="car-card-img">
          <img className="card-img" src={img} alt="" />
          <div className="car-overlay">
            <h3 className="card-overlay-text">Ver Detalles</h3>
          </div>
        </div>

        <div className="card-text">
          <h2>{titulo}</h2>
          <strong>{precio}</strong>
        </div>
      </Link>
    </div>
  );
}
