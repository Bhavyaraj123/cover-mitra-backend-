const Insurance = require('../models/Insurance_model')

const createInsurance = async (req, res) => {
  console.log(req.body); // Log the request body to check the fields
  const NewInsurance = new Insurance(req.body);
  try {
    const newinsu = await NewInsurance.save();
    res.status(200).json({
      success: true,
      message: "Successfully created Insurance",
      data: newinsu,
    });
  } catch (error) {
    console.error(error); // Log the error for more details
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later",
      error: error.message,
    });
  }
};
const updateInsurance = async (req, res) => {
  const id = req.params.id
  console.log(req.body); // Log the request body to check the fields
  try {
    const update = await Insurance.findByIdAndUpdate(id,{
      $set:req.body
    });
    res.status(200).json({
      success: true,
      message: "Successfully Updated Insurance",
      data: update,
    });
  } catch (error) {
    console.error(error); // Log the error for more details
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later",
      error: error.message,
    });
  }
};


 const deleteInsurance=async(req,res)=>{
  const id = req.params.id
  try {
      const deleteInsu = await Insurance.findByIdAndDelete(id,{
        $set:req.body
      });
      res.status(200).json({success:true,message:"successfully deleted"})

  } catch (error) {
      res.status(500).json({success:false,message:"something went wrong ,try again"})

  }
}
const getInsurance=async(req,res)=>{
    const id = req.params.id
    try {
        const getinsu = await Insurance.findById(id);
        res.status(200).json({success:true,message:"successfully find the Insurance",data:getinsu})


    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }
 

//  for get all User 
  const getAllInsurance=async(req,res)=>{

     try {
        const allInsu = await Insurance.find({})
        res.status(200).json({success:true,message:"successfully get all Insurance",data:allInsu})
    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }



  

module.exports = {createInsurance,updateInsurance,deleteInsurance,getInsurance,getAllInsurance}
  