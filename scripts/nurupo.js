"use strict";

module.exports = function (robot) {
    robot.hear(/ぬるぽ/i, function (res) {
        res.send("ガッ");
    });

    robot.hear(/www/i, function (res) {
        res.send("...笑うな！");
    });
};