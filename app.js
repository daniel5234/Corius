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

const fetch = require('node-fetch')
const { Slash } = require("discord-slash-commands");
const slash = new Slash({
    client: client
})
const embed = new Discord.MessageEmbed();
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
});/*

slash.on("create", (d) => {
    console.log(`Command created: ${JSON.parse(d.config.data).name}`)
})
/*
const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const client = new Discord.Client();
const { token } = require('./config');

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
*/


client.login(process.env.TOKEN);
