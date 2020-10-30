exports.run = (client, msg, args) => {
    
    if(msg.member.user.id==="524989303206707214") return;

    msg.channel.send('Hello? Anyone There?', {tts: true});


};

exports.help = {
    name: 'att'
};
