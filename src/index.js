module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    }
    let numString = n.toString().split('');
    return Number(numString.reverse().join(''));  
}
