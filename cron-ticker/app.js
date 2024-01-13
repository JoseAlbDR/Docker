const cron = require('node-cron');

cron.schedule('1-59 * * * * *', () => {
  console.log('running a task every second');
});
