let Discord = require("discord.js-selfbot");
let client = new Discord.Client();

let { type, status, link, token } = require("./config")

//Dont put in secrets - env not supported


client.login(token)

client.on("message", message => {

  if (message.content.toLowerCase() == "self-ping" && message.author.id == client.user) {
    message.channel.send(`Pong🏓 | Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }

});




client.on("ready", async () => {

  await client.user.setActivity(status, {
    type: type,
    url: link
  })
  console.clear()
  console.log("logged in as :" + client.user)
  console.log(" _______________________________")
  console.log("  ")
  console.log("| ✅ OPERATION SUCCESSFUL       |")
  console.log("| ✅ LOGGED IN CLIENT IS ONLINE |")
  console.log("| ✅ STATUS SET SUCCESSFULLY    |")
  console.log(" _______________________________")
  console.log("  ")
  console.log("| Made by : ⏤͟͟͞⍟・🜲 PAiN ❯❯❯#4005 |")
  console.log(" _______________________________")

})



//keep alive
const express = require("express")
const app = express()
const server = app.listen(3000, () => {
  console.log(" _______________________________")
  console.log("")
  console.log("| WEB-WINDOW POWERED BY EXPRESS |")
  console.log(" _______________________________")
  console.log("")
  console.log("| /./\\//? Booting Client ...... |")
  console.log("| Please be patient ........... |")
  console.log(" _______________________________")


})
app.get("/", (req, res) => res.send("Copy the link above and put to monitor "))
