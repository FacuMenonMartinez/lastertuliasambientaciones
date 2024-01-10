import ContenedorTarjetas from "../../componentes/ContenedorTarjetas/ContenedorTarjetas";
import "./home.css";

function Home() {
  return (
    <section>
      <div className=" contenedorEncabezado">
        <h2 className="homeTitulo">Hacemos tus sueños realidad</h2>
      </div>
      <ContenedorTarjetas />
    </section>
  );
}

export default Home;
