import logoWhatsapp from "../../assets/recursos/imagenes/logoWhatsapp.png";
function BotonWhatsapp() {
  return (
      <a className="position-fixed bottom-0 end-0 z-3 p-4"
        href="https://walink.co/ccad8e"
      >
        <img className="img-fluid w-25 float-end " alt="Logo de la aplicación whatsapp" src={logoWhatsapp} />
      </a>
  );
}

export default BotonWhatsapp;
