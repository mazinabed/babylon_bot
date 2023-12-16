// import { Telegraf } from 'telegraf';

// import { about, Bots, host, Social, Trainging, website } from './commands';
// import { greeting, servicing } from './text';
// import { VercelRequest, VercelResponse } from '@vercel/node';
// import { development, production } from './core';

// const BOT_TOKEN = process.env.BOT_TOKEN || '';
// const ENVIRONMENT = process.env.NODE_ENV || '';

// const bot = new Telegraf(BOT_TOKEN);

// bot.command('about', about());
// bot.command('Services', servicing());
// bot.command('Website', website());
// bot.command('Host', host());
// bot.command('Social', Social());
// bot.command('Training', Trainging());
// bot.command('Telegram',Bots())
// bot.on('message', greeting());





// //prod mode (Vercel)
// export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
//   await production(req, res, bot);
// };
// //dev mode
// ENVIRONMENT !== 'production' && development(bot);
import { Telegraf } from 'telegraf';
import { servicing, handleButtonClick } from './text';
import { website, host, Social } from './commands';

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const bot = new Telegraf(BOT_TOKEN);

// Register commands
bot.command('start', (ctx) => {
  // Handle the start command here
  // You can provide a welcome message or redirect to the /services command, for example
  ctx.reply('Welcome to Babyloncenter! Type /services to see available services.');
});

bot.command('website', website());
bot.command('host', host());
bot.command('social', Social());

// Register text command
bot.command('services', servicing());

// Register button click handler
bot.action(/.*/, handleButtonClick());

bot.launch();
