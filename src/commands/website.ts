import { Context } from 'telegraf';
import createDebug from 'debug';

import { author, name, version } from '../../package.json';

const debug = createDebug('bot:about_command');

const website = () => async (ctx: Context) => {
  const message = `
  Babyloncenter offers professional website creation services.
  Our team of experts will help you design and develop a customized website tailored to your needs.
`;
  debug(`Triggered "website" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { website };