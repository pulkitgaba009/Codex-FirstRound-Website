import Question from "../models/Question.js";

// get controller
const  getAllQuestions = async(req,res)=>{
    try{
        const questions = await Question.find();
        res.status(200).json(questions);
    }
    catch(error){
        res.send(500).json({"message":"Internal Server error"})
    }
}

// post controller
const createQuestion = (req,res)=>{
    res.status(200).json({message:"post created successfully..."});
}

// delete controller
const deleteQuestion =(req,res)=>{
    res.status(200).json({message:"post created successfully..."});
}

// put controller
const updateQuestion = (req,res)=>{
    res.status(200).json({message:"post created successfully..."});
}

export {getAllQuestions, createQuestion, deleteQuestion, updateQuestion};