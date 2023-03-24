const fetch = require('node-fetch');
const config = require('./config');

module.exports = async message => {
  
  const botToken = config.bot_token;
  const chatId = -Math.abs(config.group_id);

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
  if(!response.ok){
    const data = await response.text();
    throw new Error(`Error when sending to Telegram ${data}`);
  }

  const data = await response.json();
  return data;
}

