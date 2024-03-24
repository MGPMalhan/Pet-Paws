const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/AppointmentController');

const appointmentController = new AppointmentController();

// Create a new appointment
router.post('/appointments', appointmentController.createAppointment);

// Get all appointments
router.get('/', appointmentController.getAllAppointments);

// Get a specific appointment by ID
router.get('/:id', appointmentController.getAppointmentById);

// Update a specific appointment by ID
router.put('/:id', appointmentController.updateAppointment);

// Delete a specific appointment by ID
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
