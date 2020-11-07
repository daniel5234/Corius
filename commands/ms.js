const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');


exports.run = async (client, msg, args) => {

    
    
    const minesweeper = new Minesweeper({
    	rows: 12,
    	columns: 16,
    	mines: 20,
    	emote: 'boom',
    	zeroFirstCell: true,
    	returnType: 'code',
	});

 	const board = minesweeper.start();
	msg.channel.send(board);

};

exports.help = {
    name: 'ms'
};
