const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');


exports.run = async (client, msg, args) => {

    
    
    const minesweeper = new Minesweeper({
    	rows: 8,
    	columns: 8,
    	mines: 8,
    	emote: 'boom',
    	zeroFirstCell: true,
    	returnType: 'emoji',
	});

	const board = minesweeper.start();
	msg.channel.send(board);

};

exports.help = {
    name: 'ms'
};
