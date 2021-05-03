let c = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};
let bg = {
    reset: "\x1b[0m",
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
}
var car = {
    name: 'tesla',
    price: 60000,
    color: 'white',
    year: 2021,
    model: 'x',
}

var person = {
    firstName: 'Aslamjon',
    lastName: "Ibragimov",
    age: 20,
    birthday: "10.25.2000",
}

labtop = {
    model: 'Dell',
    cpu: 'intel i9',
    ram: '16 Gb',
    hardDrive: {
        ssd: '500 Gb',
        hdd: '1 Tb',
    },
    gpu: 'Intel Graphics'
}

phone = {
    model: 'Redmi Not 8',
    company: 'Xiaomi',
    cpu: 'Qualcomm Snapdragon 655',
    ram: '4 Gb',
    mamory: '64 Gb',
    gpu: 'Qualcomm Adreno 610'
}
about_my_family = {
    father: 'Kasimov Alisher',
    mother: 'Azimova Shoira',
    little_sister: {
        s1: 'Ibragimova Shaxnoza',
        s2: 'Ibragimova Shaxzoda'
    },
    me: 'Ibragimov Aslamjon'
}

books = {
    1: 'Rich Dad Poor Dad',
    2: 'Pul oqimi kvadranti',
    3: 'Pul oqimi kvadranti 2',
    4: 'Bobilning Eng Boy Odami',
}
os = {
    1: 'Windows',
    2: 'Linux',
    3: 'Mac',
    phone: {
        1: 'Android',
        2: 'IOS',
        3: 'Harmony',
    }
}
google = {
    search: 'search',
    youtube: 'Youtube',
    gmail: 'Gamil',
    duo: 'Duo',
    maps: 'Maps',
    drive: 'Drive',
    news: 'News',
    play_game: 'Play game',
    play_store: 'Play Store',
    chrome: 'Chrome',
    etc: 'etc'
}
browser = {
    chrome: 'Chrome',
    firefox: 'Firefox',
    opera: 'Opera',
    chromium: 'Chromium',
    safari: 'Safari',
    yandex: 'Yandex',
}
programming_languages = {
    python: 'Python',
    java: 'Java',
    ruby: 'Ruby/Ruby on Rails',
    javaScript: 'JavaScript',
    c: 'C',
    cpp: 'C++',
    csh: 'C#',
    php: 'PHP',
}

console.log(1+c.red, bg.black, car.name, bg.reset);
console.log(2+c.green, bg.black, person.firstName, bg.reset);
console.log(3+c.yellow, bg.black, labtop.hardDrive.ssd, bg.reset);
console.log(4+c.blue, bg.black, phone.model, bg.reset);
console.log(5+c.magenta, bg.black, about_my_family.me, bg.reset);
console.log(6+c.cyan, bg.black, books[1], bg.reset);
console.log(7+c.black, bg.green, os[3], bg.reset);
console.log(8+c.red, bg.white, google.youtube, bg.reset);
console.log(9+c.white, bg.black, browser.chrome, bg.reset);
console.log(10+c.blue, bg.black, programming_languages.python, bg.reset);