import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="bg-[#636363]">
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
