import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

export default function Navbar() {
  return (
    <nav className="max-w-5xl m-auto border-b-2 border-zinc-500">
      <section className="flex justify-between items-center py-4">
        <span className="text-4xl ml-[44%] bg-clip-text text-twhite">Sintetix</span>        
        <div className="flex gap-2 m-1">
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
        <div className="relative">
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
            </button>
          </span>
          <input placeholder="Buscar..." className="p-1  text-md rounded-lg"/>
        </div>
      </section>
    </nav>
  );
}

