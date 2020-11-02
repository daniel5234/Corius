exports.run = (client, msg, args) => {
    //if(!msg.member.roles.cache.has('753107491490889790'))return;
    var thingy = "```\n                                     /———————————>\n                                   /\n                                 /                                  GET R/WOOSHED\n                               /                   you\n                  the joke ---/                    O\n                                                  /|\\n                                                  /\   \n```"
    msg.channel.send(thingy).catch(console.error);
};

exports.help = {
    name: 'woosh'
};
