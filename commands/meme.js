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
            }).then(function(message) { message.react(message.guild.emojis.find('name', "thumbsup"))});
            .catch(err => console.error(err));

};

module.exports.help = {
    name: 'meme',
};
