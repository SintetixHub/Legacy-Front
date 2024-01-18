import { NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

export default function Navbar() {
  return (
    <nav className="max-w-5xl m-auto border-b-2 border-zinc-500">
      <section className="flex justify-between items-center py-4">
        <span className="text-5xl ml-[44%] bg-clip-text text-transparent text-white">
          Sintetix
        </span>{" "}
        <div className="flex gap-2">
          <LoginButton />
          <SignupButton />
        </div>
      </section>
      <section className="flex justify-between items-center py-6 text-white">
        <div className="flex gap-6">
            
          <NavLink to={"/"} className="hover:text-zinc-300">
            Home
          </NavLink>
          <NavLink to={"/blogs"} className="hover:text-zinc-300">
            Blogs
          </NavLink>
          <NavLink to={"/tecnologias"} className="hover:text-zinc-300">
            Tecnologías
          </NavLink>
          <NavLink to={"/sobrenosotros"} className="hover:text-zinc-300">
            Sobre Nosotros
          </NavLink>
          <NavLink to={"/sobrenosotros"} className="hover:text-zinc-300">
            Comunidad
          </NavLink>
        </div>
        <span className="text-zinc-500">|</span>
        <div className="flex flex-col items-end">
          
          
          <SearchInput />
        </div>
      </section>
    </nav>
  );
}