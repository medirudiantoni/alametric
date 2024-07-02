import React from "react";
import QuizQuestion from "../components/quizQuestion";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Quiz = () => {
  const quizLevel = useParams();
  const navigate = useNavigate();
  // console.log(quizLevel.level);
  const question = "Jujur adalah...";
  const options = [
    "Senang melihat orang lain",
    "lurus hati atau tidak berbohong",
    "senang menolong orang lain",
    "menjaga brang titipan orang lain",
  ];
  const correctAnswer = "Paris";
  return (
    <div className="w-full h-full bg-violet-100 py-2 px-3">
      <div className="w-full h-fit rounded-xl overflow-hidden bg-white mb-5">
        <div className="w-full h-4 bg-primary"></div>
        <div className="w-full h-fit p-4 pb-6">
          <h1 className="text-2xl font-bold mb-1">Level 1</h1>
          <p className="text-red-500 font-semibold">
            * Menunjukkan Pertanyaan yang wajib diisi
          </p>
        </div>
      </div>
      <div className="w-full h-fit rounded-xl overflow-hidden bg-white mb-5">
        <div className="w-full h-fit py-2 px-4 bg-primary text-white">
          <p>1/20</p>
        </div>
        <div className="w-full h-fit p-4 pb-6">
          <QuizQuestion
            question={question}
            options={options}
            correctAnswer={correctAnswer}
            star={true}
          />
        </div>
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-5">
        <button onClick={() => navigate('/')} className="col-span-1 py-2 px-4 bg-white rounded-md shadow-md text-primary font-medium hover:bg-secondary hover:text-white active:scale-95 active:bg-primary">
          Kembali
        </button>
        <button onClick={() => navigate('/rank')} className="col-span-1 py-2 px-4 bg-white rounded-md shadow-md text-primary font-medium hover:bg-secondary hover:text-white active:scale-95 active:bg-primary">
          Berikutnya
        </button>
      </div>
    </div>
  );
};

export default Quiz;
