require('dotenv').config();
const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

const db_connection = async () => {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected!!");
    } catch (err) {
        console.error("Database connection error:", err);
    }
}

module.exports = db_connection;
