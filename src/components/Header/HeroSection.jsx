import "../styles/HeroSection.css";

const HeroSection = () => {
  const imageUrl = "/LibroHero.png";
  const divClasses = ["flex", "justify-between", "p-8", "m-8"].join(" ");

  return (
    <div className={divClasses}>
      <div className="p-8">
        <h1 className="text-6xl font-bold open-sans mb-4">
          Un nuevo blog ha nacido
        </h1>
        <div className="mt-4 mb-4">
          <span className="italic text-blue-700 open-sans m-2">
            #Tendencias
          </span>
          <span className="italic text-blue-700 open-sans">#blog</span>
        </div>
        <p className="mt-4 text-xl open-sans mb-4">
          Nuestro primer articulo esta en la web. <br /> Conoce al equipo y todo
          lo que esta detras de nuestra web.
        </p>
        <button className="mt-4 text-white font-bold py-2 px-4 rounded-full shadow-lg bg-blue-500 hover:bg-blue-700">
          Leer artículo
        </button>
      </div>
      <img
        className="w-1/2 mx-auto p-5"
        src={imageUrl}
        alt="Hero"
        style={{ width: "350px", height: "350px" }}
      />
    </div>
  );
};

export default HeroSection;
