/**
 * @param {string} val
 * @return {Object}
 */
var val
var expect = function(val) {
    return {
        toBe : (val1) => (val === val1)? true : ( () => {throw new Error("Not Equal");})() ,
        notToBe : (val1) => (val !== val1)? true : ( () => {throw new Error("Equal");})()
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */