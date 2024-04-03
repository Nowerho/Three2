const path = require('path') //Переменная пути
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    //это инструкция для вебпака, он работает только со скриптами javascript
    entry: './src/index.js', // Точка входа для сборки проекта, тут он смотрит его зависимости и подтягивает их тоже
    output: {
        path: path.resolve(__dirname, './dist'), //Папка куда высрется итоговая портянка
        filename: '[name].[contenthash].js', //имя выходного файла, JS ваще поебать как его называть, это все равно подключится само в HTML
    },
    module: {
        rules: [
        {   // Загрузка .css
            test: /\.css$/, 
            use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
        },
        {   // Загрузка растра
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },
        {   // Загрузка вектора
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ //Плагин для переваривания HTML
            // favicon: "./src/images/favicon.svg", // Подключаем иконку
            template: './src/template.html', //Файл на входе
            filename: 'index.html', // название выходного файла по умолчанию INDEX.HTML
        }),
        new CopyPlugin({ //плагин для копирования статических файлов
            patterns: [
                { from: './src/static/', to: './static'}
            ]
        }),      
    ],
    devServer: {
        static: {
        directory: path.join(__dirname, 'dist'), // Каталог для статики
        },
        port: 666, //Порт на локалхосте
        open: true, // Автоматически открывать браузер
        // hot: true, // Горячая загрузка модулей?
    },
    
    devtool: "source-map",
    // mode: 'development', // Режим сборки
    mode: 'production', // Режим сборки
}