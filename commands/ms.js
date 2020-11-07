const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');


exports.run = (client, msg, args) => {

    const minesweeper = new Minesweeper({
    	rows: 8,
    	columns: 8,
    	mines: 8,
    	emote: 'boom',
	spaces: true,
    	zeroFirstCell: true,
	revealFirstCell: false,
    	returnType: 'emoji',
	});
	var board = minesweeper.start();
	return board ? msg.channel.send(board) : msg.channel.send(':warning: You have provided invalid data.');

};

exports.help = {
    name: 'ms'
};
