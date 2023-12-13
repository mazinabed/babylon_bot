import { Telegraf } from 'telegraf';

import { about } from './commands';
import { greeting, servicing } from './text';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { development, production } from './core';

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

const bot = new Telegraf(BOT_TOKEN);

bot.command('about', about());
bot.command('servicing', servicing());
bot.on('message', greeting());
// bot.on('message', servicing());

//Command to get information about Website Creation
bot.command('website', (ctx) => {
  const websiteInfo = `
    Babyloncenter offers professional website creation services.
    Our team of experts will help you design and develop a customized website tailored to your needs.
  `;
  ctx.reply(websiteInfo);
});

// Command to get information about Hosting Services
bot.command('hosting', (ctx) => {
  const hostingInfo = `
    Babyloncenter provides reliable hosting services to ensure your website is always accessible.
    Our hosting plans include features such as high uptime, security, and excellent customer support.
  `;
  ctx.reply(hostingInfo);
});

// Command to get information about Instagram Ads
bot.command('instagram', (ctx) => {
  const adsInfo = `
    Boost your online presence with Babyloncenter's Instagram Ads services.
    We help create and manage effective ad campaigns to reach your target audience on Instagram.
  `;
  ctx.reply(adsInfo);
});

// Command to get information about Web Development Training
bot.command('web', (ctx) => {
  const trainingInfo = `
    Enhance your web development skills with Babyloncenter's training programs.
    Our training sessions cover various topics, from beginner to advanced levels, to help you succeed in web development.
  `;
  ctx.reply(trainingInfo);
});


//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};
//dev mode
ENVIRONMENT !== 'production' && development(bot);
