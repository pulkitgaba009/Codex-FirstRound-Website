import { useState } from "react";

// ✅ Utility function: Convert hrs/min/sec → seconds
const convertToSeconds = ({ hrs = 0, min = 0, sec = 0 }) => {
  return (
    Number(hrs || 0) * 3600 +
    Number(min || 0) * 60 +
    Number(sec || 0)
  );
};

function QuizDashboard() {
  const [isOn, setIsOn] = useState(false);
  const [isShuffleOn, setIsShuffleOn] = useState(false);

  const [formData, setFormData] = useState({
    num: 30,
    hrs: "",
    min: "",
    sec: "",
  });

  const toggleHandler = () => setIsOn((prev) => !prev);
  const toggleShuffleHandler = () => setIsShuffleOn((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalSeconds = convertToSeconds(formData);

    if (formData.num <= 0) {
      alert("Number of questions must be greater than 0");
      return;
    }

    if (totalSeconds <= 0) {
      alert("Quiz time must be greater than 0");
      return;
    }

    // ✅ Final payload (backend-ready)
    const payload = {
      questionNumbers: formData.num,
      quizTime: totalSeconds, // seconds
      quizStatus: isOn,
      shuffleStatus: isShuffleOn,
    };

    console.log("Quiz Settings Payload:", payload);
  };

  return (
    <div className="box bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
      <div className="subDivs h-[65%] rounded-lg">
        <h1 className="authHeading">Quiz Control Panel</h1>
        <hr className="horizontalLine mt-2" />
        <br />

        <form onSubmit={handleSubmit}>
          <div className="w-full px-4">
            {/* Number of Questions */}
            <label className="label">Number of Questions:</label>
            <input
              type="number"
              className="input w-[145px] text-center"
              name="num"
              value={formData.num}
              onChange={handleChange}
              min={1}
            />

            <br /><br />

            {/* Quiz Time */}
            <label className="label">Quiz Time:</label>
            <input
              type="number"
              className="input w-[80px] text-center"
              name="hrs"
              placeholder="hrs"
              value={formData.hrs}
              onChange={handleChange}
              min={0}
            />
            <input
              type="number"
              className="input w-[80px] text-center"
              name="min"
              placeholder="min"
              value={formData.min}
              onChange={handleChange}
              min={0}
              max={59}
            />
            <input
              type="number"
              className="input w-[80px] text-center"
              name="sec"
              placeholder="sec"
              value={formData.sec}
              onChange={handleChange}
              min={0}
              max={59}
            />

            <br /><br />

            {/* Quiz Status */}
            <label className="label">Quiz Active Status:</label>
            <button
              type="button"
              onClick={toggleHandler}
              className={`ml-23 px-6 py-2 text-xl rounded-2xl font-[Orbitron] transition-all font-semibold ${
                isOn
                  ? "bg-[#16fa8f] text-[#001f1a]"
                  : "bg-[#fa1616] text-white"
              }`}
            >
              {isOn ? "ON" : "OFF"}
            </button>

            <br /><br />

            {/* Shuffle Status */}
            <label className="label">Shuffle Quiz Questions:</label>
            <button
              type="button"
              onClick={toggleShuffleHandler}
              className={`ml-10 px-6 py-2 text-xl rounded-2xl font-[Orbitron] transition-all font-medium ${
                isShuffleOn
                  ? "bg-[#16fa8f] text-[#001f1a]"
                  : "bg-[#fa1616] text-white"
              }`}
            >
              {isShuffleOn ? "ON" : "OFF"}
            </button>

            <br /><br />

            {/* Submit */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="font-[Orbitron] font-semibold text-white bg-[#fa1616] w-[80%] py-2 text-xl rounded-2xl hover:bg-[#16fa8f]"
              >
                Save Quiz Settings
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuizDashboard;