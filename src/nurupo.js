module.exports = (robot => {
    robot.hear(/ぬるぽ/i, res => {
        res.send("ガッ")
    })

    robot.hear(/www/i, res => {
        res.send("...笑うな！")
    })

})

