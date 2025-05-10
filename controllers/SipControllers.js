const SIP = require('../models/SIP_Model')

const createSip = async (req, res) => {
  console.log(req.body); // Log the request body to check the fields
  const newSip = new SIP(req.body);
  try {
    const newsip = await newSip.save();
    res.status(200).json({
      success: true,
      message: "Successfully Added SIP",
      data: newsip,
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
const updateSip = async (req, res) => {
  const id = req.params.id
  console.log(req.body); // Log the request body to check the fields
  try { 
    const update = await SIP.findByIdAndUpdate(id,{
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


 const deleteSip=async(req,res)=>{
  const id = req.params.id
  try {
      const deletessip= await SIP.findByIdAndDelete(id,{
        $set:req.body
      });
      res.status(200).json({success:true,message:"successfully deleted"})

  } catch (error) {
      res.status(500).json({success:false,message:"something went wrong ,try again"})

  }
}

const getSip=async(req,res)=>{
  const id = req.params.id
  try {
      const getSIP = await SIP.findById(id);
      res.status(200).json({success:true,message:"successfully find the Insurance",data:getSIP})


  } catch (error) {
      res.status(500).json({success:false,message:"something went wrong ,try again"})
  }
}


//  for get all User 
const getAllSIp=async(req,res)=>{

   try {
      const allSIP = await SIP.find({})
      res.status(200).json({success:true,message:"successfully get all Insurance",data:allSIP})
  } catch (error) {
      res.status(500).json({success:false,message:"something went wrong ,try again"})
  }
}


module.exports = {createSip,updateSip,deleteSip,getSip,getAllSIp}
  