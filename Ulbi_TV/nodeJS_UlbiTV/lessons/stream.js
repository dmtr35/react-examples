/*
stream
есть 4типа stream:
Readable            - чтение
Writable            - запись
Duplex              - для чтения и записи Readable + Writable
Transform           - такой же как Duplex, но может изменить данные по мере чтения
*/ 

const fs = require('fs')
const path = require('path')

// считаем файл 400кб
// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data);
// })

//? считаем с помощью stream----------------------------------------------------------

const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
// stream работает по принципу событий. мы должны подписаться на определенные события
// один chunk по дефолту 64кб
stream.on('data', (chunk) => {              // первое событие data позволяет нам считывать файл. вторым аргум. callback(chunk-кусочек файла который мы прочитали)    
    console.log(chunk);
})
stream.on('end', () => console.log('Закончили читать'))
stream.on('open', () => console.log('Начали читать'))

stream.on('error', (e) => console.log(e))            // очень важно обрабатывать ошибки

// --------------------------------------------------------------------------------------
//? writableStream предназначен для записи

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))   
for (let i =0; i < 20; i++) {                      // сделаем 20 итераций
    writableStream.write(i + '\n')                // после каждой записи делать перенос строки
}
// так же writableStream необходимо завершать в ручную...
writableStream.end()              // ...для этого нужно вызвать функцию .end()

// так же у stream есть другие методы чтобы его закрыть
writableStream.close()         // 
    writableStream.destroy()   // 




//===================================
http.createServer((req, res) => {
    //req - readable stream
    //res - writable stream
    const stream = fs.createReadStream(path.resolve(__dirname, 'test2.txt'))

    // Стрим закончит читать раньше чем пользователь скачает...
    //...поэтому метод .pipe достигает синхронизации между readable и writable...
    //...readable stream не начанает читать новую порцию данных пока writable не закончил записывать предыдущую 
    stream.pipe(res)
})


