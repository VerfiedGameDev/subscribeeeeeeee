const { MessageEmbed, EmbedBuilder, Client } = require('discord.js');
const client = require('../../Structures/index.js')
const d = require(`../../Data/data.js`)

client.on("guildMemberAdd", async(member) => {

    const welcomeChannelId = "1084049828402704386"


    const embed = new EmbedBuilder()
    .setTitle(`A New Log-In Was Detected! ${d.ping}`)
    .setDescription(`\**${member}\** Logged-In Into \**${d.logo} ${d.org}\**`)
    .setThumbnail(`${d.hi}`)
    .addFields(
      { name: ` ${d.owner} __Server Owner__`, value: `${d.owner}` },
      { name: ` ${d.greet} __Greetings From__`, value: `${d.role1} \n${d.role2}\n`}
  )


   const channel = member.guild.channels.cache.get(welcomeChannelId)
       
    channel.send({ embeds: [embed] });



    channel.send().catch(err => {
        return;
    })
       
   
}

);






