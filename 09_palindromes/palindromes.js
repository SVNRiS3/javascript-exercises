const palindromes = function (word) {
    filteredWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    reversedWord = filteredWord.split("").reverse().join("");
    return filteredWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
