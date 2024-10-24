/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cached  = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if(!(key in cached))
            {
                const x = fn(...args);
                // console.log(key);
                cached[key] = x;
                return x;
        }else 
        {
            return cached[key];
        }
    }
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */