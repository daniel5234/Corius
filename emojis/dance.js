exports.run = (client, msg, args) => {
    //if(!msg.member.roles.cache.has('753107491490889790'))return;
    msg.delete();
    msg.channel.send('ᕕ(⌐■_■)ᕗ ♪♬').catch(console.error);
};

exports.help = {
    name: 'dance'
};
