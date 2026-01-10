import QuizSetting from "../models/QuizSetting.js";

const getSettings = async(req,res)=>{
    try{
        const settings = await QuizSetting.find();
        res.status(200).json(settings);
    }catch(error){
        res.status(500).json({"message":"Internal Server Error"})
    }
}

const updateSettings = (req,res)=>{
    console.log("Settings : Put");
}

const addSettings = (req,res)=>{
    console.log("Settings : Post");
}

export { getSettings, updateSettings, addSettings }