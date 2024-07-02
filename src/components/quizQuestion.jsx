import React, { useState } from "react";

const QuizQuestion = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      <h2 className="text-lg mb-4">{question}</h2>
      <form className="flex flex-col gap-5">
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <div className="w-full flex items-center gap-2">
                <div className="w-5 h-5">
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    disabled={isSubmitted}
                    className="w-full aspect-square rounded-full"
                  />
                </div>
                <div className="flex-1 h-fit">
                  <p>{option}</p>
                </div>
              </div>
            </label>
          </div>
        ))}
      </form>
      {/* <button
        onClick={handleSubmit}
        disabled={isSubmitted || selectedOption === null}
      >
        Submit
      </button> */}
      {isSubmitted && (
        <div>
          {selectedOption === correctAnswer ? (
            <p style={{ color: "green" }}>Correct!</p>
          ) : (
            <p style={{ color: "red" }}>
              Incorrect! The correct answer is {correctAnswer}.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;

// const App = () => {
//   const question = 'What is the capital of France?';
//   const options = ['Berlin', 'Madrid', 'Paris', 'Rome'];
//   const correctAnswer = 'Paris';

//   return (
//     <div>
//       <QuizQuestion question={question} options={options} correctAnswer={correctAnswer} />
//     </div>
//   );
// };

// export default App;
