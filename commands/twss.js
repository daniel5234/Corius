exports.run = (client, msg, args) => {
    //if(!msg.member.roles.cache.has('753107491490889790'))return;
    msg.channel.send('https://tenor.com/view/michaelscott-theoffice-thats-what-she-said-gif-4084628').catch(console.error);
};

exports.help = {
    name: 'twss'
};
