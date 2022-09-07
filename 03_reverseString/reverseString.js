const reverseString = function(string) {

    const stringArray = string.split("");
    let reverseStringArray = new Array(stringArray.length);
    let result = "";
    
    for(let i=0; i < stringArray.length; i++)
    {
        reverseStringArray[i] = stringArray[stringArray.length -1 - i]
    }

    result = reverseStringArray.join("");

    console.log(result);

    return result; 
};

// Do not edit below this line
module.exports = reverseString;
