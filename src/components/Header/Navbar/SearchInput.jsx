import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput() {
  const handleSuhmit = () => {};

  return (
    <form onSubmit={handleSuhmit} className="relative">
      <input
        type="text"
        name=""
        placeholder="Buscar..."
        className="p-1 bg-black text-white text-lg rounded-md"
      />
      <button className="absolute right-0 top-1">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
      </button>
    </form>
  );
}
