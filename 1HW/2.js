function return_object(arr,...args) {
    let obj = {};
    let array = arr();
    for (let i = 0; i < array.length; i++) {
        let key = args[i];
        obj[key] = array[i];
    }
    return obj;
}

function func(){
    return ['JS', 'is', 'programming language']
}
let r = return_object (func, 'a', 'b', 'c');
console.log(r.c) // 'programming language'

