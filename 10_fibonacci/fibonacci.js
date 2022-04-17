const fibonacci = function(number) {
    number = parseInt(number);
    if (number < 1) return 'OOPS';
    if (number === 1 || number === 2) return 1;
    previous = 1;
    current = 1;
    for (let i = 3; i <= number; i++) {
        let tempCurrent = current;
        current = previous + current;
        previous = tempCurrent;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
