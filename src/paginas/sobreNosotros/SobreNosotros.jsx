import sobreNosotrosImg from "../../assets/recursos/imagenes/sobreNosotros.jpg";
import "./sobreNosotros.css";
function SobreNosotros() {
  return (
    <section className="container m-0 p-0">
      <article className="sobreNosotrosEncabezado">
        <img src={sobreNosotrosImg} />
        <div className="">
          <h1 className="sobreNosotrosTitulo">Las tertulias ambientaciones</h1>
          <p className="sobreNosotrosTexto">
            ¡Hola! Somos <b>Mara & Isa.</b>
            <br />
            Nos dedicamos a más que decorar espacios; creamos experiencias
            emotivas, diseñamos atmósferas cautivadoras y convertimos cada
            ocasión en un recuerdo inolvidable. En Las Tertulias entendemos que
            cada evento es único, es una historia que merece ser contada con
            autenticidad y belleza. Por eso, nos comprometemos a trabajar junto
            a vos para plasmar tus deseos y convertirlos en una ambientación que
            refleje tu estilo y personalidad. <br />
            Desde los detalles más sutiles hasta la ambientación completa, nos
            esforzamos por hacer brillar cada rincón, convirtiendo tu visión en
            una realidad sorprendente y encantadora. En Las Tertulias
            Ambientaciones, no solo creamos decoraciones, creamos momentos
            memorables. Confiá en nosotras para transformar tus ocasiones
            especiales en vivencias visuales cautivadoras. Porque aquí, en Las
            Tertulias, hacemos realidad tus sueños con pasión y dedicación.
          </p>
        </div>
      </article>
      <h3 className="ps-4 fs-2">Preguntas frecuentes</h3>
      <div>
        <div
          className="accordion accordion-flush z-2 acordionContenedor "
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <b>¿Qué eventos realizan?</b>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ">
                Realizamos eventos en general: casamientos, cumpleaños,
                cumpleaños de XV, eventos para empresas.
              </div>
            </div>
          </div>
          <div className="accordion-item acordion">
            <h2 className="accordion-header">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <b>¿Qué incluye el servicio?</b>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ">
                <b>Dentro de nuestros servicios se encuentra:</b>
                <br />
                Sección de fotografico y foto libro.
                <br />
                Armado y decoración de la mesa de invitados y mesa principal.{" "}
                <br />
                Centro de mesa. <br />
                Ambientación y decoración de la recepción.
              </div>
            </div>
          </div>
          <div className="accordion-item acordion">
            <h2 className="accordion-header">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <b>¿Cómo se puede contratar el servicio?</b>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse "
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ">
                Para contratar el servicio primero contactate con nosotros
                contandonos tu idea y el evento a realizar, luego coordinaremos
                una reunión con una propuesta y un presupuesto donde podrás las
                modificaciones que requieras.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
