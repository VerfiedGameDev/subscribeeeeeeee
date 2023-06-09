const { Client, ChatInputCommandInteraction, Message, EmbedBuilder, SlashCommandBuilder } = require("discord.js")
const d = require(`../../Data/data.js`)
module.exports = {
    name: "help",
    description: "Shows the ping of the bot",
    category: "information",
    /**
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
        new SlashCommandBuilder()
        const { ws } = client
        const { options } = interaction
    
        const ping = ws.ping
              const embed = new EmbedBuilder()
              .setTitle(`${d.fri} F.R.I.D.A.Y: \`Operational, Chief\`` )
            .addFields(
            { name: '__Features:__', value: `${d.desc}`},
            { name: '__Development Council__', value: '\`Itachi Bot Support Founders Team\`'},
            { name: 'Projects', value: `${d.proje}` }
                )
            interaction.reply({ embeds: [embed] });
    }

}