const { Client } = require("discord.js")
const ms = require("ms")
const mongoConect = require("../../Database/Connection/Mongo")

module.exports = {
  name: "ready",

  /**
  * @param {Client} client
  */
  async execute(client) {

    const { user, ws } = client

    console.log(`${user.tag} is now online!`)
    setInterval(() => {

      const ping = ws.ping

      user.setActivity({
        name: `Sus`,
        type: 3,
      })

    }, ms("5s"))

    mongoConect()
  }
}