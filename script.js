//1) Найти в массиве: sum, min and max, заменить min and max, используя методы, изученные на занятии.
// Создать функцию которая возвращает все тти значения в объекте.
// Примеры массивов:
// [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
// [-1,-8,-2]
// [1,7,3]
// [1,undefined,3,5,-3]
// [1,NaN,3,5,-3]

let arr = [1, 22, 7, 15, 3],
    max = Number.MIN_SAFE_INTEGER, //-Infinity
    min = Number.MAX_SAFE_INTEGER, //Infinity
    sum = 0;

arr.forEach(function (item) {
    if (item > max) {
        max = item;
    }
});

arr.forEach(function (item) {
    if (item < min) {
        min = item;
    }
});

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

function makeObject (minVal, maxVal, totalVal) {
    return {
        min: minVal,
        max: maxVal,
        sum: totalVal,
    };
}

let values = makeObject(min, max, sum);
console.log(values);


//3) Задание состоит в том, чтобы рассчитать сдачу.
// У вас есть цена какого-либо товара, продукта. Неважно.
// Вы по сути просто на ввод даете Цену, И на ввод у вас есть Купюра,
// которую вы получили за этот продукт. Вам нужно рассчитать все возможные варианты сдачи.
// И у вас должен быть по сути определенный стек купюр, которыми вы располагаете.
// Например, [1, 2, 5, 10, 20, 50, 100], статический.
// И уже в зависимости от вашего стека вам нужно просчитать возможные варианты сдачи.
let banknotes = [1, 2, 5, 10, 20, 50, 100];

function calculation (banknote, price) {
    let param = banknotes.indexOf(banknote);

    if (param != -1) {
        let includes = banknotes.slice(0, param),
            length = includes.length;
        console.log(includes);
        remainder = banknote - price;
        console.log('Решта: ' + remainder);
        return remainder;
    } else {
        console.log('Банкноти, які ви можете ввести: ' + banknotes.join() + '.');
    }
}

calculation(50, 5);