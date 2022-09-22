const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
  return x - y;
};

const sum = function(nums) {
	var totalSum = 0;

  for (i=0; i < nums.length; i++)
  {
    totalSum += Number(nums[i]);
    
  }

  return totalSum;

  
};

const multiply = function(nums) {
   var result = 1;

   for (i = 0; i < nums.length; i++)
   {
      result *= Number(nums[i]);
   }

   return result;
};

const power = function(x,y) {
  var result = 1;
  
  for(i =0; i < y; i++)
  {
    result = result * x;
  }

  return result;
};

const factorial = function(x) {

  var result = 0;

  if(x == 0){
    return 1;
  }

  return x * factorial(x-1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
