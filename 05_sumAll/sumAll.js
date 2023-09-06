const sumAll = function (firstNumber, lastNumber) {
    let sum = 0;
    if (firstNumber < 0 || typeof firstNumber != 'number' || lastNumber < 0 || typeof lastNumber != 'number')
        return "ERROR";
    let sortedNumbers = [firstNumber, lastNumber].sort(function (a, b) { return a - b });
    while (sortedNumbers[0] <= sortedNumbers[1]) {
        sum += sortedNumbers[0];
        sortedNumbers[0]++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
