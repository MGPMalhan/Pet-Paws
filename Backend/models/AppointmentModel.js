const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
  ownerName: { type: String, required: true },
  petName: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  doctor: { type: String, required: true },
  service: { type: String, required: true },
  location: { type: String, required: true },
  note: { type: String }
});

const Appointment = model('AppointmentModel', appointmentSchema);

module.exports = Appointment;
