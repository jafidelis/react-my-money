const express = require('express');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api', router);

    // Routes of billing cycles
    const BillingCycle = require('../api/billingCyle/billingCycleService');
    BillingCycle.register(router, '/billingCycles');
}