/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let s = numbers.length ;
    let l = 0 , r = s-1 ;
    while(numbers[l] + numbers[r] != target)
    {
        if(numbers[l] + numbers[r] > target) r--; 
        else if(numbers[l] + numbers[r] < target) l++; 
    }
    return [l+1 , r+1];
};