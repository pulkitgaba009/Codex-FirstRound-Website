function QuestionForm({ formData, onChange, onSubmit, mode ,isDelete,isLoading }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(mode === "post"){
      onSubmit();
    }
  };

  return (
    <form className="m-4" onSubmit={handleSubmit}>

      <label className="label">Question :</label>
      <input
        type="text"
        name="question"
        value={formData.question}
        onChange={onChange}
        placeholder="Question"
        className="input text-center"
        onFocus={(e)=>e.target.value=""}
        required
      />
      <br /><br />

      <label className="label">Option A :</label>
      <input
        type="text"
        name="optionA"
        value={formData.optionA}
        onChange={onChange}
        placeholder="Option A"
        className="input text-center"
        onFocus={(e)=>e.target.value=""}
        required
      />
      <br /><br />

      <label className="label">Option B :</label>
      <input
        type="text"
        name="optionB"
        value={formData.optionB}
        onChange={onChange}
        placeholder="Option B"
        className="input text-center"
        onFocus={(e)=>e.target.value=""}
        required
      />
      <br /><br />

      <label className="label">Option C :</label>
      <input
        type="text"
        name="optionC"
        value={formData.optionC}
        onChange={onChange}
        placeholder="Option C"
        className="input text-center"
        onFocus={(e)=>e.target.value=""}
        required
      />
      <br /><br />

      <label className="label">Option D :</label>
      <input
        type="text"
        name="optionD"
        value={formData.optionD}
        onChange={onChange}
        placeholder="Option D"
        className="input text-center"
        onFocus={(e)=>e.target.value=""}
        required
      />
      <br /><br />

      {/* Answer */}
      <label className="label">Answer :</label>
      <input
        type="text"
        name="answer"
        value={formData.answer}
        onChange={onChange}
        placeholder="Answer"
        className="input text-center"
        onFocus={(e)=>e.target.value=""}
        required
      />
      <br /><br />

      <label className="label">Language :</label>
      <select
        name="language"
        value={formData.language}
        onChange={onChange}
        className="input w-[250px] text-center"
      >
        <option value="C">C</option>
        <option value="C++">C++</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
      </select>
      <br /><br />

      <textarea
        name="code"
        value={formData.code}
        onChange={onChange}
        placeholder="Code"
        className="input mt-4 w-[450px] text-left"
        onFocus={(e)=>e.target.value=""}
      />

      <div className="flex justify-evenly ">
        <button
          type="submit"
          className="font-[Orbitron] text-[#001f1a] hover:bg-[#24b873] 
                     hover:[box-shadow:_0_0_15px_#3cc21af4] mt-5  
                     px-4 py-2 text-2xl rounded-2xl [box-shadow:_0_0_15px_#00FF9E] 
                    bg-[#16fa8f] cursor-pointer mb-4"
        >
          {mode === "post" ? "Add Question" : "Update Question"}
        </button>

        {isDelete?<button
              className="font-[Orbitron] text-[#001f1a] bg-[#ff3838f4] 
                     [box-shadow:_0_0_15px_#fa5716f4] mt-5  
                     px-4 py-2 text-2xl rounded-2xl hover:[box-shadow:_0_0_15px_#bf2d2d] 
                     hover:bg-[#bf2d2d] cursor-pointer mb-4 "
            >
              Delete
            </button>:null}
      </div>
    </form>
  );
}

export default QuestionForm;
