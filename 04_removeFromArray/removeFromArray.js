const removeFromArray = function(array, ...removes) {

    // declare filteredArray to originally be the same as the original array
    
    let filteredArray = array;

    // loop through the elements to be removed and trim them from the filteredArray

    for (let i=0; i < removes.length; i++)
    {
        filteredArray = filteredArray.filter(filteredArray => filteredArray !== removes[i]);
    }

    return filteredArray;

};


// Do not edit below this line
module.exports = removeFromArray;
