/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // starting with any positive int , replace the number by square of its digits 
    //  loop till it returns 1 so its its happy else its not
    let steps = [] ;
    while(true){
        if( n === 1 ) return true ;
        n = process(n) ;
        if(steps.includes(n)) return false ;
        steps.push(n);
    }
};

function process(n) {
    let sum = 0 ; 
    while(n!=0)
    {
        sum += (n%10)**2 ;
        n = ~~(n/10);
        console.log(n);
    }
    return sum ;
}