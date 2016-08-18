"use strict";

module.exports = function (robot) {
    robot.hear(/ぬるぽ/i, function (res) {
        res.send("ガッ");
    });
};