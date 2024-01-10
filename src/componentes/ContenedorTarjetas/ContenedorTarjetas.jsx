import Tarjetas from "../Tarjetas/Tarjetas";
import casamientoImg from "../../assets/recursos/imagenes/casamientoFoto2.jpg";
import ambientacionImg from "../../assets/recursos/imagenes/ambientacionFoto3.jpg";
import decoracionImg from "../../assets/recursos/imagenes/decoracionFoto5.jpg";
import cumpleañosXVIIIImg from "../../assets/recursos/imagenes/cumpleañosXV.jpg";
import cumpleañosXVImg from "../../assets/recursos/imagenes/decoracionFoto3.jpg";
import "./contenedorTarjetas.css";

function ContenedorTarjetas() {
    return (
        <section className="container mt-5 mb-5 seccionTarjetas">
            <h3>Servicios</h3>
            
            <div className="container d-flex justify-content-evenly flex-wrap containerTarjetas">
            <Tarjetas
                    tituloTarjeta="Ambientaciones"
                    textoTarjeta="¡Explora mundos de fantasía en tus eventos con nuestras ambientaciones temáticas únicas! Transformamos tus celebraciones en experiencias inolvidables al sumergirte en universos temáticos cautivadores."
                    imagenTarjeta={ambientacionImg}
                />

                <Tarjetas
                    tituloTarjeta="Cumpleaños de XVIII"
                    textoTarjeta="Celebra tus dieciocho años con nuestro exclusivo servicio de ambientaciones, diseñado para reflejar tu personalidad y estilo. Desde decoraciones elegantes y sofisticadas hasta ambientes vibrantes y llenos de energía, cada detalle se cuida con esmero para hacer de tu celebración un evento único. Sumérgete en un mundo de creatividad y disfruta de un ambiente pensado especialmente para ti en esta ocasión tan especial."
                    imagenTarjeta={cumpleañosXVIIIImg}
                />
                <Tarjetas
                    tituloTarjeta="Decoraciones"
                    textoTarjeta="
                    ¡Déjanos hacer de tu evento un verdadero espectáculo con nuestro servicio de decoración excepcional! Transformamos cualquier espacio en un ambiente único y cautivador, adaptándonos a tus gustos y necesidades."
                    imagenTarjeta={decoracionImg}
                />
                <Tarjetas
                    tituloTarjeta="Cumpleaños de XV"
                    textoTarjeta="Celebra tus quince años con nosotros y sumérgete en ambientes únicos que reflejen tu estilo. Desde elegantes decoraciones hasta espacios llenos de energía, cada detalle se cuida para hacer de tu día un evento inolvidable. Con un sector especial de fotos, capturaremos momentos preciosos para que atesores recuerdos de esta ocasión tan especial."
                    imagenTarjeta={cumpleañosXVImg}
                />
                <Tarjetas
                    tituloTarjeta="Casamientos"
                    textoTarjeta="Celebra el día más especial de tu vida con nuestras ambientaciones temáticas para bodas, donde cada detalle se convierte en parte de una experiencia inolvidable. Desde románticas ceremonias hasta festivos banquetes, creamos entornos encantadores que reflejan tu amor y estilo."
                    imagenTarjeta={casamientoImg}
                />
            </div>
        </section>
    );
}

export default ContenedorTarjetas;
