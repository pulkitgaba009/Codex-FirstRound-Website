// get controller
const getAllQuestions = (req,res)=>{
    res.status(200).json({message:"you got 20 posts..."});
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