import React from "react";

const Crown = ({ rank }) => {
  return (
    <div className="w-fit h-fit relative flex items-center justify-center">
      <svg
        width="40"
        height="47"
        viewBox="0 0 40 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0L40 11.547V34.641L20 46.188L0 34.641V11.547L20 0Z"
          fill={rank == 2 ? "#747383" : rank == 3 ? "#FFCCD5" : "#FFD54B"}
        />
      </svg>
      <div className="w-5 h-fit absolute -translate-x-[2px]">
        <svg
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.4475 7.5907C15.9384 8.04617 15.1326 7.86848 14.8623 7.24113L12.3974 1.52026C12.0503 0.714519 10.9078 0.714518 10.5607 1.52026L8.10744 7.21405C7.83714 7.84139 7.03137 8.01909 6.52228 7.56361L2.63431 4.08514C1.91245 3.43931 0.785856 4.09433 0.990005 5.04117L3.05307 14.6096C3.15236 15.0701 3.55954 15.3988 4.03061 15.3988H15.2799L18.9694 15.3988C19.4405 15.3988 19.8477 15.0701 19.9469 14.6096L22.01 5.04117C22.2142 4.09433 21.0876 3.4393 20.3657 4.08513L16.4475 7.5907Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Crown;
