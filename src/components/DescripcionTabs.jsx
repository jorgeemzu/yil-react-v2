import { useState } from "react";

export default function DescripcionTabs(props) {
  const { descripcion } = props;
  const [autoIndex, setDescripcion] = useState(0);

  //   function toggleTab(index) {
  //     setDescripcion(index);

  //   }
  return (
    <section className="sec-descripcion">
      <div className="container">
        <div className="tab-btn-container">
          <button
            className={autoIndex === 0 ? "tab-btn tab-active" : "tab-btn"}
            onClick={() => setDescripcion(0)}
            // onClick={() => setDescripcion(descripcion[0])}
          >
            Descripcion
          </button>

          <button
            className={autoIndex === 1 ? "tab-btn tab-active" : "tab-btn"}
            onClick={() => setDescripcion(1)}
            // onClick={() => setDescripcion(descripcion[1])}
          >
            Interior
          </button>

          <button
            className={autoIndex === 2 ? "tab-btn tab-active" : "tab-btn"}
            onClick={() => setDescripcion(2)}
            // onClick={() => setDescripcion(descripcion[2])}
          >
            Exterior
          </button>
        </div>

        <div className="descripcion-container">{descripcion[autoIndex]}</div>
      </div>
    </section>
  );
}
