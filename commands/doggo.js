const Discord = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, msg, args) => {
    if(msg.member.roles.cache.has('754062758076743790'))return;
    if(msg.member.roles.cache.has('754062754813444214'))return;
    let doggo = await fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(json => json.message);
    console.log(doggo);

    let embed = new Discord.MessageEmbed()

    embed.setAuthor(msg.member.user.tag, msg.member.user.avatarURL)
        .setColor('0xdd2423')
        .setImage(doggo)
        .setFooter('A random dog!!')
        .setTimestamp();

    msg.channel.send(embed);

};

exports.help = {
    name: 'doggo'
};
