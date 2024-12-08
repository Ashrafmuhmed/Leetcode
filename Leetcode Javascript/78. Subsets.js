/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
    var subset = [] ;
    var result = [] ;
    var process = (i) => {
    if(i >= nums.length) {result.push([...subset]) ; return;}
    subset.push(nums[i]);
    console.log(subset);
    process(i + 1);

    subset.pop() ;
    process(i + 1);}

    process(0) ;
    return result ;

    
}
     



