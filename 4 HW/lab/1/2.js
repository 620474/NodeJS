function count(n) {
    let b = 0;
    for (let i = 2; i < n.length; i ++) {
        b+=parseInt(n[i]);
    }
    return b;
}

console.log(count(process.argv));
