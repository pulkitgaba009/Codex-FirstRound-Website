import Question from "../models/Question.js";

// get controller
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.send(500).json({ message: "Internal Server error" });
    console.log("ERROR in get asyncQuestions : ", { error });
  }
};

// post controller
const createQuestion = async (req, res) => {
  try {
    const {
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      answer,
      language,
      code,
    } = req.body;
    const newQuestion = new Question({
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      answer,
      language,
      code,
    });

    await newQuestion.save();
    res.status(201).json({ message: "Question Added Successfully!!!" });
  } catch (error) {
    res.status(500).json({ message: "Internal serber Error" });
    console.log("Error in Post Question API : ", error);
  }
};

// delete controller
const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQues = await Question.findByIdAndDelete(id);

    if (!deleteQues)
      return res.status(404).json({ message: "Question not found" });

    res.status(200).json({ message: "Question Deleated Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log("Error in Delete Questions API : ", error);
  }
};

// put controller
const updateQuestion = async (req, res) => {
  try {
    const {
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      answer,
      language,
      code,
    } = req.body;
    const { id } = req.params;
    const updatedNote = await Question.findByIdAndUpdate(
      id,
      { question, optionA, optionB, optionC, optionD, answer, language, code },
      { new: true }
    );

    if (!updatedNote)
      return res.send(404).json({ message: "Question Not Found" });

    res.status(200).json({ message: "Question updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internak Server Error" });
    console.log("Error in Put Questions Api : ", error);
  }
};

export { getAllQuestions, createQuestion, deleteQuestion, updateQuestion };
