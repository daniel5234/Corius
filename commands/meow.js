const Discord = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, msg, args) => {
    if(msg.member.roles.cache.has('754062758076743790'))return;
    if(msg.member.roles.cache.has('754062754813444214'))return;
    let meow = await fetch('http://aws.random.cat/meow').then(res => res.json()).then(json => json.file);
    console.log(meow);

    let embed = new Discord.MessageEmbed()

    embed.setAuthor(msg.member.user.tag, msg.member.user.avatarURL)
        .setColor('#0xdd9323')
        .setImage(meow)
        .setFooter('A random cat!!')
        .setTimestamp();

    msg.channel.send(embed);

};

exports.help = {
    name: 'meow'
};
