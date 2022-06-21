module.exports = {

    name: 'purge',
    description: 'Bulk delete messages',

    async execute(message, args) {
        
        if (!message.member.permissions.has('MANAGE_MESSAGES' || 'ADMINISTRATOR')) {
        
            return message.reply(`You don't have the **permission** to **purge messages**`).catch(err => { return });

        } else if (!args[0]) {
            
            return message.reply('Please specify the **number of messages** you want to delete!').catch(err => { return });

        } else if (isNaN(args[0])) {

            message.reply(`What you typed in is **not a number**, what are you doing LOL`).catch(err => { return });

        } else if (args[0] >= 1000) {

            message.reply(`I cant delete more than 999 messages at a time, pls forgive me :/`).catch(err => { return });

            } else {
                
            await message.delete();

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {

                message.channel.bulkDelete(messages).catch(err => {
                    
                    return message.channel.send(`I cannot delete messages older than **14 days**`).catch(err => { return });
                })
            })
        }
    }
}