import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home.jsx"
import SobreNosotros from "./paginas/SobreNosotros.jsx"
import Contacto from "./paginas/Contacto.jsx"
import Layout from "./paginas/Layout.jsx";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/sobreNosotros" element={<SobreNosotros/>}></Route>
                <Route path="/contacto" element={<Contacto/>}></Route>
             </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
