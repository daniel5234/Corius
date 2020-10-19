exports.run = (client, msg, args) => {
    if(msg.author.id==='367040882815533056') {
        msg.delete();
        msg.channel.send('(\\\\ (owo) /)').catch(console.error);
    }
};

exports.help = {
    name: 'owo'
};
