/**
 * @param {string} s
 * @return {string}
 */
class Stack{
    constructor()
    {
        this.items =[];
    }
    push(s)
    {
        this.items.push(s);
    }
    pop()
    {
        this.items.pop();
    }
    top()
    {
        return this.items[this.items.length-1];
    }
    isEmpty(){ return this.items.length == 0 ;}
    text()
    {
        console.log(this.items.join(''));
        return this.items.join('');
    }}
var removeStars = function(s) {
    let newS = ''; const st = new Stack();
    for(let i = 0 ; i < s.length ; i++)
    {
        if(s[i] == '*') st.pop();
        else st.push(s[i]);
    }
    return st.text();
};
