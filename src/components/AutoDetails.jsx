import { useParams } from "react-router";
import NavBar from "./NavBar";
import PageHeader from "./PageHeader";
import Location from "./Location";
import DetailsInfo from "./DetailsInfo";
import DescripcionTabs from "./DescripcionTabs";
import AutoData from "./util/AutoData";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function AutoDetails() {
  const { carId } = useParams();
  const [autoInfo, setAutos] = useState();

  useEffect(function () {
    AutoData().then(autos => {
      setAutos(autos);
    });
  }, []);

  if (autoInfo == undefined) {
    return (
      <>
        <NavBar clase="black-bg" />
        <PageHeader titulo="Detalles del Auto" />
        <Spinner />;
      </>
    );
  } else {
    const found = autoInfo.find(carro => carro.sys.id == carId);

    const { nombre, precio, interior, exterior, descripcion } = found.fields;

    const portada = found.fields.portada.fields.file.url;
    const colorAuto = found.fields.color.content[0].content[0].value;
    const trans = found.fields.transmision.content[0].content[0].value;
    const motorAuto = found.fields.motor.content[0].content[0].value;
    const imgsCarrusel = found.fields.images;
    return (
      <>
        <div>
          <NavBar clase="black-bg" />
          <PageHeader titulo="Detalles del Auto" />

          <DetailsInfo
            nombre={nombre}
            precio={precio}
            images={portada}
            color={colorAuto}
            motor={motorAuto}
            transmision={trans}
            carrusel={imgsCarrusel}
          />
          <DescripcionTabs descripcion={[descripcion, interior, exterior]} />
          <Location />
        </div>
      </>
    );
  }
}
