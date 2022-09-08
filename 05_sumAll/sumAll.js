const sumAll = function(num1, num2) {

    let sum = 0;
    let minNum = 0;
    let maxNum = 0
    let diff = 0;

    if (num1 < 0
        || num2 < 0
        || typeof num1 != "number"
        || typeof num2 != "number")
    {
        return "ERROR";
    }

    if (num1 > num2)
    {
        maxNum = num1;
        minNum = num2;
    }
    else
    {
        maxNum = num2;
        minNum = num1;
    }

    diff = maxNum - minNum;
    
    for(let i=0; i <=diff; i++)
    {
        sum += minNum + i;
    }

    if (diff == 0)
    {
        sum = minNum * 2;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
