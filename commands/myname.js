exports.run = (client, msg, args) => {
    //if(!msg.member.roles.cache.has('753107491490889790'))return;
    const name = msg.member.displayName;
    msg.delete();
    msg.channel.send(`Your name is ${name}.`);

};

exports.help = {
    name: 'myname'
};
