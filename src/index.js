module.exports = function reverse(n) {
    let a = n;
    if (n < 0) {
        a *= -1;
    }

    const numbersArr = Array.from(String(a));
    const reverseArr = numbersArr.reverse();
    const result = reverseArr.join('')

    return result;
}

