const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');


exports.run = (client, msg, args) => {
	
	const row = parseInt(args[0]);
	const column = parseInt(args[1]);
	const mine = parseInt(args[2]);
	if (!row||!column||!mine) {
		return msg.channel.send("`!ms <rows> <columns> <mines>`")
	}
	if (row>12||column>12) return msg.channel.send("Row/Column size too large. Max: 12");
    const minesweeper = new Minesweeper({
    	rows: row,
    	columns: column,
    	mines: mine,
    	emote: 'boom',
	spaces: true,
    	zeroFirstCell: true,
	revealFirstCell: true,
    	returnType: 'emoji',
	});
	var board = minesweeper.start();
	return board ? msg.channel.send(board) : msg.channel.send(':warning: You have provided invalid data.');

};

exports.help = {
    name: 'ms'
};
