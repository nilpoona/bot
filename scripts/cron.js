'use strict';

var cron = require('node-cron');
var moment = require('moment');

module.exports = function (robot) {
    console.log('run');
    new cron.schedule("0 0 0-23 * * *", function () {
        var hourMessage = moment().format('h') + "時になったぞ...";
        robot.send({ room: "#general" }, hourMessage);
    }, null, true, "Asia/Tokyo");
};