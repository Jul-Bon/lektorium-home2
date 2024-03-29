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

//2)Дан масив чисел, которые представляют собой показатели высоты скал: [2,1,5,0,3,4,7,2,3,1,0]
//Посчитать количество воды (количество синих йчеек), набранной в ямы после дождя.
//Нужно по возможности использовать методы массива, а не обычные цыклы.
//Например, в даном примере правильный ответ: 10
//Some cases:
// [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
// [7, 0, 1, 3, 4, 1, 2, 1] // 9
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
// [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
// [2, 2, 2, 2, 2] // 0

let land = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

function maxWater (arr) {
    let leftMax = 0,
        rightMax = 0,
        left = 0,
        right = land.length - 1,
        volume = 0;

    while (left < right) {
        if (arr[left] > leftMax) {
            leftMax = land[left];
        }
        if (land[right] > rightMax) {
            rightMax = land[right];
        }
        if (leftMax >= rightMax) {
            volume += rightMax - land[right];
            right--;
        } else {
            volume += leftMax - land[left];
            left++;
        }
    }
    console.log('The amount of water = ' + volume);
    return volume;
}

maxWater(land);

//3) Задание состоит в том, чтобы рассчитать сдачу.
// У вас есть цена какого-либо товара, продукта. Неважно.
// Вы по сути просто на ввод даете Цену, И на ввод у вас есть Купюра,
// которую вы получили за этот продукт. Вам нужно рассчитать все возможные варианты сдачи.
// И у вас должен быть по сути определенный стек купюр, которыми вы располагаете.
// Например, [1, 2, 5, 10, 20, 50, 100], статический.
// И уже в зависимости от вашего стека вам нужно просчитать возможные варианты сдачи.
let banknotes = [1, 2, 5, 10, 20, 50, 100, 200, 500];

function calculation (banknote, price) {
    let param = banknotes.indexOf(banknote);

    if (param !== -1) {
        if( banknote > price) {
            let includes = banknotes.slice(0, param),
                reversed = includes.reverse(),
                length = includes.length,
                remainder = banknote - price;
            console.log('Your rest: ' + remainder);
            console.log('Bills for the rest:');

            for (let i = 0; i < length; i++) {
                let item = includes[i],
                    count = remainder % item;

                if (count !== 1) {
                    let numberBills = (remainder - count) / item;
                    remainder = count;
                    if (numberBills !== 0) {
                        console.log(numberBills + ' Х ' + item);
                    }
                } else {
                    let numberBills = remainder / item;
                    if (numberBills !== 0) {
                        console.log(numberBills + ' Х ' + item);
                    }
                }
            }
            return remainder;
        } else {
            console.log('Price cannot be higher than banknote.')
        }
    } else {
        console.log('Banknotes you can enter: ' + banknotes.join() + '.');
    }
}

calculation(500, 170);

//4) На екране у вас есть шарик. Вам нужно с помощью js и html
// создать какое-то действие с ним. Например, шарик залетает в
// коробку/прохождение через кольцо/отбивание от стенок.
//Все, что ваш душа придумает.

// function move () {
//     let ball = document.getElementById('ball'),
//         box = document.getElementById('box'),
//         ballWidth = ball.offsetWidth,
//         maxHeight = box.offsetHeight - ballWidth,
//         pos = 0,
//         id = setInterval(frame, 10);
//
//     function frame () {
//         if (pos >= maxHeight) {
//             clearInterval(id);
//         }
//         pos++;
//         ball.style.top = pos + 'px';
//         ball.style.left = pos + 'px';
//     }
// }

let start = performance.now(),
    element = document.getElementById('ball');

function step1 (timestamp) {
    let progress = timestamp - start,
        firstValue = Math.min(progress / 10, 250);
    element.style.top = firstValue + 'px';
    element.style.left = firstValue + 'px';

    if (progress < 2500) {
        window.requestAnimationFrame(step1);
    }
}

function step2 (timestamp) {
    let progress = timestamp - start,
        firstValue = Math.min(progress / 10, 450);
    element.style.left = firstValue + 'px';

    if (progress < 5000) {
        window.requestAnimationFrame(step2);
    }
}

window.requestAnimationFrame(step1);
setTimeout(function () {
    window.requestAnimationFrame(step2);
}, 2500);