const express = require("express")
const router  = express.Router()
const { createInsurance ,updateInsurance,deleteInsurance, getAllInsurance, getInsurance} = require("../controllers/InsuranceController.js")
const { verifyAdmin } = require("../utils/authutils.js")


router.post('/',verifyAdmin,createInsurance)
router.put('/:id',verifyAdmin,updateInsurance)
router.delete('/:id',verifyAdmin,deleteInsurance)
router.get('/allInsurance',getAllInsurance)
router.get('/oneInsurance/:id',getInsurance)
module.exports = router; 