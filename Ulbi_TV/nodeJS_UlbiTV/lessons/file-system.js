// работа с файловой системой

const fs = require('fs')                        // модуль для взаимодействия с файловой системой
const path = require('path')                    // импортируем стандартный модуль path. позволяет взаимодействывать с путями. абсолютными или относительными
require('dotenv').config()

// есть обычный метод, а есть его синхронный вариант. первый метод не блокирует главный поток, ..
// ..второй блокирует главный поток и дальше код выполнятся не будет пока мы не прочитаем файл или не сделаем какую-то операцию.

// начнем с синхронного варианта
// функция mkdirSync позволяет создать папку. первым аргументом путь к директории в которой будет создана папка

// fs.mkdirSync(path.resolve(__dirname, 'dir'))         // создаем папку 'dir'

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true}) // для создания папок рекурсивно(вложенные) передаем второй обьект у которого {recurcive: true}



//--------------------------------------------------------------

// с асинхронными функциям мы работаем по другому. с помощью сабытийно-ореинтированой модели с помощью колбеков
//? создаем папку


// console.log('START')             // чтобы убедится что функция вызывается асинхронно, сделаем  console.log('START') перед ее выполнением .. 

// fs.mkdir(path.resolve(__dirname, 'dir'), () => {         // первым указываем путь, а вторым callback
//     if(err) {                                               // чаще всего такие функции первым аргументом принимают ошибку, если ошибка есть, выводим ее в лог
//         console.log(err)        
//         return
//     }
//     console.log('Папка создана')                            // если ошибки нет то выводим 'Папка создана'
// })

// console.log('END')      // ..если функция асинхронна, сначала выведится 'START', потом 'END', потом функция



//------------------------------------------------------------------

//? удаляем файл
fs.rm(path.resolve(__dirname, 'test.txt'), (err) => {    // первым аргументом путь к директории, вторым callback которым первым аргументом принимает ошибку которую нам необходимо как то обработать
    if(err) {
        throw err;
    }
})

//? удаляем папки
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {    // первым аргументом путь к директории, вторым callback которым первым аргументом принимает ошибку которую нам необходимо как то обработать
//     if(err) {
//         throw err;
//     }
// })

//----------------------------------------------------------------------
//? прочитать файл
// fs.readFile(path.resolve(__dirname, 'test.txt'), 'utf8', (err, contents) => {    // первым аргументом путь к директории, вторым кодировку файла, третьим callback которым первым аргументом принимает ошибку которую нам необходимо как то обработать, вторым содержимое файла
//     console.log(contents)
// })

//----------------------------------------------------------------------

//? создать файл и записать в него данные

fs.writeFile(path.resolve(__dirname, 'test.txt'), 'то что хотим записать в файл. ', (err) => {    // приповторной записи, файл перетирается
    if (err) {
        throw err
    }
    console.log('Файл записан');
    
    // если хотим дозаписать в конец файла:
    fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ДОБАВЛЯЕМ В КОНЕЦ ФАЙЛА!', (err) => {    // приповторной записи, файл перетирается
        if (err) {
            throw err
        }
        console.log('Файл записан');
    })
})


//? реализуем свой вариант функции записи файла на диск с использованием промисов
// Promise при создании аргументом принимаемт callback который аргументом принимает функцию resolve(если промис выполнился успешно) и функцию reject(если функция выполнилась с ошибкой)..
//.. после этого мы выполняем функцию writeFile из стандартного модуля node.js. точно также указываем путь, затем передаем callback


const writeFileAsync = async (path, data) => {                                       // функция будет принимать путь к файлу и контекст
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {      // возвращает функцию Promise. он при создании принимает callback, он принимает resolve - если промис выполнился успешно и reject - если с ошибкой
        if(err) {
            return reject(err.massage)                                              // если ошибка, мы вызываем reject и передаем туда ошибку или сообщение
        }
        resolve()                                                                    // если нет ошибки вызываем функцию resolve туда можно передать какие то данные
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.massage)
        }
        resolve()
    }))
}


//? считывать данные с файла
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.massage)
        }
        resolve(data)
    }))
}

//? удаляем файл
const removeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err.massage)
        }
        resolve()
    }))
}

//? вызовы функций
writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')                             // передаем данные в функцию
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'123'))             // добавляем в файл информацию
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'456'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'),'789'))
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))                    // считываем файл и выводим в логи
    .then(data => console.log(data))
    .catch(err => console.log('err'))
    
// removeFileAsync(path.resolve(__dirname, 'text.txt'))                                    // удаляем файл
//     .then(() => console.log('file was removed'))

// ============================================================================

//? задача
/*
Через переменную окружения передать строку, записать ее в файл,
прочитать файл, посчитать количество слов в файле и записать
их в новый файл count.txt, затем удалить первый файл
*/

const text = process.env.TEXT || '';                                    // получим соответствующую переменную из переменных окружения, если переменной нет, инициализируем пустой строкой 
writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => {
        if(!data) {
            return 0
        }

        return data.split(' ').length
    })
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `количество слов: ${count}`))
    .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))

//









