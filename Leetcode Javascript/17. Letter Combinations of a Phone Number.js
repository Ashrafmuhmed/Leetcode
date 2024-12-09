/**
 * @param {string} digits
 * @return {string[]}
 */
 var letters = [
    ['a' , 'b' , 'c'], // 0
    ['d' , 'e' , 'f'], // 1
    ['g' , 'h' , 'i'], // 2
    ['j' , 'k' , 'l'], // 3
    ['m' , 'n' , 'o'], // 4
    ['p' , 'q' , 'r' , 's'], // 5
    ['t' , 'u' , 'v'], // 6
    ['w' , 'x' , 'y' , 'z'],  // 7
 ]
var letterCombinations = function(digits) {
    let results = [];
    if(digits.length === 0) return results ;
    let cur = '' ;
    for(let x = 0 ; x < digits.length ; x++) console.log(digits[x]);
    var process = (i , curString) => {
        if( i === digits.length) {
            console.log(curString) ;
            results.push(curString) ;
            return ;
        }
        for(let x = 0 ; x < letters[digits[i] - 2].length ; x++)
        {
            // console.log(letters[digits[i] - 2][x]);
            process(i + 1 , curString + letters[digits[i] - 2][x]);
        }
    }

    process(0 , '');
    return results ;

};