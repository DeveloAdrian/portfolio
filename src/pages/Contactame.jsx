import "../styles/Contactame.css";

export const Contactame = () => {
  return (
    <>
      <div className="content-contact">
        <article>
          <h3>Dirección</h3>
          <span>
            Cuba, Pinar del Río, Pinar del Río, Osmani Arenado #59A entre Maceo
            y Máximo Gómez
          </span>
          <h3>Teléfono</h3>
          <span>+53 56610951</span>
          <h3>Correo</h3>
          <span>adr362004@gmail.com</span>
        </article>
        <form
          action="https://formsubmit.co/24148d9c70f0e08081eb613dfaed492d"
          method="POST">
          <input name="nombre" type="text" required="1" placeholder="Nombre" />
          <input name="email" type="email" required="1" placeholder="Email" />
          <textarea
            name="mensaje"
            required="1"
            placeholder="Mensaje"></textarea>
          <button>Enviar</button>
          <input type="hidden" name="_next" value="/"></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </>
  );
};
