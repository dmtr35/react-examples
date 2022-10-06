const path = require('path')           // импортируем стандартный модуль path. позволяет взаимодействывать с путями. абсолютными или относительными


// также в node.js есть две глобальные переменные __dirname и __filename
// __dirname это строка которая содержит путь к текущей директории
console.log(path.join(__dirname, 'first', 'second', 'third'))                           // join позволяет склеить несколько участков пути
console.log(path.join(__dirname, '..', '..'))                                          // '..' возвращаемся на одну папку директории ниже


// __filename 

const fullpath = path.resolve(__dirname, 'first1', 'second1', 'third1.js')                              // получить абсолютный путь
// console.log('Парсинг пути', path.parse(fullpath));



console.log('разделитель в ОС', path.sep)

console.log('проверка на абсолютный путь', path.isAbsolute('first/second'))

console.log('название файла', path.basename(fullpath))

console.log('расширение файла', path.extname(fullpath))

// -----------------------------------------------------------------------------
// работа с URL

const siteURL = 'http://localhost:8080/users?id=5123'
// нужно правильно распарсить эту строку, получить квери параметры, получить участки пути
// глобальный доступный класс URL
const url = new URL(siteURL)

console.log(url)

