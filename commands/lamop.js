exports.run = (client, msg, args) => {
    //if(!msg.member.roles.cache.has('753107491490889790'))return;
    msg.channel.send('https://tenor.com/view/dog-mop-shaggy-wet-floor-gif-14991672').catch(console.error);
};

exports.help = {
    name: 'lamop'
};
