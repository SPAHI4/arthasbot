import Telegraf from 'telegraf';
import { karmaChange, getKarma } from './features/karma';
import config from './config'
import detectUser from './middlewares/detectUser'
import detectChat from './middlewares/detectChat'
import groupChatsOnly from './middlewares/groupChatsOnly'
import initKarmaInChat from './middlewares/initKarmaInChat'


const bot = new Telegraf(config.bot.token);

// bot.use(Telegraf.log()); // debug
bot.use(groupChatsOnly, detectChat, detectUser, initKarmaInChat);

bot.command('start', ctx => ctx.reply('хуярт'));

bot.command('me', getKarma);
bot.hears(['+', '-', '👍', '👎'], karmaChange);

bot.startPolling();