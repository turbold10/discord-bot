const { Client, Intents } = require('discord.js');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', () => {
    console.log('connected : ' + client.user.tag)
    client.user.setActivity('Youtube', { type: 'WATCHING' })
})
client.login('OTQ5MjY1NDc3MzcxMzEwMDgw.YiH2Xg.RjiDf03t7mKJj_R9gsKPjqdw7as')

client.on('message', (msg) => {
    if (msg.author === client.user) return
    if (msg.content === 'hi' || msg.content === 'hello') {
        msg.channel.send('hello ' + msg.author.toString() + '👋')
        msg.react('🙌')
        return
    }
    if (msg.content === 'bye') {
        msg.channel.send('bye ' + msg.author.toString() + '👋')
        msg.react('👋')
        return
    }
    if (msg.content === '$time') {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;
        msg.reply('okay')
        msg.channel.send(`Current time is : ${dateTime}`)
        return
    }
    msg.channel.send(msg.author.toString() + 'said : ' + msg.content)
    msg.react("👍")
})