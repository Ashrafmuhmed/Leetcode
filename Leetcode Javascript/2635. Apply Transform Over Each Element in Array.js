/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for(let i = 0 ; i < arr.length ; i++)
       { arr[i] = fn(arr[i],i);}
    return arr;
};
console.log(map([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function plusI(n, i) { return n + i; }));
console.log(map([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function plusone(n) { return n + 1; }));
console.log(map([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function constant() { return 42; }));