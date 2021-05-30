/*
0-754062758076743790
1-754062754813444214
2-754062752720617513
3-754062750623465602
4-754062748136112218
5-754062730532618311
admin-753107491490889790
*/
const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const client = new Discord.Client();
const { token } = require('./config');
//require('dotenv-flow').config();

client.commands = new Enmap();

fs.readdir('./events/',async(err, files) => {
    if(err) return console.error;
    files.forEach(file => {
        if(!file.endsWith('js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        //console.log(`Loaded '${evtName}'.`);
        client.on(evtName, evt.bind(null, client));
    })

})

const client = new(require("discord.js").Client)
const {
    MessageEmbed
} = require('discord.js');
const fetch = require('node-fetch')
const {
    Slash
} = require("discord-slash-commands");
const slash = new Slash({
    client: client
})
const embed = new MessageEmbed();

slash.on("create", (d) => {
    console.log(`Command created: ${JSON.parse(d.config.data).name}`)
})

slash.on("command", async (command) => {
    if (command.name === "activities") {
        let channel = client.channels.cache.get(command.options.find(m => m.name === "channel").value);
        if (channel.type !== "voice") return command.callback("Channel must be a voice channel.")
        if (command.options.find(m => m.name === "type").value === "yt") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Activity added!")
                    embed.setDescription(`Added **YouTube Together** to [${channel.name}](https://discord.gg/${invite.code})\n> Click on the hyperlink to join.`)
                    embed.setFooter(`Requested by ${command.author.username + "#" + command.author.discriminator}`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
        if (command.options.find(m => m.name === "type").value === "pn") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755827207812677713",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Activity added!")
                    embed.setDescription(`Added **Poker Night** to [${channel.name}](https://discord.gg/${invite.code})\n> Click on the hyperlink to join.`)
                    embed.setFooter(`Requested by ${command.author.username + "#" + command.author.discriminator}`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
        if (command.options.find(m => m.name === "type").value === "bio") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "773336526917861400",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Activity added!")
                    embed.setDescription(`Added **Betrayal.io** to [${channel.name}](https://discord.gg/${invite.code})\n> Click on the hyperlink to join.`)
                    embed.setFooter(`Requested by ${command.author.username + "#" + command.author.discriminator}`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
        if (command.options.find(m => m.name === "type").value === "fio") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "814288819477020702",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Activity added!")
                    embed.setDescription(`Added **Fishington.io** to [${channel.name}](https://discord.gg/${invite.code})\n> Click on the hyperlink to join.`)
                    embed.setFooter(`Requested by ${command.author.username + "#" + command.author.discriminator}`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
    }
})

client.on("ready", () => {
    console.log("Ready");
    slash.create({
        guildOnly: false,
        data: {
            name: "activities",
            description: "Voice channel activities",
            options: [{
                    name: "channel",
                    description: "Select the voice channel you want.",
                    required: true,
                    type: 7,
                },
                {
                    name: "type",
                    description: "Type of activity.",
                    required: true,
                    type: 3,
                    choices: [{
                            name: "YouTube Together",
                            value: "yt"
                        },
                        {
                            name: "Betrayal.io",
                            value: "bio"
                        },
                        {
                            name: "Poker Night",
                            value: "pn"
                        },
                        {
                            name: "Fishington.io",
                            value: "fio"
                        }
                    ]
                }
            ]
        }
    })
})


fs.readdir('./commands/',async(err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let cmdName = file.split('.')[0];
        //console.log(`Loaded command '${cmdName}'.`);
        client.commands.set(cmdName, props);
    })
});

fs.readdir('./emojis/',async(err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./emojis/${file}`);
        let emojiName = file.split('.')[0];
        //console.log(`Loaded emoji '${emojiName}'.`);
        client.commands.set(emojiName, props);
    })
});

fs.readdir('./custem/advait/',async(err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./custem/advait/${file}`);
        let advcustem = file.split('.')[0];
        //console.log(`Loaded advcustemoji '${advcustem}'.`);
        client.commands.set(advcustem, props);
    })
});

fs.readdir('./custem/alex/',async(err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./custem/alex/${file}`);
        let alexcustem = file.split('.')[0];
        //console.log(`Loaded alexcustemoji '${alexcustem}'.`);
        client.commands.set(alexcustem, props);
    })
});

fs.readdir('./custem/aadharsh/',async(err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./custem/aadharsh/${file}`);
        let aadcustem = file.split('.')[0];
        //console.log(`Loaded aadcustemoji '${aadcustem}'.`);
        client.commands.set(aadcustem, props);
    })
});
/*
client.on("message", msg => {
    if(msg.channel.id=='761423189338750976'&&msg.author.id=='753282991970713652') {
        msg.delete();
    }
});*/

client.on("message", msg => {
    if(msg.channel.id=='761423189338750976') return;
    if(msg.channel.id=='757617115326054400') return;
    var curtime = new Date().toLocaleTimeString();
    //console.log(`(${curtime}) - ${msg.author.tag} SENT ${msg} in #${msg.channel.name}.`);
    client.channels.cache.get('761423189338750976').send(`(${curtime}) - ${msg.author.tag} SENT \"${msg}\" in #${msg.channel.name}.`);
    var attached = (msg.attachments)
    if(attached.size>0) {
        for(var i=0; i<attached.size; i++) {
            client.channels.cache.get('761423189338750976').send(`(${curtime}) - ${msg.author.tag} INCLUDED ${attached.array()[0].url} in #${msg.channel.name}.`);
        }
    }
});
client.on("messageUpdate", function(oldM,newM) {
    if(newM.channel.id=='761423189338750976') return;
    if(newM.channel.id=='757617115326054400') return;
    var curtime = new Date().toLocaleTimeString();
    //console.log(`(${curtime}) - ${oldM.author.tag} EDITED ${oldM} with ${newM} in #${oldM.channel.name}.`);
    client.channels.cache.get('761423189338750976').send(`(${curtime}) - ${oldM.author.tag} EDITED \"${oldM}\" with \"${newM}\" in #${oldM.channel.name}.`);
});
client.on("messageDelete", msg => {
    if(msg.channel.id=='761423189338750976') return;
    if(msg.channel.id=='757617115326054400') return;
    var curtime = new Date().toLocaleTimeString();
    //console.log(`(${curtime}) - ${msg.author.tag} SENT ${msg} in #${msg.channel.name}.`);
    client.channels.cache.get('761423189338750976').send(`(${curtime}) - ${msg.author.tag} DELETED \"${msg}\" in #${msg.channel.name}.`);
    var attached = (msg.attachments)
    if(attached.size>0) {
        for(var i=0; i<attached.size; i++) {
            client.channels.cache.get('761423189338750976').send(`(${curtime}) - ${msg.author.tag} ALSO DELETED ${attached.array()[0].url} in #${msg.channel.name}.`);
        }
    }
});

/*client.on("message", msg=> {
    if(msg.content.length>1) {
        msg.delete();

    }
})*/

client.on("message", msg => {
    let charArray = msg.content.split("");
    let wordArray = msg.content.split(/([_\W])/);

    //console.log(wordArray);
    //let filterChars = ["e", "E","a","A"];
    let filterWords = [":magnet:"];

    for(var i=0; i<filterWords.length; i++) {
        if(wordArray.includes(filterWords[i])) {
            msg.delete();
            break;
        }
    }

    /*for(var i=0; i<filterChars.length; i++) {
        if(charArray.includes(filterChars[i])) {
            msg.delete();
            break;
        }
    }*/

});


client.on("message", msg => {
    if(msg.author.id == "753282991970713652") return;
    let lowered = " "+msg.content.toLowerCase();
    if (lowered.includes(" imma ")) {
        var splitmsg = msg.content.slice(lowered.indexOf(' imma ') + 5);
        if(splitmsg.toLowerCase().includes("aadharsh")) return;
        if (splitmsg.length<=32) msg.member.setNickname(splitmsg);
        msg.channel.send(`Hi, ${splitmsg}! I'm Corius :)`);
    } else if (lowered.includes(" im ")) {
        var splitmsg = msg.content.slice(lowered.indexOf(' im ') + 3);
        if(splitmsg.toLowerCase().includes("aadharsh")) return;
        if (splitmsg.length<=32) msg.member.setNickname(splitmsg);
        msg.channel.send(`Hi, ${splitmsg}! I'm Corius :)`);
    } else if (lowered.includes(" i am ")) {
        var splitmsg = msg.content.slice(lowered.indexOf(' i am ') + 5);
        if(splitmsg.toLowerCase().includes("aadharsh")) return;
        if (splitmsg.length<=32) msg.member.setNickname(splitmsg);
        msg.channel.send(`Hi, ${splitmsg}! I'm Corius :)`);
    } else if (lowered.includes(" i\'m ")) {
        var splitmsg = msg.content.slice(lowered.indexOf(" i'm ") + 4);
        if(splitmsg.toLowerCase().includes("aadharsh")) return;
        if (splitmsg.length<=32) msg.member.setNickname(splitmsg);
        msg.channel.send(`Hi, ${splitmsg}! I'm Corius :)`);
    }

});

/*
client.on("message", msg => {
    if(msg.author.id == "753282991970713652") return;

    if (msg.content.toLowerCase().includes("idk")) {
        msg.channel.send(`It's okay to not know! How can I help you?`);
    }

});
client.on("message", msg => {
    if(msg.author.id == "753282991970713652") return;

    if (msg.content.toLowerCase().includes("i hate")) {
        msg.channel.send(`Don't worry, I <3 you ;)`);
    }

});
*/
/*
client.on("message", msg => {
    if(msg.author.id == "753282991970713652") return;
    let lowered = msg.content.toLowerCase();
    let laughing = ['lol','lmao','lmfao','lul','|o|','|0|','hah'];
    for (var i = 0; i<laughing.length; i++) {
        if(lowered.includes(laughing[i])) {
            msg.channel.send('he he he', {tts: true});
        }
    }

});*/

client.afk = new Map();
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = process.env.PREFIX;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  // return message.channel.send(`**${user_tag}** is currently afk. Reason: ${key.reason}`);
  // return message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000));

  if (message.content.includes(message.mentions.members.first())) {
    let mentioned = client.afk.get(message.mentions.users.first().id);
    if (mentioned) message.channel.send(`**${mentioned.usertag}** is currently afk. Reason: ${mentioned.reason}`);
  }
  let afkcheck = client.afk.get(message.author.id);
  if (afkcheck) return [client.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000))];

});

client.login(process.env.TOKEN);
