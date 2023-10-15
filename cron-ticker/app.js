const cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db');

console.log('App init');

cron.schedule('1-59/5 * * * * *', syncDB);
