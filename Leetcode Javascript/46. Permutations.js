/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let cur = [] , results = [] ;

    var process = ( i , curr) =>{
        if(curr.length === nums.length) {
            results.push([...curr]) ;
            console.log(curr);
            return ;
        }

        for(let x = 0 ; x < nums.length ; ++x)
        {
            if(curr.includes(nums[x])) continue ;
            curr.push(nums[x]);
            process( x , curr);
            curr.pop();
        }
    }
    process(-1 , []);
    return results ;
};