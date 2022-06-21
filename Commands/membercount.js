module.exports = {

    name: 'mc',
    description: 'Counts the current number of members in the server',

    async execute(message, args, discord) {
        
        let mCount = message.guild.memberCount;

        let mcEmbed = new discord.MessageEmbed()
            .setColor('#ff6052')
            .setTitle('Membercount')
            .setDescription(`We currently have ${mCount} members in our server`);
        
        message.channel.send({ embeds: [mcEmbed] });
    }
}