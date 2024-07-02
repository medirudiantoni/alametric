import React, { useEffect, useState } from "react";
import RankCard from "./rankCard";

const LeaderBoard = () => {
  const [ isUsers, setUsers ] = useState([]);
  useEffect(() => {
    fetch("https://alametric-chi.vercel.app/data/users/users.json").then(res => res.json()).then(res => setUsers(res))
  }, [isUsers]);
  const rankUsers = isUsers.sort((a, b) => b.points - a.points);
  return (
    <div className="w-full h-96 pt-10 pb-52 px-4">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-3xl font-semibold text-white">
          Leaderboard - Final
        </h2>
        <div className="flex pt-2 items-end gap-1">
          <div className="w-4 h-4 rounded-full border-2"></div>
          <div className="w-4 h-4 rounded-full border-2"></div>
          <div className="w-4 h-4 rounded-full border-2"></div>
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
      </div>
      {rankUsers.map((item, i) => (
        <RankCard no={i+1} name={item.name} image={item.image} points={item.points} rank={i+1} key={i+1} />
      ))}
      <div className="w-full h-40"></div>
    </div>
  );
};

export default LeaderBoard;
