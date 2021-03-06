const { MessageEmbed } = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has(ayarlar.üstYönetim) && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embeds: [new MessageEmbed() .setDescription("Komutu kullanabilmek için geçerli yetkin olmalı.")]})
        let yt = message.guild.roles.cache.filter(s => s.permissions.has("ADMINISTRATOR"))
        let rolyt = message.guild.roles.cache.filter(s => s.permissions.has("MANAGE_ROLES"))
        let knlyt = message.guild.roles.cache.filter(s => s.permissions.has("MANAGE_CHANNELS"))

        message.channel.send({embeds: [new MessageEmbed().setDescription(`Sunucuda Yönetici olan roller; **${yt.size}**
        ${yt.map(s => `${message.guild.roles.cache.get(s.id)}`)}
        Sunucuda Rol yönet olan roller; **${rolyt.size}**
        ${rolyt.map(s => `${message.guild.roles.cache.get(s.id)}`)}
        Sunucuda Kanal yönet olan roller; **${knlyt.size}**
        ${knlyt.map(s => `${message.guild.roles.cache.get(s.id)}`)}`).setFooter(ayarlar.footer)]})

}
  exports.conf = {
    aliases: ["rolkontrol"],
    };
    
    exports.help = {
    name: "rolkontrol",
    };  