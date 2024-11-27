/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let cur1 = l1 ; let cur2 = l2 ; let sum = 0 , rem = 0 , added = 0 ;
    let head = new ListNode() ; 
    let ccc = head ;
    sum = (cur2 === null ? 0 : cur2.val) + (cur1 === null ? 0 : cur1.val)
    added = sum + rem ;
    head.val = added % 10 ;
    rem = (added / 10) | 0 ; 
        cur1 = cur1 === null ? null : cur1.next ; 
        cur2 = cur2 === null ? null : cur2.next ;
    while(cur1 != null || cur2 != null || rem != 0){
        let nextNode = new ListNode() ;
        sum = (cur2 === null ? 0 : cur2.val) + (cur1 === null ? 0 : cur1.val)
        added = sum + rem ;
        nextNode.val = added % 10 ;

        rem = (added / 10) | 0 ; 
        head.next = nextNode ;
        head = nextNode ;
        cur1 = cur1 === null ? null : cur1.next ; 
        cur2 = cur2 === null ? null : cur2.next ;
    }
    return ccc;
};
