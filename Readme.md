
# Заготовка прокета с Webpack
Реализована подгрузка вектора и растра
Подключена загрузка CSS  
Настроен сервер для разработчика, подробности в `package.json` в разделе script.  
Дополнительные настройки вебпака производятся в файле `webpack.config.js`  
Настройки подключенных пакетов в `package.json`  
#### ВНИМАНИЕ, ЭТО АХУЕННЫЙ ПРОЕКТ
Короче... Вебпак это странная штука, он переваривает только JS и по сути предназначен для серверов
HTML он может переварить только при помощи специального плагина который берет на вход шаблон, и впиздюливает туда выходной файл из вебпака, потом копирует это в выходную папку. Для того чтобы указать этому плагину что любая хуйня подключенная в него является модулем нужно подключать через requier(patch). Вот тут немного не понятно. Для того чтобы забить хуй на загрузчики картинок которые меняют имена и требуют лишних телодвижений можно при помощи плагина на копирование файлов копировать их напрямую в итоговую папку. В таком случае можно подключать их стандартными способами

# Webpack
конфиги вебпака лежат в папке bundler там 3 конфига, 
1) [Общий](bundler/webpack.common.js)
2) [Разработка](bundler/webpack.dev.js)
3) [Сборка](bundler/webpack.prod.js)

