import React from "react";
import Crown from "./crown";
import susiSVG from "../assets/users/susi.svg";

const RankCard = ({ no, name, points, image, rank }) => {
  return (
    <div className="w-full h-fit p-4 mb-2 rounded-3xl bg-white flex gap-4 items-center">
      <div className="w-7 h-7 rounded-full border-2 border-neutral-300 flex items-center justify-center text-neutral-400">
        <p>{no ? no : 0 }</p>
      </div>
      <div className="w-16 h-16 rounded-full overflow-hidden bg-violet-300 flex justify-center items-end">
        <img
          src={image ? image : susiSVG}
          alt=""
          className="w-[90%] h-[90%] object-contain translate-y-1"
        />
      </div>
      <div className="flex-1 h-fit">
        <h4 className="text-lg font-semibold mb-1">{name ? name : "Susi" }</h4>
        <p className="text-neutral-500">{points ? points : 0} points</p>
      </div>
      <div className="w-fit h-fit">
        {rank == 1 ? <Crown /> : rank == 2 ? <Crown rank={2} /> : rank == 3 ? <Crown rank={3} /> : null}
      </div>
    </div>
  );
};

export default RankCard;
