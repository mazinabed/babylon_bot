import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:greeting_text');

const replyToMessage = (ctx: Context, messageId: number, string: string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });

const servicing = () => async (ctx: Context) => {
  debug('Triggered "service" text command');

  const messageId = ctx.message?.message_id;
  const userName = `${ctx.message?.from.first_name}`;

  if (messageId) {
    await replyToMessage(ctx, messageId, `
    Babyloncenter offers the following services:
    /website - Website Creation
    /hosting - Hosting Services
    /instagram - Instagram Ads
    /web - Web Development Training
  ` );
  }
};

export { servicing };