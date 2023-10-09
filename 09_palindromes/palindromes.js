const palindromes = function (word) {
    const regex = /[^a-zA-Z\d]/g;
    filteredWord = word.replace(regex, "");
    reversedWord = filteredWord.split("").reverse().join("");
    return filteredWord.toLowerCase() === reversedWord.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
