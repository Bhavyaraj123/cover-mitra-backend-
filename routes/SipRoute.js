const express = require('express')
const { createSip, updateSip, deleteSip, getSip, getAllSIp } = require('../controllers/SipControllers')
const { verifyAdmin } = require('../utils/authutils')
const router = express.Router()

router.post('/',verifyAdmin,createSip)
router.put('/update/:id',verifyAdmin,updateSip)
router.delete('/delete/:id',verifyAdmin,deleteSip)
router.get('/getonesip/:id',getSip)
router.get('/getallsip',getAllSIp)

module.exports=router