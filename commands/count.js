const countGame = new Set();
const {prefix} = require ('../config');
var went = "";
var mul = 1;

exports.run = async (client, msg, args) => {
    let cmdName = client.commands.get('count', 'help.name');

    if (msg.member.user.id===716345121326760036){
    //TAKE TURNS
    } else if (msg.member.user.tag===went) {
        countGame.clear();
        went="";
        return msg.channel.send('You can\'t go twice in a row! Start again.');

    }

    let num = parseInt(args[0]);
    let type = parseInt(args[1]);
    if (!num) return msg.channel.send(`Usage: \`${prefix+cmdName}\` <num> [type]\nTypes: \npositive = multiples\nnegative = exponents`);

    // game doesn't exist--> add user to set, message new game started
    if(countGame.size === 0) {
        if (!type) return msg.channel.send(`Include the game type.`)
        mul = type;
        if (num !== mul&&mul>0) return msg.channel.send(`The game must start at **${mul}**!`);
        if (num !== 1&&mul<0) return msg.channel.send(`The game must start at **1^${-mul}**!`);
        await countGame.add(num);
        went = msg.member.user.tag;
        return msg.channel.send(`**${msg.member.user.tag}** has started a game! Current game is at **${num}**.`);


    //user enters incorrect number, end game(clear set)
    } else if (mul>0&&num !== (countGame.size +1)*mul) {

        countGame.clear();
        went = "";
        return msg.channel.send(`:frowning: **${msg.member.user.tag}** has ended the game by entering **${num}**.`);


    } else if (mul<0&&num !== (countGame.size +1)**(-mul)) {

        countGame.clear();
        went = "";
        return msg.channel.send(`:frowning: **${msg.member.user.tag}** has ended the game by entering **${num}**.`);

    //if none of those happen, add user to set
    } else {

        await countGame.add(num);
        went = msg.member.user.tag;
        //console.log(countGame.size);
        return msg.channel.send(`**${msg.member.user.tag}** has counted! Game is now at **${num}**.`);

    }

};

exports.help = {
    name: 'count'
};
