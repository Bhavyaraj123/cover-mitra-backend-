const express = require("express")
const { createLoan, updateLoan, deleteLoan, getAllloan, getloan } = require("../controllers/FinanceControllers")
const { verifyAdmin } = require("../utils/authutils")
const router  = express.Router()

router.post('/',verifyAdmin,createLoan)
router.put('/update/:id',verifyAdmin,updateLoan)
router.delete('/delete/:id',verifyAdmin,deleteLoan)
router.get('/getalloan',getAllloan)
router.get('/getoneloan/:id',getloan)

module.exports = router