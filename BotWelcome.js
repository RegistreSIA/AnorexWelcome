const Discord = require("discord.js")
var bot = new Discord.Client();
var prefix = ("=")
bot.login("NjA4NjUzNzUwNzA5NjQ5NDE4.XkmfKQ.gpofbRIJm1_9lmGF86n-_2wVMu4");

bot.on("ready", () => {
  bot.user.setActivity(' 𝐀𝐍𝐎𝐑𝐄𝐗 𝐁𝐎𝐓 By Registre', { type: 'Streaming', url: 'https://www.twitch.tv/anorex_project' })


    console.log("Le Bot est en ligne")
})


bot.on("guildMemberAdd", member => {
  member.guild.channels.find("name", "『🆕』arrivé-départ").send(`Bienvenue ${member} sur 𝐀𝐍𝐎𝐑𝐄𝐗 `)
})

  bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name" , "『🆕』arrivé-départ").send(`Aure-voir ${member} en espèrant que tu es passer un bon moment sur 𝐀𝐍𝐎𝐑𝐄𝐗`)
  })

  bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', '[👤] 𝐀𝐍𝐎𝐑𝐄𝐗');
    member.addRole(role)
  })




