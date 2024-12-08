/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = new Set() , sub = [] ;
    nums.sort();
     var process = (i) => {
        if(i >= nums.length) {
            result.add(JSON.stringify([...sub]));
            return ;
        }
        sub.push(nums[i]);
        process(i+1);

        sub.pop();
        process(i+1);
     }
     process(0);
     const results = Array.from(result).map(JSON.parse);
     return results ;
};