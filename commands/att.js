exports.run = (client, msg, args) => {

    msg.channel.send('Hello? Anyone There?', {tts: true});


};

exports.help = {
    name: 'att'
};
