const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        default: ""
    },
    customerPhoneNumber: {
        type: String,
        required: true,
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    reservationDate: {
        type: String,
        required: true,
    },
    reservationTime: {
        type: String,
        required: true,
    },
    instructions: {
        type: String
    },
    status: {
        type: String,
        default: "ongoing"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Reservation", reservationSchema);