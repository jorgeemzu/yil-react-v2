import { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function Carrusel(carrusel) {
  const { images } = carrusel;
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(images) || images.length <= 0) {
    return <h3>No se encontraron imagenes</h3>;
  }
  return (
    <section className="slider">
      {images.map((image, index) => {
        console.log(image);
        return (
          <div
            className={index === current ? "slide slideActive" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                className="slide"
                src={image.fields.file.url}
                alt={image.fields.title}
              ></img>
            )}
          </div>
        );
      })}
      <AiFillCaretLeft className="left-arrow" onClick={prevSlide} />
      <AiFillCaretRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
}
