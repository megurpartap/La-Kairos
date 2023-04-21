const express = require("express");
const router = express.Router();
const {
  createReservation,
  completeReservation,
  getNumberOfTablesAvailable
} = require("../controllers/reservations");
require("../db/conn");



// create Reservation
router.post("/create", createReservation);
// complete Reservation
router.post("/complete", completeReservation);
// getNumberOfTablesAvailable
router.get("/getNumberOfTablesAvailable", getNumberOfTablesAvailable);


module.exports = router;