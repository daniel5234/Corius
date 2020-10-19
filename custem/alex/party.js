exports.run = (client, msg, args) => {
    if(msg.author.id==='524989303206707214') {
        msg.delete();
        msg.channel.send('(งツ)ว').catch(console.error);
    }
};

exports.help = {
    name: 'party'
};
