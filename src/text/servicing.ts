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

// import { Context, Markup } from 'telegraf';
// import createDebug from 'debug';

// const debug = createDebug('bot:greeting_text');

// const replyToMessage = (ctx: Context, messageId: number, text: string) =>
//   ctx.reply(text, {
//     reply_to_message_id: messageId,
//   });

// const servicing = () => async (ctx: Context) => {
//   debug('Triggered "service" text command');

//   const messageId = ctx.message?.message_id;
//   const userName = `${ctx.message?.from.first_name}`;

//   if (messageId) {
//     await replyToMessage(ctx, messageId, `
//     يقدم مركز بابلون مجموعة من الخدمات التعليمية والتكنلوجية المتنوعةابرزها
//   `);

//   // Use inline keyboard for services
//   await ctx.reply('Choose a service:', {
//     reply_markup:Markup.inlineKeyboard([
//       Markup.button.callback('Website Creation', 'website'),
//       Markup.button.callback('Host Services', 'hosting'),
//       Markup.button.callback('Social Marketing', 'instagram'),
//       Markup.button.callback('Training Courses', 'web'),
//       Markup.button.callback('Telegram Bots', 'telegram'),
//     ]) as any,
//   });
//   }
// };

// export { servicing };

// import { Context, Markup } from 'telegraf';
// import createDebug from 'debug';

// const debug = createDebug('bot:greeting_text');

// const replyToMessage = (ctx: Context, messageId: number, text: string) => {
//   ctx.reply(text, {
//     reply_to_message_id: messageId,
//   });
// };

// const servicing = () => async (ctx: Context) => {
//   const messageId = ctx.message?.message_id;

//   if (messageId) {
//     // You can use replyToMessage if needed
//     replyToMessage(ctx, messageId, `
//       يقدم مركز بابلون مجموعة من الخدمات التعليمية والتكنلوجية المتنوعة ابرزها
//     `);

//     // Use inline keyboard for services
//     await ctx.reply('Choose a service:', {
//       ...Markup.inlineKeyboard([
//         Markup.button.callback('/Website Creation', '/website'),
//         Markup.button.callback('/Host Services', 'hosting'),
//         Markup.button.callback('/Social Marketing', 'instagram'),
//         Markup.button.callback('Training Courses', 'web'),
//         Markup.button.callback('Telegram Bots', 'telegram'),
//       ]),
//     });
//   }
// };

// // Handle button clicks
// const handleButtonClick = () => async (ctx: Context) => {
//   const command =(ctx.callbackQuery as any).data;

//   if (command) {
//     switch (command) {
//       case '/website':
//         // Handle Website button click
//         await ctx.reply('You clicked the Website Creation button!');
//         break;
//       case 'hosting':
//         // Handle Host Services button click
//         await ctx.reply('You clicked the Host Services button!');
//         break;
//       case 'instagram':
//         // Handle Social Marketing button click
//         await ctx.reply('You clicked the Social Marketing button!');
//         break;
//       case 'web':
//         // Handle Training Courses button click
//         await ctx.reply('You clicked the Training Courses button!');
//         break;
//       case 'telegram':
//         // Handle Telegram Bots button click
//         await ctx.reply('You clicked the Telegram Bots button!');
//         break;
//       default:
//         break;
//     }
//   }
// };

// export { servicing, handleButtonClick };

