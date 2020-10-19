let insults = [
    'Shut up, bitch boy.',
    'You look uglier than you looked when you were jacking off 5 minutes ago.',
    'No one cares about you.',
    'I can\'t tell the difference between your mouth and your ass. All that comes out is crap.',
    'Did you know salami is a type of cured sausage ranging from 1 to 2 inches? I told you this cause either way, they\'re much larger than any sausage you\'re used to handling.',
    'This 0% fat cheese reminds me of you, since 0% of you matters.',
    'Didn\'t they name a computer company after your dick? Oh yeah, Microsoft.',
    'Didn\'t they name a computer company after your dick? Oh yeah, Microsoft.',
    'Instead of being such a recluse, try going outside. It\'ll be quite tiring to reach your front door though.',
    'You have more dick in your personality than you do in your pants.',
    'You have more dick in your personality than you do in your pants.',
    'You are the human equivalent of a participation trophy.',
    'You looked so cute in your baby pictures! What happened?',
    'If I wanted to suicide, I\'d jump from your ego to your IQ.',
    'If you could suck your own dick you would officially suck at everything.',
    'You\'re as useless as a white crayon.',
    'Your password, "mydick", is too short.',
    'I would slap you but I prefer not to have shit splattered all over my hand.',
    'You are as straight as x^2+y^2=.... wait, you don\'t know what that is.',
    'I\'d rather let a shark give me a blowjob than kiss you.',
];


exports.run = (client, msg, args) => {
    //if(!msg.member.roles.cache.has('753107491490889790'))return;
    let total = insults.length;
    let random = Math.floor(Math.random()*total);
    msg.channel.send(insults[random]);
};

exports.help = {
    name: 'oof'
};
