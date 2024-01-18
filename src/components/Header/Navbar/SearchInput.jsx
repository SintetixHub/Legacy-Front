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
        className="p-1 bg-transparent text-white text-lg rounded-md  border border-gray-500"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
      </button>
    </form>
  );
}