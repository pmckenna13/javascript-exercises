const palindromes = function (word) {

    //  Hold the indecies of the first and last letter of the word
    var left=0;
    var right = word.length - 1;
    var isPalindrome = false;

    if(word.length <= 1)
    {
        return true;
    }

    while (left < right)
    {
        if (charIsLetter(word[right]) == false)
        {
            right -= 1;
        }

        else if(charIsLetter(word[left]) == false)
        {
            left += 1;
        }

        else
        {
            if(word[left].toLowerCase() == word[right].toLowerCase())
            {
                isPalindrome = true;
                left += 1;
                right -= 1;
                console.log(left,right);
            }

            else {
                return false;
            }
        } 
    }

    return isPalindrome;
};

function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return /^[a-zA-Z]+$/.test(char);
};

// Do not edit below this line
module.exports = palindromes;
