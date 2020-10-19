exports.run = (client, msg, args) => {
    if(msg.author.id==='751170387722633247') {
        msg.delete();
        msg.channel.send('[(:^_^:)]').catch(console.error);
    }
};

exports.help = {
    name: 'mehface'
};
