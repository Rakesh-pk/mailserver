const express = require('express')
const router = express.Router()
const ticketController = require('../Controllers/generateTicketController')

//route > ticket/create
router.post('/create',ticketController.generateTicket)
router.get('/alltickets',ticketController.getAllTickets)
router.get('/findtkt/:id',ticketController.findTicket)
module.exports = router;