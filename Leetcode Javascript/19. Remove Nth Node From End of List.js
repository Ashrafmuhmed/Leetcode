/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    n = forw(head , n);
    let bef = head ;
    if(n === 1) return head.next ;
    for(let i = 2 ; i < n ; i++) bef = bef.next ;
    bef.next = bef.next === null ? null : bef.next.next ;
    return head ; 
};

function forw(head , n){
    let size = 0 ; 
    while(head != null){
        head = head.next ;
        size++;
    }
    return size - n + 1 ;
}