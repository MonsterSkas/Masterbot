module.exports = {

    name: 'help',
    description: 'Help',

    async execute(message, args, discord) {
        
        const helpEmbed = new discord.MessageEmbed()
            .setColor('#ff6052')
            .setThumbnail("https://cdn.discordapp.com/avatars/988356680955867187/ab37bfe9bb69819a1ff47b328cb595e0.webp?size=512")
            .setTitle("SXI Masterbot Help")
            .setDescription("**SXI Masterbot** is the official bot of The **SXI MASTERS** with simple utility features")
            .addFields(

                { name: "ping", value: "A random command for checking the status of the bot" },
                { name: "avatar", value: "Gives the avatar of an user" },
                { name: "membercount/mc", value: "Shows the current number of members of the server" },
                { name: "purge", value: "Purges messages" }
            )
            .setFooter({
                text: "Total commands 4"
            });
        message.channel.send({ embeds: [helpEmbed] }).catch(err => { return });
    }
}