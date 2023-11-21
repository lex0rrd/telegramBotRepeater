const TelegramBot = require('node-telegram-bot-api');

const token = '6441471632:AAHxnU1CvbWalI_VuIKPhmihhkbGZofzDK0';

const bot = new TelegramBot(token, {

    polling: true
    
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;

  bot.sendMessage(chatId, message);
});