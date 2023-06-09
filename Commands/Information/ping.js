const { Client, ChatInputCommandInteraction, Message, EmbedBuilder, SlashCommandBuilder } = require("discord.js")
module.exports = {
    name: "ping",
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
              .setTitle(`   Ping Of Nebula-san Scholar!     `)
            .setDescription(`The Ping of The bot is: \`${ping} ms\``)

            interaction.reply({ embeds: [embed] });
    }

}