const fibonacci = function (number) {
    if (number < 0) return "OOPS";
    let temp1 = 1;
    let sum = 0;
    let temp2 = 1;
    let n = 1;
    do {
        if (n > 1)
            temp1 = sum;
        sum += temp2;
        temp2 = temp1;
        n++;
    }
    while (n < number)
    return sum;
    //1 1 2 3 5 8
};

// Do not edit below this line
module.exports = fibonacci;
