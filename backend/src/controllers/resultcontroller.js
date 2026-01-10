import Result from "../models/Result.js";

const getResult = async(req,res)=>{
    try{
        const results = await Result.find();
        res.status(200).json(results);
    }catch(error){
        res.status(500).json({"message":"Internal Server error"})
    }
}

const postResult = (req,res)=>{
    console.log("Result : Post");
}

const deleteResult = (req,res)=>{
    console.log("Result : Delete");
}

export { getResult, postResult, deleteResult}