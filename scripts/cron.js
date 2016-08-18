'use strict';

var cron = require('node-cron');
var moment = require('moment');

module.exports = function (robot) {
  new cron.schedule("0 */1 * * * *", function () {
    var hourMessage = moment().format('h') + "時になったぞ...";
    robot.send({ room: "#general" }, hourMessage);
  }, null, true, "Asia/Tokyo");
};