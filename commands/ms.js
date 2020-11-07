const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');
const talkedRecently = new Set();

exports.run = (client, msg, args) => {
	
	
	if (talkedRecently.has(msg.author.id)&&msg.author.id!="716345121326760036") {
           msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {		
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
			
        talkedRecently.add(msg.author.id);
        setTimeout(() => {talkedRecently.delete(msg.author.id)}, 60000);
    }
	
	

};

exports.help = {
    name: 'ms'
};
