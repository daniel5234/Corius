exports.run = (client, msg, args) => {
    //if(!msg.member.roles.cache.has('753107491490889790'))return;
    //msg.channel.send('Pong!').catch(console.error);
    msg.channel.send(`Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
};

exports.help = {
    name: 'ping'
};
