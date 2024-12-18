import { Telegraf, Markup } from 'telegraf'

const token = '7630080560:AAEnSo74k4986bD-2BqJ2TYBvD28w1opg0Y'
const webAppUrl = 'https://lizzart-bot.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Hello! Press to start the app',
    Markup.inlineKeyboard([
      Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}`),
    ])
  )
})

bot.launch()
