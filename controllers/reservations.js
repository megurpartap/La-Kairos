const Reservation = require("../models/reservations");
const formidable = require("formidable");

require("../db/conn");


exports.createReservation = async (req, res) => {
    var form = new formidable.IncomingForm();
    form.multiples = true;
    form.parse(req, async (err, fields, files) => {
        const {
            customerEmail,
            customerPhoneNumber,
        } = fields;
        const userAlready = await Reservation.findOne({
            $or: [{
                    customerEmail: customerEmail ? customerEmail : true,
                    status: "ongoing"
                },
                {
                    customerPhoneNumber: customerPhoneNumber,
                    status: "ongoing"
                },
            ],
        }).exec();
        if (userAlready) {
            return res.status(400).json({
                error: `You've Already Booked a Table for ${userAlready.numberOfPeople} on ${userAlready.reservationDate} at ${userAlready.reservationTime}`,
            });
        }
        let onGoingReservations = await Reservation.countDocuments({
            status: 'ongoing'
        });
        if (onGoingReservations >= 40) {
            return res.status(400).json({
                error: `Sorry No Table is Available Right Now. Please Come back later`,
            });
        }
        const reservation = new Reservation(fields);
        reservation.save().then((reservation) => {
            return res.status(200).json({
                reservation: reservation,
                message: "reservation Done",
            })
        }).catch((error) => {
            return res.status(500).json({
                error: error,
            });
        });
    })
};

exports.completeReservation = async (req, res) => {
    const {
        customerPhoneNumber
    } = req.body;
    const ongoingReservation = await Reservation.findOne({
        customerPhoneNumber: customerPhoneNumber,
        status: "ongoing"
    }).exec();
    if (ongoingReservation) {
        ongoingReservation.status = "completed"
    } else {
        return res.status(400).json({
            error: "No table for this phoneNumber",
        });
    }
    await ongoingReservation.save();
    return res.json({
        message: "Reservation Completed",
    });
}

exports.getNumberOfTablesAvailable = async (req, res) => {
    const onGoingReservations = await Reservation.countDocuments({
        status: 'ongoing'
    });
    const availableTables = 40 - onGoingReservations
    res.status(200).json({
        availableTables
    });
}