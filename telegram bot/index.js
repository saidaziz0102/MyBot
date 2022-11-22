const telegramBot = require('node-telegram-bot-api');
const token = '5834744716:AAGxJyo2SgzYZCMj3UKxU7QP9Z242lfiak0';

const bot = new telegramBot(token, {
    polling: true
})

const arrMessagesBot = [ 'Nma kere jalab kech boganda?', 'Nma kere jalab kech boganda', 'Nma gap xatobow?'];

const roundMatch = ( max, min) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

bot.on('message', msg => {
    const {id: id, first_name: userName} = msg.chat;

    if(/Hello/gi.test(msg.text)) {
        bot.sendMessage(id, `${arrMessagesBot[roundMatch(2, 0)]} ${userName}`);
    };
});