exports.run = (client, msg, args) => {
    if(!msg.member.roles.cache.has('753107491490889790'))return;
    msg.delete();
    msg.channel.send('┌П┐(ಠ_ಠ)').catch(console.error);
};

exports.help = {
    name: 'fu'
};
