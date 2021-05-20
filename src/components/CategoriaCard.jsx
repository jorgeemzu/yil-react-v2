export default function CategoriaCard({ categoria }) {
  return (
    <div className="cat-card">
      <img className="cat-card-img" src={categoria.imagen} alt="" />
      <div className="cat-overlay">
        <h1 className="cat-titulo">{categoria.titulo}</h1>
      </div>
    </div>
  );
}
