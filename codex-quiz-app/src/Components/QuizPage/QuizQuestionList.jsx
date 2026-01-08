function QuizQuestionsList({ questions, activeId, onSelect, answers }) {
  return (
    <div className="w-full h-[90%] overflow-x-auto md:overflow-y-auto md:overflow-x-hidden scrollbar-hidden">
      <div className="px-4 pb-4 mt-[5px] md:mt-4 text-white gap-4 flex flex-nowrap md:flex-wrap min-w-max md:min-w-0 md:justify-evenly">
        {questions.map((q, index) => {
          const isActive = q.id === activeId;
          const isAnswered = answers[q.id] !== undefined;

          return (
            <button
              key={q.id}
              onClick={() => onSelect(q)}
              className={`w-[3rem] h-[3rem]  md:w-[4rem] md:h-[4rem] text-2xl rounded-full font-[Montserrat] font-semibold transition-all duration-200 mx-1 [text-shadow:0_0_15px_#ffffff] hover:shadow-[0_0_10px_#FFD700,0_0_10px_#f7efab] bg-black
            ${
              isActive
                ? "text-white shadow-[0_0_10px] border-2"
                : isAnswered
                ? "shadow-[0_0_10px_#16fa8f]"
                : "shadow-[0_0_10px_#44f3eb]"
            }
          `}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuizQuestionsList;
