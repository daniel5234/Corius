
exports.run = (client, msg, args) => {
    //if(!msg.member.roles.cache.has('753107491490889790'))return;
    msg.channel.send('https://media.discordapp.net/attachments/796065199131328512/797315515596013568/Screen_Shot_2020-12-27_at_4.58.29_PM.png').catch(console.error);
};

exports.help = {
    name: 'killbot'
};
