'use strict';

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cron = require('node-cron');


module.exports = function (robot) {
  new cron.schedule("0 * */1 * * *", function () {
    var hourMessage = (0, _momentTimezone2.default)().format('h') + "時になったぞ...";
    robot.send({ room: "#general" }, hourMessage);
  }, null, true, "Asia/Tokyo");
};