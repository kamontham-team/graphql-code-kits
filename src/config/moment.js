require('moment');

const { extendMoment } = require('moment-range');

const momentTz = require('moment-timezone');

const moment = extendMoment(momentTz);
moment().tz('Europe/London');

module.exports = moment;
