# PM2 модуль для отправки логов ошибок в группу telegram

### Установка и запуск
```
pm2 set pm2-telegram-logger:bot_token <YOUR BOT TOKEN> 
pm2 set pm2-telegram-logger:group_id <YOUR CHAT ID (only numbers)> 
pm2 install .
```


### Проверка работоспособности
```
pm2 logs pm2-telegram-logger
```



