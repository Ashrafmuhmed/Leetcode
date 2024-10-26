/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0 , minLength = Infinity , l = 0 ;
    for(let r = 0 ; r < nums.length ; ++r)
    {
        sum += nums[r]; 
        while(sum >= target)
        {
            minLength = (r - l + 1) < minLength ? (r - l + 1) : minLength ;
            sum -= nums[l++];
            console.log(sum)
        }
    }
    return minLength ==Infinity  ? 0 : minLength ; 
    
};