exports.run = (client, msg, args) => {
    if(!(msg.member.roles.cache.has('753107491490889790'))||(msg.member.roles.cache.has('754062730532618311')))return;
    let num = args.shift();
    let sendmessage=args.join(" ");

    //if(args[0]=='stop') clearTimeout(rep);
    
    if (num>5) return msg.channel.send("no.");

    for(var i =0; i<num; i++) {
        var rep = setTimeout(function(){
            msg.channel.send(sendmessage, {tts: true});

        },1000*i);
        //if(args[0]=='stop') clearTimeout(rep);
    }


};

exports.help = {
    name: 'spam'
};
