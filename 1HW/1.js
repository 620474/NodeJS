function pause(func, time) {
    return function () {
        setTimeout(func, time*1000);
    }
}


function func() {
    console.log('Функция выполниться с задержкой в 2 секунды!');
}

let paused = pause(func, 2);
paused();
