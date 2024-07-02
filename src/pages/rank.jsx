import React from "react";
import Accent from "../components/accent";
import Header from "../components/header";
import trophyPNG from "../assets/icons/trophy.png";
import susiSVG from "../assets/users/susi.svg";
import RankCard from "../components/rankCard";
import LeaderBoard from "../components/leaderBoard";

const Rank = () => {
  return (
    <div className="w-full h-full relative overflow-y-auto no-scrollbar">
      <div className="absolute top-0 left-0 w-full h-fit flex justify-center">
        <Accent width={"300px"} top={"-26px"} />
      </div>
      <div className="relative z-10 w-full h-full">
        <Header />
        <div className="w-full h-fit px-3 py-10">
          <div className="w-full h-fit rounded-3xl rounded-br-none bg-white relative py-10 px-3 flex flex-col items-center">
            <div className="absolute w-full left-0 top-0 flex justify-center items-center">
              <div className="absolute w-24 aspect-square rounded-full overflow-hidden bg-violet-300 -translate-y-2 flex items-end justify-center">
                <img
                  src={susiSVG}
                  alt="user"
                  className="w-3/4 h-fit object-contain translate-y-1"
                />
              </div>
            </div>
            <h1 className="text-xl font-semibold my-4">
              Susi Similikiti <span className="text-secondary">(950 Poin)</span>
            </h1>
            <div className="w-full h-fit text-center my-5">
              <div className="mx-auto w-[100px] h-fit">
                <img src={trophyPNG} alt="trophy" className="w-full h-fit" />
              </div>
              <h2 className="text-xl font-bold">Ranking 3</h2>
            </div>
            <div className="text-center text-lg font-semibold leading-6">
              <p>Selamat Anda</p>
              <p className="text-primary">Diterima Kerja</p>
            </div>
          </div>
        </div>
        <div className="w-full py-3 px-8 bg-yellow-400 text-lg">
          <p>
            <strong>Info:</strong> Anda akan segera dihubungi untuk kontrak &
            bertemu client
          </p>
        </div>
        <LeaderBoard />
      </div>
    </div>
  );
};

export default Rank;
