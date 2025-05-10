const Loan = require('../models/Finance_model')

const createLoan = async (req, res) => {
  console.log(req.body); // Log the request body to check the fields
  const newLoan = new Loan(req.body);
  try {
    const newloann = await newLoan.save();
    res.status(200).json({
      success: true,
      message: "Successfully Added SIP",
      data: newloann,
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
const updateLoan = async (req, res) => {
  const id = req.params.id
  console.log(req.body); // Log the request body to check the fields
  try { 
    const update = await Loan.findByIdAndUpdate(id,{
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


 const deleteLoan=async(req,res)=>{
  const id = req.params.id
  try {
      const deletloann= await Loan.findByIdAndDelete(id,{
        $set:req.body
      });
      res.status(200).json({success:true,message:"successfully deleted"})

  } catch (error) {
      res.status(500).json({success:false,message:"something went wrong ,try again"})

  }
}
const getloan=async(req,res)=>{
    const id = req.params.id
    try {
        const getLoan = await Loan.findById(id);
        res.status(200).json({success:true,message:"successfully find the Insurance",data:getLoan})


    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }
 

//  for get all User 
  const getAllloan=async(req,res)=>{

     try {
        const allLoan = await Loan.find({})
        res.status(200).json({success:true,message:"successfully get all Insurance",data:allLoan})
    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }


module.exports = {createLoan,updateLoan,deleteLoan,getloan,getAllloan}
  