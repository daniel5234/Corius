//const { prefix } = require('../config.js');

/*module.exports = (client, msg) => {
    if (msg.author.bot) return;
    if (msg.content.indexOf('im')!== 0) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    //const command = args.shift().toLowerCase();
    const message = args.join(' ');

    msg.channel.send(`Hi :P LOL advait was here, ${message}`);
};*/

module.exports = (client, msg) => {
    if (msg.author.bot) return;
    if (msg.content.indexOf(process.env.PREFIX)!== 0) return;

    const args = msg.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;

    cmd.run(client, msg, args);
};
