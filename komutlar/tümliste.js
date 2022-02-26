const { MessageEmbed } = require("discord.js");
const links = require("../models/links");
const {botsahip} = require("../config.json");
module.exports = {

    description: 'Sistemde kayıtlı linkler',
   
    run: async (client, interaction) => {
        if(interaction.member.id == botsahip){
           try {
            const res = await links.find()
   
            const m = res.map((a) => a.link).join("\n")
            interaction.reply({ embeds: [new MessageEmbed().setDescription(m)] })
           } catch (err) {
               interaction.reply('Link bulunamadı')
           }
        }
        else{
            interaction.reply('Bu komut sadece bot sahipleri kullanabilir')
        }
       
       
        
    } 
};
