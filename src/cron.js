var cron = require('node-cron');
import moment from 'moment-timezone'

module.exports = (robot => {
    new cron.schedule(
      "0 * */1 * * *",
      () => {
            const hourMessage = moment().format('h') + "時になったぞ...";
            robot.send({ room: "#general" }, hourMessage);
      },
      null,
      true,
      "Asia/Tokyo",
    );
});

