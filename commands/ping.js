exports.run = (client, msg, args) => {
    //if(!msg.member.roles.cache.has('753107491490889790'))return;
    //msg.channel.send('Pong!').catch(console.error);
    msg.channel.send(`Ping: \`${Date.now() - msg.createdTimestamp}ms.\``);
};

exports.help = {
    name: 'ping'
};
