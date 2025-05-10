const Contact = require('../models/Contact_Model')

const createUser = async (req, res) => {
  console.log(req.body); // Log the request body to check the fields
  const newUser = new Contact(req.body);
  try {
    const newUsers = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully Added SIP",
      data: newUsers,
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
const updateuser = async (req, res) => {
  const id = req.params.id
  console.log(req.body); // Log the request body to check the fields
  try { 
    const update = await Contact.findByIdAndUpdate(id,{
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


 const deleteUser=async(req,res)=>{
  const id = req.params.id
  try {
      const deletUsers= await Contact.findByIdAndDelete(id,{
        $set:req.body
      });
      res.status(200).json({success:true,message:"successfully deleted"})

  } catch (error) {
      res.status(500).json({success:false,message:"something went wrong ,try again"})

  }
}

const getUser=async(req,res)=>{
    const id = req.params.id
    try {
        const getUser = await Contact.findById(id);
        res.status(200).json({success:true,message:"successfully find the User",data:getUser})


    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }
 

//  for get all User 
  const getAllUser=async(req,res)=>{

     try {
        const allUsers = await Contact.find({})
        res.status(200).json({success:true,message:"successfully get all Users",data:allUsers})
    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }



module.exports = {createUser,updateuser,deleteUser,getUser,getAllUser}
  