exports.run = (client, msg, args) => {
    //if(!msg.member.roles.cache.has('753107491490889790'))return;
    msg.channel.send('```\nrawr-alex\nasdf1234-daniel\nms. steak-advait\naadhasrh-guess who\nyoshi-elijah```').catch(console.error);
};

exports.help = {
    name: 'who'
};
