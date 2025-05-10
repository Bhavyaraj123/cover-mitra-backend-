const express = require('express')
const router = express.Router()
const {createUser, updateuser, deleteUser, getUser, getAllUser} = require('../controllers/ContactControllers')
const { verifyAdmin } = require('../utils/authutils')


router.post('/',createUser)
router.put('/update/:id',verifyAdmin,updateuser)
router.delete('/delete/:id',verifyAdmin,deleteUser)
router.get('/getOneUser/:id',getUser)
router.get('/getAllUser',getAllUser)

module.exports = router