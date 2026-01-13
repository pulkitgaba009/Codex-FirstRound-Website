import { useState, useContext, useEffect } from "react";
import Layout from "../Layout";
import QuizQuestionsList from "./QuizQuestionList";
import QuizQuestionView from "./QuizQuestionView";
import { motion } from "framer-motion";
import SecureQuiz from "./SecureQuiz";
import { useNavigate } from "react-router-dom";
import Countdown from "./Countdown";
import Header from "../Header";
import TeamContext from "../../Contexts/teamContext";
import axios from "axios";
import toast from "react-hot-toast";
import { Loading, RateLimiting } from "../../Helper";

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const nevigate = useNavigate();

  const { team } = useContext(TeamContext);

  // api states
  const [loading, setLoading] = useState(true);
  const [rateLimited,setRateLimited] = useState(false);
  const [questions,setQuestions] = useState([]);

  useEffect(()=>{
    const fetchQuestion = async()=>{
      try {
        const {data} = await axios.get("http://localhost:3000/api/questions");
        setQuestions(data);
        setActiveQuestion(data[0]);
      } catch (error) {
        if(error.response?.status===429){
          setRateLimited(true);
        }
        else{
          toast.error("Failed to load questions");
        }
      } finally{
        setLoading(false);
      }
    }

    fetchQuestion();
  },[])

  // number of attempted questions (non-empty answers)
  const attempted = Object.values(answers).filter(
    (v) => v !== undefined && v !== null && String(v).trim() !== ""
  ).length;
  
  // called by SecureQuiz when user exits fullscreen
  const submitQuiz = () => {
    if (submitted) return; // already submitted
    setSubmitted(true);

    // Put your actual submit logic here:

    // - send `answers` to server
    // - navigate to results page
    // - show a modal, etc.
    console.log("Auto-submitting quiz. Answers:", answers);
    console.log("Final score:", score);

    // for demo, show an alert (optional)
    alert(
      "Quiz auto-submitted due to fullscreen exit. Your score: " +
        score +
        "/" +
        questions.length
    );
    nevigate("/");
  };

  const handleAnswer = (id, value) => {
    if (submitted) return;

    const correctAnswer = questions.find((q) => q.id === id).answer;

    setAnswers((prevAnswers) => {
      const prevValue = prevAnswers[id];
      const wasCorrect = prevValue === correctAnswer;
      const nowCorrect = value === correctAnswer;

      // only update score when correctness changed
      if (wasCorrect !== nowCorrect) {
        setScore((prevScore) => {
          const next = prevScore + (nowCorrect ? 1 : -1);
          return Math.min(questions.length, Math.max(0, next));
        });
      }

      return { ...prevAnswers, [id]: value };
    });
  };

  return (
    <Layout>
      {/* <SecureQuiz onAutoSubmit={submitQuiz} /> */}

      <Header />
      {/* Main Layout + one-time motion */}
       
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="overflow-x-hidden mt-10"
      >
        {/* Loading state  */}
        {loading && <Loading /> } 
        
        {/* Rate limit state */}
        {rateLimited && <RateLimiting />}
        
        <div className="w-full px-4 md:px-16 h-[87%] mt-8 md:mt-16 grid grid-cols-12 grid-rows-12 gap-4">
          {/* Left Panel */}
          <div className="subDivs col-start-1 col-span-12 row-start-4 row-span-8 md:col-start-1 md:col-end-9 md:row-span-12">
            <div className="flex justify-between items-center">
              <img
                src="main_logo.gif"
                className="md:block md:w-9 md:ml-5 md:pt-2 hidden"
              />
              <h1 className="font-[Orbitron] font-bold text-xl text-[#fcf53a] [text-shadow:_0_0_8px_#FFCC00] mt-2 ml-5 md:ml-0">
                Team :{" "}
                <span className="text-white [text-shadow:_0_0_8px_#FFCC00]">
                  {team}
                </span>
              </h1>
              {/* import time in seconds from server : auto submit function add */}
              <Countdown
                startSeconds={1800}
                resetOnStart={false}
                onComplete={() => alert("Time's up!")}
              />
            </div>
            <hr className="horizontalLine mt-2" />

            <QuizQuestionView
              question={activeQuestion}
              onAnswer={handleAnswer}
              selectedAnswer={answers[activeQuestion?._id]}
              disabled={submitted}
            />

            <div className="mt-4 text-lg font-semibold text-white">
              {submitted ? (
                <>
                  Submitted — Final score: {score} / {questions.length}
                </>
              ) : (
                <>
                  Score: {score} / {questions.length}
                </>
              )}
            </div>
          </div>

          {/* Right Panel */}
          <div className="subDivs mt-4 md:mt-0 col-start-1 col-span-12 row-span-3 md:col-start-9 md:col-end-13 md:row-span-10">
            <div className="flex justify-between items-center">
              <h1 className="hidden md:block text-white [text-shadow:_0_0_12px_#FFFFFF] font-[Orbitron] ml-5 font-semibold">
                {attempted} / {questions.length}
              </h1>

              <h1 className="font-[Orbitron] font-bold text-xl text-[#fcf53a] [text-shadow:_0_0_12px_#FFCC00] text-left mt-2 ml-5 md:ml-0 pb-2">
                Questions
              </h1>
              <img
                src="main_logo.gif"
                className="hidden md:block md:w-9 md:mr-5 md:pt-2 pb-2"
              />
              <h1 className="text-white md:hidden [text-shadow:_0_0_12px_#FFFFFF] font-[Orbitron] mr-5 font-semibold">
                {attempted} / {questions.length}
              </h1>
            </div>
            <hr className="horizontalLine" />

            <QuizQuestionsList
              questions={questions}
              activeId={activeQuestion?._id}
              onSelect={setActiveQuestion}
              answers={answers}
              disabled={submitted}
            />
          </div>

          {/* Submit div  */}
          <div className="md:bg-[rgba(0,0,0,0.5)] md:rounded-xl col-start-1 col-span-12 md:col-start-9 md:col-end-13 md:row-span-2 mt-4 md:mt-0 flex justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-[Orbitron] text-[#001f1a] bg-[#16fa8f] 
                px-12 py-2 text-3xl sm:text-4xl rounded-2xl 
                my-8 [box-shadow:_0_0_15px_#00FF9E] hover:bg-[#0fbf6d]"
              // submit pop up
              onClick={() => submitQuiz()}
            >
              Submit
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Quiz;
