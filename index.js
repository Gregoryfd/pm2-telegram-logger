const pm2 = require('pm2');
const config = require('./config')
const telegramSend = require('./telegram-send')

const messageTemplate = ({name, data}) => `
Процесс: ${name}
Ошибка: ${data}
`

pm2.launchBus((err, bus) => {

  if(!config.bot_token || !config.group_id)
    return console.error('Set config bot_token and group_id');
  
  console.log('pm2-telegram-logger running');
  bus.on('log:err', ({ data, process: { name } }) => {
    if(name === 'pm2-telegram-logger')
      return;
    telegramSend(messageTemplate({ data, name }));
  })
  
})


