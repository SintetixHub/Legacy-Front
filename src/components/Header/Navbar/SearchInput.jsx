export default function SearchInput() {
  const handleSuhmit = () => {};
  return (
    <form onSubmit={handleSuhmit} className="relative">
      <input
        type="text"
        name=""
        placeholder="buscar..."
        className="p-1 bg-zinc-700 rounded-lg"
      />
      <button className="absolute right-2 top-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
}
