import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Tecnologias from "../pages/Tecnologias";
import SobreNosotros from "../pages/SobreNosotros";
import Signup from "../pages/Signup";
import Navbar from "./Header/Navbar/Navbar";
import Login from "../pages/Login";
import Comunidad from "../pages/Comunidad";

const App = () => {
  return (
    <div className="bg-[#1e1e1e] min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />{" "}
        {/* Nueva ruta para el formulario de inicio de sesión */}
      </Routes>
    </div>
  );
};

export default App;
