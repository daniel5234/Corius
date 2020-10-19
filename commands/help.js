exports.run = (client, msg, args) => {
    if(!msg.member.roles.cache.has('753107491490889790'))return;
    msg.channel.send('**Usage:**`!command`\n**Commands:**\ncount, doggo, meow, myname, ping, promote, say\n**Emojis:**\ncry, dance, facepalm, fu, mad, money, rawr, robber, shock, smirk, yay\n**Custom emojis:**\nAdvait: blush, inlove, lazy, owo, wat\nAlex: koala, party, tgif, yum\nAadharsh: mehface').catch(console.error);
};

exports.help = {
    name: 'help'
};
