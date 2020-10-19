const randomPuppy = require('random-puppy');

module.exports.run = async (bot, msg, args) => {

    let reddit = [
        "dankmemes",
        "wholesomememes",
        "amongus"    
    ];

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    msg.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await msg.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => msg.channel.stopTyping());
    }).catch(err => console.error(err));

};

module.exports.help = {
    name: 'meme',
};
