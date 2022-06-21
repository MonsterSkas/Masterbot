const express = require('express');
const app = express();

const discord = require('discord.js');
//const dotenv = require('dotenv');
//dotenv.config();

app.listen(3000, () => {

    console.log('Project is running!');
});

app.get('/', (req, res) => {

    res.send('Hello World!');
})

const client = new discord.Client({

    intents: [

        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES,
        discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

client.on('ready', () => {

    console.log("Bot Ready!");
})

//COMMAND HANDLER
const fs = require('fs');

client.commands = new discord.Collection();

const commands = fs.readdirSync(`./Commands/`).filter(file => file.endsWith('.js'));

for (file of commands) {
    
    const cmd = require(`./Commands/${file}`);

    client.commands.set(cmd.name, cmd);
}

//PREFIX
const prefix = 'm.';

//HELP
client.on('messageCreate', (message) => {
    
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'help') {

        client.commands.get('help').execute(message, args, discord);
    }
});

//PING PONG
client.on('messageCreate', (message) => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    
    if (command == 'ping') {

        client.commands.get('ping').execute(message, args, discord);
    }
});

//AVATAR
client.on('messageCreate', (message) => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'avatar') {
        
        client.commands.get('avatar').execute(message, args, discord);
    }
});

//MEMBERCOUNT
client.on('messageCreate', (message) => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'mc' || command == 'membercount') {

        client.commands.get('mc').execute(message, args, discord);
    }
});

//PURGE
client.on('messageCreate', (message) => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).split(' ');
    let command = args.shift().toLowerCase();

    if (command == 'purge') {
        
        client.commands.get('purge').execute(message, args, discord);
    }
});

client.login(process.env.TOKEN).then(() => {

    client.user.setPresence({

        activities: [{

            name: 'Killing programmers',
            type: 'PLAYING'
        }],
        status: 'online'
    });
});