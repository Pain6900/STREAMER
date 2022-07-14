
let Discord = require("discord.js-selfbot");
let client = new Discord.Client();


client.login("")

client.on("ready",()=>{

  client.user.setActivity("",{
    type : ""
  })
  console.log("")
  
})


//keep alive
const express = require("express")
const app = express()

const server = app.listen(3000, () => {
    console.log("")
})


app.get("/", (req, res) => res.send(""))
