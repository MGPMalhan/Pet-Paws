const Appointment = require('../models/AppointmentModel');

class AppointmentController {
  async createAppointment(req, res) {
    try {
      const {
        ownerName,
        petName,
        appointmentDate,
        appointmentTime,
        doctor,
        service,
        location,
        note
      } = req.body;

      const appointment = new Appointment({
        ownerName,
        petName,
        appointmentDate,
        appointmentTime,
        doctor,
        service,
        location,
        note
      });

      const newAppointment = await appointment.save();

      res.status(201).json(newAppointment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllAppointments(req, res) {
    try {
      const appointments = await Appointment.find();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAppointmentById(req, res) {
    try {
      const appointment = await Appointment.findById(req.params.id);
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      res.status(200).json(appointment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateAppointment(req, res) {
    try {
      const { ownerName, petName, appointmentDate, appointmentTime, doctor, service, location, note } = req.body;
      const appointment = await Appointment.findById(req.params.id);
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      appointment.ownerName = ownerName;
      appointment.petName = petName;
      appointment.appointmentDate = appointmentDate;
      appointment.appointmentTime = appointmentTime;
      appointment.doctor = doctor;
      appointment.service = service;
      appointment.location = location;
      appointment.note = note;
      const updatedAppointment = await appointment.save();
      res.status(200).json(updatedAppointment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteAppointment(req, res) {
    try {
      const appointment = await Appointment.findByIdAndDelete(req.params.id);
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      
      res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AppointmentController;
