module.exports = function reverse(n) {
    const res = (n + '').split('').reverse().join('');
    if (n != 0 && n > 0) {
        return res;
    } else if (n < 0) {
        let res2 = (n * (-1) + '').split('').reverse().join('');
        return res2
    }
}