const removeFromArray = function(inputArray, ...args) {
    for (let i = inputArray.length - 1; i >= 0; i--) {
        for (const arg of args) {
            if (inputArray[i] === arg) {
                inputArray.splice(i, 1);
                break;
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
