const palindromes = function (string) {
    string = string.replace(/[^\w\s]|_/g, "");  // remove punctuation
    string = string.replaceAll(' ', '');  // remove white space
    string = string.toLowerCase();  // remove capitalisation
    reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string.charAt(i);
    }
    return reverseString === string;
};

// Do not edit below this line
module.exports = palindromes;
