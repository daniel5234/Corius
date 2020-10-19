exports.run = (client, msg, args) => {
    if(!(msg.member.roles.cache.has('753107491490889790'))||(msg.member.roles.cache.has('754062730532618311')))return;
    const response = args.join(' ');
    msg.delete();
    msg.channel.send(response);
};

exports.help = {
    name: 'say'
};
