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
    يقدم مركز بابلون مجموعة من الخدمات التعليمية والتكنلوجية المتنوعةابرزها
    /Website creation. انشاء مواقع الكترونية
    /Host servises. خدمات الاستضافة
    /Social Marketing. التسويق الالكتروني
    /Training courses. الدورات التدريبية
    /Telegram Bots. روبوتات تيليغرام
    

  ` );
  }
};

export { servicing };