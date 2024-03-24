const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
const db_connection = require("./database/index");
require('dotenv').config();
const cors = require('cors')

const PORT = process.env.PORT || 3001

const appointmentRoutes = require("./routes/AppointmentRoute")
const UserRoutes = require("./routes/UserRoute")

const app = express();
// Use CORS middleware
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db_connection()

app.use("/appointments", appointmentRoutes)
app.use("/users", UserRoutes)
app.use('/uploads', express.static('D:/petclinic/Frontend/src/uploads'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
