const premium = require("../models/premium")
module.exports = {

    description: 'Premium Kullanıcı işlemleri',
    options: [
        {
            name: 'üye',
            description: 'Premium ekle',
            type: 'USER',
            required: true
           
        },
    ],
    run: async (client, interaction) => {
      const {botsahip} = require("../config.json");
 if(interaction.member.id == botsahip){
        const üye = interaction.options.getMember('üye');
        const c = await premium.findOne({ user: üye.id })
        if (!c) {
            await premium.create({ user: üye.id });
            return interaction.reply({ content: `${üye} isimli kullanıcı Premium üyeliğine dahil edildi`})
        } else {
            return interaction.reply({ content: "Bu kullanıcının zaten Premium üyeliği bulunmakta"})
        }
    } else{
            interaction.reply('Bu komut sadece bot sahipleri kullanabilir')
        }
        
    }
};
