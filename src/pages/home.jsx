import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Level, { LevelLock } from "../components/level";
import susiSVG from "../assets/users/susi.svg";
import timeSVG from "../assets/icons/time.svg"
import Accent from "../components/accent";

const Home = () => {
  const [isLevel, setIsLevel] = useState([]);
  useEffect(() => {
    const Levels = [
      { level: 1, status: true },
      { level: 2, status: false },
      { level: 3, status: false },
      { level: 4, status: false },
    ];
    setIsLevel(Levels);
  }, []);

  return (
    <div className="relative">
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
              Susi Similikiti <span className="text-secondary">(0 Poin)</span>
            </h1>
            <div className="w-full h-fit p-5 rounded-2xl bg-red-200 text-red-900">
              <p className="text-xs">Level 1</p>
              <div className="flex items-center gap-1">
                <div className="w-3.5 h-3.5">
                  <img src={timeSVG} alt="" className="w-full h-fit" />
                </div>
                <p className="font-semibold">Berakhir dalam 23:20:00</p>
              </div>
            </div>
            <div className="w-full h-fit flex flex-wrap gap-x-16 gap-y-5 items-center justify-center p-5 pb-0">
              {isLevel.map((level, i) =>
                level.status ? (
                  <Level int={level.level} level={level.level} key={i} />
                ) : (
                  <LevelLock int={level.level} key={i} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
