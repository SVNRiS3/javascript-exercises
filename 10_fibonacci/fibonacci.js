const fibonacci = function (number) {
    if (number < 0) return "OOPS";
    if (number == 0) return 0;
    let prev1 = 1;
    let prev2 = 0;
    for (i = 1; i < number; i++) {
        let sum = prev1 + prev2;
        prev2 = prev1;
        prev1 = sum;
    }
    return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
