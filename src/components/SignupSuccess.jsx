export default function SignupSuccess() {
  return (
    <div className="mx-auto bg-zinc-700 gap-3 w-96 h-96 p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
      <svg
        width="115px"
        height="115px"
        viewBox="0 0 133 133"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="check-group"
          stroke="none"
          //   stroke-width="1"
          fill="none"
          //   fill-rule="evenodd"
        >
          <circle
            id="filled-circle"
            fill="#07b481"
            cx="66.5"
            cy="66.5"
            r="54.5"
            className=" fill-sky-500"
          />
          <circle
            id="white-circle"
            fill="#FFFFFF"
            cx="66.5"
            cy="66.5"
            r="55.5"
          />
          <circle
            id="outline"
            stroke="#07b481"
            // stroke-width="4"
            cx="66.5"
            cy="66.5"
            r="54.5"
            className=" stroke-sky-500"
          />
          <polyline
            id="check"
            stroke="#FFFFFF"
            // stroke-width="5.5"
            points="41 70 56 85 92 49"
            className=" stroke-[5.5]"
          />
        </g>
      </svg>
      <span>¡Registro exitoso!</span>
    </div>
  );
}
