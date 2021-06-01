import { useParams } from "react-router";
import NavBar from "./NavBar";
import PageHeader from "./PageHeader";
import Location from "./Location";
// import autos from "./util/autos.json";
import info from "./util/AutoData";
import DetailsInfo from "./DetailsInfo";
import DescripcionTabs from "./DescripcionTabs";

export default function AutoDetails() {
  const { carId } = useParams();
  const found = info.find(carro => carro.id == carId);

  const { nombre, precio, descripcion, interior, exterior } = found;
  const portada = found.portada.fields.file.url;
  const colorAuto = found.color.content[0].content[0].value;
  const trans = found.transmision.content[0].content[0].value;
  const motorAuto = found.motor.content[0].content[0].value;

  return (
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
      />
      <DescripcionTabs descripcion={[descripcion, interior, exterior]} />
      <Location />
    </div>
  );
}
