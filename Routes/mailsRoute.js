const express = require('express')
const router = express.Router()
const mailController = require('../Controllers/mailController')

// router.get('/' ,  (req , res)=>{
//      res.send('Hellosss')
//})

router.get('/all',mailController.fetchAllMails)
module.exports = router;