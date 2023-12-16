import { Telegraf } from 'telegraf';

import { about, Bots, host, Social, Trainging, website } from './commands';
import { greeting, servicing,handleButtonClick } from './text';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { development, production } from './core';

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

const bot = new Telegraf(BOT_TOKEN);

// Register the handleButtonClick function as a command handler
bot.command('website', handleButtonClick());
bot.command('hosting', handleButtonClick());
bot.command('instagram', handleButtonClick());
bot.command('web', handleButtonClick());
bot.command('telegram', handleButtonClick());

// bot.command('about', about());
bot.command('Services', servicing());
// bot.command('Website', website());
// bot.command('Host', host());
// bot.command('Social', Social());
// bot.command('Training', Trainging());
// bot.command('Telegram',Bots())
bot.on('message', greeting());





//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};
//dev mode
ENVIRONMENT !== 'production' && development(bot);
