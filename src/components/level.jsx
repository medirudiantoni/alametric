import React from "react";
import gembokSVG from "../assets/icons/gembok.svg";
import { Link } from "react-router-dom";

export const LevelLock = ({ int }) => (
  <div className="w-fit h-fit">
    <div className="w-[100px] aspect-square flex items-center justify-center">
      <div className="absolute w-1/5 aspect-square rounded-full border-4 border-neutral-400 bg-neutral-700 flex items-center justify-center">
        <img src={gembokSVG} alt="p" className="w-1/2 h-fit" />
      </div>
      <svg
        width="100"
        height="116"
        viewBox="0 0 100 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 0L100 28.8675V86.6025L50 115.47L0 86.6025V28.8675L50 0Z"
          fill="#747383"
        />
        <mask
          id="mask0_160_25"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="100"
          height="116"
        >
          <path
            d="M50 0L100 28.8675V86.6025L50 115.47L0 86.6025V28.8675L50 0Z"
            fill="#7C7C87"
          />
        </mask>
        <g mask="url(#mask0_160_25)">
          <rect y="53" width="100" height="100" rx="50" fill="#86868D" />
        </g>
      </svg>
    </div>
    <div className="text-center font-semibold mt-1 text-neutral-400">
      <p>Level {int}</p>
    </div>
  </div>
);

const Level = ({ int, level }) => (
  <Link to={`/level/${level}`}>
    <div className="w-fit h-fit">
      <div className="w-[100px] aspect-square flex items-center justify-center">
        <div className="absolute w-1/5 aspect-square rounded-full border-4 border-teal-400 bg-teal-300 flex items-center justify-center">
          <div className="w-1/2 aspect-square rounded-full bg-white flex items-center justify-center">
            <p className="text-teal-400 font-bold text-2xl">{int ? int : 1}</p>
          </div>
        </div>
        <svg
          width="100"
          height="116"
          viewBox="0 0 100 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0L100 28.8675V86.6025L50 115.47L0 86.6025V28.8675L50 0Z"
            fill="#86E5D1"
          />
          <mask
            id="mask0_162_42"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100"
            height="116"
          >
            <path
              d="M50 0L100 28.8675V86.6025L50 115.47L0 86.6025V28.8675L50 0Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_162_42)">
            <path
              d="M100 103C100 75.3858 77.6142 53 50 53C22.3858 53 0 75.3858 0 103C0 130.614 22.3858 153 50 153C77.6142 153 100 130.614 100 103Z"
              fill="#C6F3E9"
            />
          </g>
        </svg>
      </div>
      <div className="text-center font-semibold mt-1 text-primary">
        <p>Level {int}</p>
      </div>
    </div>
  </Link>
);

export default Level;
