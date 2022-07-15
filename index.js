
let Discord = require("discord.js-selfbot");
let client = new Discord.Client();


client.login("ENTER TOKEN HERE")
//Dont put in secrets - env not supported


client.on("ready", () => {

  client.user.setActivity("ENTER STATUS HERE", {
    type: "PLAYING/LISTENING/STREAMING/WATCHING"
  })
  console.log(" ______________________________")
  console.log("| ✅ OPERATION SUCCESSFUL      |")
  console.log("| ✅ LOGGED IN CLIENT IS ONLINE|")
  console.log("| ✅ STATUS SET SUCCESSFULLY   |")
  console.log(" ______________________________")
})

client.on("message", message => {

  if (message.content.startsWith("ping"))
      message.channel.send(`Pong🏓`);
});



//keep alive
const express = require("express")
const app = express()
const server = app.listen(1000, () => {
  console.log("")
})
app.get("/", (req, res) => res.send(""))
