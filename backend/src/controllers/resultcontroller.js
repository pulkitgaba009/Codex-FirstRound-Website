import Result from "../models/Result.js";

const getResult = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
    console.log("ERROR in get quiz Results : ", { error });
  }
};

const postResult = async (req, res) => {
  try {
    const { teamName, score, timeRemaining } = req.body;
    const newResult = new Result({ teamName, score, timeRemaining });

    newResult.save();
    res.status(201).json({ message: "Reult Saved in Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log("Error in Post results API");
  }
};

const deleteResult = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRes = await Result.findByIdAndDelete(id);

    if (!deleteRes)
      return res.status(404).json({ message: "Result Not Found" });

    res.status(200).json({ message: "Result Deleated Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log("Error in Delete Route API : ", error);
  }
};

export { getResult, postResult, deleteResult };
