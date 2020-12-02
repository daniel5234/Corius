const randomPuppy = require('random-puppy');

module.exports.run = async (bot, msg, args) => {

    let reddit = [
        "dankmemes",
        "wholesomememes",
        "amongus",
        "engrish"
    ];

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    randomPuppy(subreddit).then(async url => {
            await msg.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(message => {
                    message.react("783566742961258497").then(() => message.react('783567656442920980'))
            })});

};

module.exports.help = {
    name: 'meme',
};
