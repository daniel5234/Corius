const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');


exports.run = (client, msg, args) => 
/*
    const minesweeper = new Minesweeper({
    	rows: 8,
    	columns: 8,
    	mines: 8,
    	emote: 'boom',
    	zeroFirstCell: true,
    	returnType: 'emoji',
	});

	var board = minesweeper.start();
	return board ? msg.channel.send(board) : msg.channel.send(':warning: You have provided invalid data.');
*/
	//const minesweeper = new Minesweeper();
//	var mines = minesweeper.start();
	msg.channel.send("hii");
};

exports.help = {
    name: 'ms'
};
