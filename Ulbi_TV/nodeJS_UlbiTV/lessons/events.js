const dotenv = require('dotenv')


// events позволяем создавать события, подписываться на них, генерировать эти собития
const Emitter = require('events')          // импортируем, поскольку это класс, назовем "Emitter"

const emitter = new Emitter                // создадим из этого класса обьект


// мы создаем сове пользовательское событие с помощью функции "on"... 
emitter.on('message', (data, second, third) => {                  //...первый аргумент название события, вторым callback - он будет отрабатывать когда кто-то это событие сгенерировал (принимать можем неограниченое количество аргументов)
    console.log('Вы прислали сообщение ' + data);
    console.log('второй аргуемнт ' + second);
    
})

const MESSAGE = process.env.message || '';

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'Вы не указали сообщение')
}

// не понял до конца!





