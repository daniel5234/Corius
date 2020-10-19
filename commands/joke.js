const Discord = require('discord.js');
const {Random} = require('something-random-on-discord');
const random = new Random();

exports.run = async (client, msg, args) => {

    let data = await random.getJoke();
    msg.channel.send(data);

};

exports.help = {
    name: 'joke'
};
