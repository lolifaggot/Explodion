const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
randomPuppy('animemes')
.then(url => {
const embed = new Discord.RichEmbed()
.setImage(url)
.setColor('#ff9900')
return message.channel.send({ embed });
})
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['amemes'],
permLevel: 0
};
exports.help = {
name: 'animemes',
description: 'Sends a random post from r/animemes',
usage: 'animemes'
};
