const { Telegraf } = require('telegraf')
const axios = require('axios')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply(`👋 Salut ${ctx.from.first_name}\nBienvenue sur OVL-BOT-MV\nTape /menu`))

bot.command('menu', (ctx) => {
  ctx.replyWithMarkdown(`
*🤖 OVL-BOT-MV Commandes*

/play + nom - Télécharger musique
/tiktok + lien - Télécharger TikTok  
/sticker - Réponds à une image pour créer un sticker
/tagall - Mentionner tout le monde

Bot par MV 🇧🇫
  `)
})

bot.command('play', async (ctx) => {
  const text = ctx.message.text.split(' ').slice(1).join(' ')
  if(!text) return ctx.reply('Donne le nom de la musique. Ex: /play Didi B')
  ctx.reply(`🔍 Je cherche : ${text}...`)
})

bot.launch()
console.log('Bot lancé')
