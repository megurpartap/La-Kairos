// Requires
const express = require("express");
require("dotenv").config();


const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// Routes Requires
const reservationRoutes = require("./routes/reservations");

// DB CONNECTION
require("./db/conn");

// Port
const PORT = process.env.PORT || 8010;

// Middlewares
app.use(
    express.static("client", {
        extensions: ["html", "htm"],
    })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/reservation", reservationRoutes);

// Server Listening
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}!`);
});