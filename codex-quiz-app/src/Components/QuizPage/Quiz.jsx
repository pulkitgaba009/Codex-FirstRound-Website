import { useState } from "react";
import Layout from "../Layout";
import QuizQuestionsList from "./QuizQuestionList";
import QuizQuestionView from "./QuizQuestionView";
import formData from "./formData";
import { motion } from "framer-motion";

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(formData[0]);

  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({}); 

  const handleAnswer = (id, value) => {
    const correctAnswer = formData.find((q) => q.id === id).answer;

    setAnswers((prevAnswers) => {
      const prevValue = prevAnswers[id];
      const wasCorrect = prevValue === correctAnswer;
      const nowCorrect = value === correctAnswer;

      // only update score when correctness changed
      if (wasCorrect !== nowCorrect) {
        setScore((prevScore) => {
          const next = prevScore + (nowCorrect ? 1 : -1);
          return Math.min(formData.length, Math.max(0, next));
        });
      }

      return { ...prevAnswers, [id]: value };
    });
  };

  return (
    <Layout>
      {/* Top Nav */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-16 sm:h-20
        bg-black/60 backdrop-blur-md 
        flex items-center justify-between 
        px-4 sm:px-8 z-50"
      >
        <div className="bg-white h-12 py-2 px-10 rounded-full flex items-center">
          <img src="/UUlogo.png" className="w-full h-full object-contain" />
        </div>

        <h1 className="hidden sm:block font-[Orbitron] text-white font-bold 
          text-base sm:text-xl md:text-2xl lg:text-3xl 
          [text-shadow:_0_0_10px_#3eeb91] text-center">
          UTTARANCHAL SCHOOL OF COMPUTING SCIENCES
        </h1>

        <div className="h-12 w-12 sm:h-16 sm:w-16 p-1 
          border-2 border-indigo-400 rounded-full 
          shadow-[0_0_15px_rgba(99,102,241,0.7)] animate-pulse">
          <img src="/IT-utsav.png" className="w-full h-full object-cover rounded-full" />
        </div>
      </motion.div>

      {/* Main Layout + one-time motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="overflow-x-hidden mt-10"
      >
        <div className="w-full px-16 h-[87%] grid grid-cols-12 grid-rows-12 gap-4 mt-18">
          
          {/* Left Panel */}
          <div className="subDivs col-start-1 col-end-9 row-span-12">
            <h1 className="authHeading">Question View</h1>
            <hr className="horizontalLine mt-2" />

            <QuizQuestionView
              question={activeQuestion}
              onAnswer={handleAnswer}
              selectedAnswer={answers[activeQuestion?.id]}
            />

            <div className="mt-4 text-lg font-semibold text-white">
              Score: {score} / {formData.length}
            </div>
          </div>

          {/* Right Panel */}
          <div className="subDivs col-start-9 col-end-13 row-span-12">
            <h1 className="authHeading pb-2">Questions</h1>
            <hr className="horizontalLine" />

            <QuizQuestionsList
              questions={formData}
              activeId={activeQuestion.id}
              onSelect={setActiveQuestion}
              answers={answers}
            />
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Quiz;
