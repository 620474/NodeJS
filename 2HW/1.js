function* password_generator(size = 16) {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let pass = '';
    while (true) {
        while (pass.length < size) {
           pass += arr_en[Math.floor(Math.random() * (arr_en.length))];
        }
        yield pass;
    }
}
let gen = password_generator();
console.log(gen.next().value);
