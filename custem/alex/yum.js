exports.run = (client, msg, args) => {
    if(msg.author.id==='524989303206707214') {
        msg.delete();
        msg.channel.send('(っ˘ڡ˘ς)').catch(console.error);
    }
};

exports.help = {
    name: 'yum'
};
