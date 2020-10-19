var abc = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
var assum = [
    "There was an old farmer who lived on a rock.",
    "He sat in the meadow just shaking his fist",
    "At some boys who down by the crick",
    "Their feet in the water, their hands on their marbles",
    "And play things and at half past four",
    "There came a young lady she looked like a pretty young creature",
    "She sat on the grass",
    "She pulled up her dress and she showed them her rumples",
    "And laces and white fluffy duck",
    "She said she was learning a new way to bring",
    "Up her children so they would not spit",
    "While the boys in the barnyard were shoveling refuse",
    "And litter from yesterday's hunt",
    "While the girl in the meadow was rubbing her eyes",
    "At the fellow down by the dock",
    "He looked like a man with a sizable home",
    "In the country with a big fence out front",
    "If he asked her politely she'd show him her little",
    "Pet dog who was subject to fits",
    "And maybe she'd let him grab hold of her small",
    "Tender hands with a movement so quick",
    "And then she'd lean down to suck on his candy",
    "So tasty made of butterscotch",
    "And then he spread whipped cream all over her cookies",
    "That she had left out on her shelf",
    "If you think this is dirty",
    "You can go Fuck yourself"
];
var real = [
    "There was an old farmer who lived on a rock.",
    "He sat in the meadow just shaking his cock",
    "At some boys who down by the crick",
    "Their feet in the water, their hands on their dick",
    "And play things and at half past four",
    "There came a young lady she looked like a pretty young whore",
    "She sat on the grass",
    "She pulled up her dress and she showed them her ass",
    "And laces and white fluffy duck",
    "She said she was learning a new way to fuck",
    "Up her children so they would not spit",
    "While the boys in the barnyard were shoveling shit",
    "And litter from yesterday's hunt",
    "While the girl in the meadow was rubbing her cunt",
    "At the fellow down by the dock",
    "He looked like a man with a sizable cock",
    "In the country with a big fence out front",
    "If he asked her politely she'd show him her cunt",
    "Pet dog who was subject to fits",
    "And maybe she'd let him grab hold of her tits",
    "Tender hands with a movement so quick",
    "And then she'd lean down to suck on his dick",
    "So tasty made of butterscotch",
    "And then he spread whipped cream all over her crotch",
    "That she had left out on her shelf",
    "If you think this is dirty",
    "You can go Fuck yourself"
];
var ping = ["1","2","3"];
var portal = [
    "It's a place a happy place",
    "Where penguins waddle around",
    "Waddling and just singing",
    "and making happy sounds",
    "It's where to go",
    "To learn and grow",
    "The greatest place in town",
    "Everybody knows that it's Portal",
    "Everybody knows that it's Portal",
    "It's portal, It's portal, for fun and love and joy",
    "It's portal, It's portal",
    "Everybody knows that it's portal",
    "Everybody knows that it's portal",
    "ICEBERGS SOLD SEPARATELY"
];
exports.run = (client,msg,args) => {
    if((msg.author.id !== "716345121326760036")&&(msg.author.id !== "367040882815533056")&&(msg.author.id !== "751170387722633247")) return;
    const songName = args.join(' ');
    switch(songName) {
        case "help":
            msg.channel.send("Usage: `!song songName`\nUse `!song list` for list.");
            break;
        case "list":
            msg.channel.send("Songs: Song choices are abc, assumption, reality.");
            break;
        case "abc":
            singSong(abc, 900, msg);
            break;
        case "assumption":
            singSong(assum, 2000, msg);
            break;
        case "reality":
            singSong(real, 1000, msg);
            break;
        case "ping":
            singSong(ping, 1000, msg);
            break;
        case "portal":
            singSong(portal, 1200, msg);
            break;
        default:
            msg.channel.send("Invalid song. Song choices are abc, assumption, reality, portal.");
            break;
    }

};


function singSong(msgs, delay, msg) {
    if (msgs.length < 1) return; // we're done
    var remain = msgs.slice(1);
    var sendRemain = singSong.bind(null, remain, delay, msg);
    msg.channel.send(msgs[0]).then(function() {
        setTimeout(sendRemain, delay);
    });
}

exports.help = {
    name: 'song'
};
