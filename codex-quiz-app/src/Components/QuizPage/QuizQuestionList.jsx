function QuizQuestionsList({ questions, activeId, onSelect, answers }) {
  return (
    <div className="w-full h-[70%] overflow-y-auto scrollbar-hidden">
      <div className="px-4 pb-4 mt-4 text-white flex flex-wrap justify-between gap-4">
        {questions.map((q, index) => {
          const isActive = q.id === activeId;
          const isAnswered = answers[q.id] !== undefined;

          return (
            <button
              key={q.id}
              onClick={() => onSelect(q)}
              className={`w-[4rem] h-[4rem] text-2xl rounded-full font-[Montserrat] font-semibold transition-all duration-200 mx-1 [text-shadow:0_0_15px_#ffffff] hover:shadow-[0_0_10px_#FFD700,0_0_10px_#f7efab] bg-black
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
