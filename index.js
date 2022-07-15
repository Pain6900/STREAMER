
let Discord = require("discord.js-selfbot");
let client = new Discord.Client();

let type = "STREAMING"
let status = ""
let link = ""
let token = ""

//Dont put in secrets - env not supported


client.login(token)

client.on("message", message => {

  if (message.content.startsWith("ping") && message.author.id == client.user)
    message.channel.send(`Pong🏓 | Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
});




client.on("ready", async () => {

  await client.user.setActivity(status, {
    type: type,
    url: link
  })
  console.log("logged in as :" + client.user)
  console.log("Status : " + status)
  console.log("Type : " + type)
  console.log("URL : " + link)

  console.log(" _______________________________")
  console.log("  ")
  console.log("| ✅ OPERATION SUCCESSFUL       |")
  console.log("| ✅ LOGGED IN CLIENT IS ONLINE |")
  console.log("| ✅ STATUS SET SUCCESSFULLY    |")
  console.log(" _______________________________")
  console.log("  ")
  console.log("Made by : ⏤͟͟͞⍟・🜲 PAiN ❯❯❯#4005")


})



//keep alive
const express = require("express")
const app = express()
const server = app.listen(3000, () => {
  console.log("")
})
app.get("/", (req, res) => res.send(""))
