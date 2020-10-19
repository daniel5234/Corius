const countGame = new Set();
const {prefix} = require ('../config');
var went = "";

exports.run = async (client, msg, args) => {
    let cmdName = client.commands.get('countsq', 'help.name');

    if (msg.member.user.id===716345121326760036){

    } else if (msg.member.user.tag===went) {
        countGame.clear();
        went="";
        return msg.channel.send('You can\'t go twice in a row! Start again.');

    }

    let num = parseInt(args[0]);
    if (!num) return msg.channel.send(`Usage: \`${prefix+cmdName} <num>\``);

    // game doesn't exist--> add user to set, message new game started
    if(countGame.size === 0) {
        if (num !== 1) return msg.channel.send('The game must start at **1^2**!');
        await countGame.add(num);
        went = msg.member.user.tag;
        var temp = countGame.size*countGame.size;
        return msg.channel.send(`**${msg.member.user.tag}** has started a **SQUARE** game! Current game is at **${temp}**.`);


    //user enters incorrect number, end game(clear set)
} else if (num !== (countGame.size +1)*(countGame.size +1)) {

        countGame.clear();
        went = "";
        return msg.channel.send(`:frowning: **${msg.member.user.tag}** has ended the game by entering **${num}**.`);

    //if none of those happen, add user to set
    } else {

        await countGame.add(num);
        went = msg.member.user.tag;
        //console.log(countGame.size);
        var temp = countGame.size*countGame.size;
        return msg.channel.send(`**${msg.member.user.tag}** has counted! Game is now at **${temp}**.`);

    }

};

exports.help = {
    name: 'countsq'
};
