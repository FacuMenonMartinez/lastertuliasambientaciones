import logoInstagram from "../assets/recursos/imagenes/logoInstagram.png";
import logoGmail from "../assets/recursos/imagenes/logoGmail.png";
import logoTertulias from "../assets/recursos/imagenes/tertuliasLogo.png"
import "./contacto.css";

function Contacto() {
  return (
    <section className="contactoSeccion p-3 ">
      <section className="mb-3 d-flex flex-column-reverse justify-content-between flex-md-row">
      <article className="contactoRedes d-flex flex-column justify-content-evenly">
        <div>
          <h3 className="fs-3">Seguinos en Instagram</h3>
          <a
            className="enlaceInstagram d-flex align-items-center" href="https://www.instagram.com/lastertuliasambientaciones/">
            <img className="contactoInstagram me-2" src={logoInstagram} />
          </a>
        </div>
        <div>
          <h3 className="fs-3 pt-4">Envianos un mail</h3>
          <div className="d-flex align-items-center">
            <img className="contactoEmail me-2" src={logoGmail} />
            <p className="direccionEmail">maray_45@hotmail.com</p>
          </div>
        </div>
      </article>
      <img className="imagenContacto align-self-center" src={logoTertulias} alt="Logo de las tertulias"/>
      </section>


      <div className="contactoMapa">
        <h3>Nos encontramos en San Pedro, Buenos Aires</h3>
        <iframe
          className="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89332.33372886566!2d-59.72341418786131!3d-33.68739553429479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba22ed0eb1a55f%3A0xe5f2bb57c8ee993a!2sSan%20Pedro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1704732821321!5m2!1ses!2sar"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacto;
