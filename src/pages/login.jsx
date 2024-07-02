import React, { useEffect, useState } from "react";
import Accent from "../components/accent";
import alaSVG from "../assets/alametric.svg";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const BgAccent = () => (
  <div className="w-full h-full absolute">
    <Accent width={"150px"} top={"-50px"} left={"72%"} />
    <Accent width={"280px"} top={"30px"} left={"-60px"} />
    <Accent width={"120px"} top={"40%"} left={"52%"} />
  </div>
);

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://alametric-chi.vercel.app/data/users/users.json");
      if (!response.ok) {
        throw new Error("no response");
      }
      const users = await response.json();

      // console.log('user: ', users.find((u) => u.password === password))

      const user = users.find((u) => u.name === name && u.password == password);

      if (user) {
        login();
        navigate("/");
      } else {
        setError("Kode atau Nama salah!");
      }
    } catch (err) {
      console.error("Failed to fetch users: ", err);
      setError("Failed to login");
    }
  };

  return (
    <div className="w-full h-full relative bg-inherit">
      <BgAccent />
      <div className="w-full h-full relative z-10 flex flex-col justify-center items-center">
        <div className="w-full h-1/2 flex items-center justify-center">
          <div className="w-[200px] h-fit">
            <img src={alaSVG} alt="" className="w-full h-fit" />
          </div>
        </div>
        <div className="w-full h-1/2 flex items-center justify-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-fit h-fit py-2 px-4 bg-white text-primary rounded-md font-medium"
          >
            Login Kandidat
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isLogin && (
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} transition={{ ease: "easeOut" }} className="absolute z-30 w-full h-fit left-0 bottom-0 rounded-t-[40px] bg-white p-8 pt-14">
            <form className="flex flex-col gap-4">
              <div className="w-full h-fit">
                <label className="font-medium" htmlFor="kode-kandidat">
                  Kode Kandidat
                </label>
                <input
                  type="text"
                  id="kode-kandidat"
                  className="py-2 px-4 my-2 w-full rounded-xl bg-slate-200"
                  placeholder="Masukkan Kode Kandidat"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full h-fit">
                <label className="font-medium" htmlFor="nama-lengkap">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama-lengkap"
                  className="py-2 px-4 my-2 w-full rounded-xl bg-slate-200"
                  placeholder="Masukkan Nama anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
                className="py-2 px-4 my-5 w-full rounded-md bg-primary text-white"
              >
                Masuk
              </button>
              {error && <p className="text-red-600 font-medium">{error}</p>}
            </form>
          </motion.div>
        )}
        {isLogin && <div onClick={() => setIsLogin(false)} className="absolute top-0 left-0 z-20 w-full h-full bg-black/10"></div>}
      </AnimatePresence>
    </div>
  );
};

export default Login;
