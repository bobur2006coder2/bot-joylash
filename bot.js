const { Telegraf } = require("telegraf")
const bot = new Telegraf("6653286311:AAEtzsppeLVsUMPiKGs8MEi5xLgl5SQAMaI")

bot.start(ctx => {
    ctx.reply(`salom dunyo`)
})

bot.launch();