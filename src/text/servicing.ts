// import { Context } from 'telegraf';
// import createDebug from 'debug';

// const debug = createDebug('bot:greeting_text');

// const replyToMessage = (ctx: Context, messageId: number, string: string) =>
//   ctx.reply(string, {
//     reply_to_message_id: messageId,
//   });

// const servicing = () => async (ctx: Context) => {
//   debug('Triggered "service" text command');

//   const messageId = ctx.message?.message_id;
//   const userName = `${ctx.message?.from.first_name}`;

//   if (messageId) {
//     await replyToMessage(ctx, messageId, `
//     يقدم مركز بابلون مجموعة من الخدمات التعليمية والتكنلوجية المتنوعةابرزها
//     /Website creation. انشاء مواقع الكترونية
//     /Host servises. خدمات الاستضافة
//     /Social Marketing. التسويق الالكتروني
//     /Training courses. الدورات التدريبية
//     /Telegram Bots. روبوتات تيليغرام
    

//   ` );
//   }
// };

// export { servicing };

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

import { Context, Markup } from 'telegraf';
import createDebug from 'debug';
import { website, host, Social } from '../commands';
const debug = createDebug('bot:greeting_text');

const replyToMessage = (ctx: Context, messageId: number, text: string) => {
  ctx.reply(text, {
    reply_to_message_id: messageId,
  });
};

const handleButtonClick = () => async (ctx: Context) => {
  const callbackQuery = ctx.callbackQuery;

  if (callbackQuery) {
    const command = (ctx.callbackQuery as any).data;
    console.log('Callback Query Data:', command);

    if (command) {
      // Handle button clicks based on the command
      switch (command) {
        case 'website':
          // Handle the 'website' command
          await ctx.answerCbQuery(); // Acknowledge the button click
          await website()(ctx);
          break;
        case 'host':
          // Handle the 'host' command
          await ctx.answerCbQuery(); // Acknowledge the button click
          await host()(ctx);
          break;
        case 'social':
          // Handle the 'social' command
          await ctx.answerCbQuery(); // Acknowledge the button click
          await Social()(ctx);
          break;
        // Add cases for other commands
        default:
          break;
      }
    }
  }
};

const servicing = () => async (ctx: Context) => {
  debug('Triggered "service" text command');

  const messageId = ctx.message?.message_id;

  if (messageId) {
    await replyToMessage(ctx, messageId, `
      يقدم مركز بابلون مجموعة من الخدمات التعليمية والتكنلوجية المتنوعة ابرزها
    `);

    // Use inline keyboard for services
    await ctx.reply('Choose a service:', {
      ...Markup.inlineKeyboard([
        Markup.button.callback('Website Creation', 'website'),
        Markup.button.callback('Host Services', 'host'),
        Markup.button.callback('Social Marketing', 'social'),
      ]),
    });
  }
};

export { servicing, handleButtonClick };
