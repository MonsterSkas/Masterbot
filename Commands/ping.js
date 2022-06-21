module.exports = {

    name: 'ping',
    description: 'pong',
    async execute(message, args, discord) {
        
        const timeTaken = Date.now() - message.createdTimestamp;

        let pingEmbed = new discord.MessageEmbed()
            .setColor('#ff6052')
            .setTitle('Pong :ping_pong:')
            .setDescription(`Time : ${timeTaken} ms`);
        
        message.channel.send({ embeds: [pingEmbed] });
    }
}