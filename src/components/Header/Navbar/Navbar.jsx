import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <nav className=" max-w-5xl  m-auto border-b-2 border-zinc-400">
      <section className="flex justify-between items-center py-4">
        <span className=" text-white text-4xl ml-[44%]">Sintetix</span>
        <div>
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
          {/* <NavLink to={"/"}>Más</NavLink> */}
        </div>
        <span className="text-zinc-500">|</span>
        <SearchInput />
      </section>
    </nav>
  );
}
