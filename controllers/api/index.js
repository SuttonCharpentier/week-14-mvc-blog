const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');

// Default router for all routes.
router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;