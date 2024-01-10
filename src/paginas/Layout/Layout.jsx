import { Outlet } from "react-router-dom";
import NavBar from "../../componentes/NavBar/NavBar";
import Footer from "../../componentes/Footer/Footer";
import BotonWhatsapp from "../../componentes/BotonWhatsapp/BotonWhatsapp";

function Layout() {
  return (
    <div>
      <NavBar />
      <BotonWhatsapp />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
