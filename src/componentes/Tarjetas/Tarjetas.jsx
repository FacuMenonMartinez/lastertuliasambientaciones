import './tarjetas.css';
function Tarjetas({tituloTarjeta, textoTarjeta, imagenTarjeta}){
    return(
        <div className="card mt-3 tarjeta">
        <img src={imagenTarjeta} className="card-img-top imagenTarjeta" alt="..."/>
         <div className="card-body">
            <h5 className="card-title">{tituloTarjeta}</h5>
            <p className="card-text">{textoTarjeta}</p>
          </div>
        </div>
    )
}

export default Tarjetas