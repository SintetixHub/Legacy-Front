import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HeroSection from "./Header/HeroSection";
import Blogs from "../pages/Blogs";
import Tecnologias from "../pages/Tecnologias";
import SobreNosotros from "../pages/SobreNosotros";
import LoginForm from "../pages/LoginForm"; // Importa el formulario de inicio de sesión
import RegisterForm from "../pages/RegisterForm";
import Navbar from "./Header/Navbar/Navbar";
 
const App = () => {
  return (
    <div className="bg-[#1e1e1e] min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/auth/signup" element={<RegisterForm />} />
        <Route path="/auth/login" element={<LoginForm />} /> {/* Nueva ruta para el formulario de inicio de sesión */}
      </Routes>
    </div>
  );
};

export default App;