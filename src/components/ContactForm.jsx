export default function ContactFrom() {
  return (
    <section className="contact-section ">
      <div className="overlay-container">
        <div className="container">
          <h2>Mantente en Contacto</h2>
          <form action="">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="input-nombre" />

            <label htmlFor="email">Email</label>
            <input type="email" />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              name="mensaje"
              id="input-mensaje"
              cols="30"
              rows="10"
            ></textarea>

            <button className="btn-red">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
