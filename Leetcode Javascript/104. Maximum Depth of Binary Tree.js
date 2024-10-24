/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var max = function(x , y)
{
    return (x >= y) ? x : y ; 
}

var maxDepth = function(root) {
    if(root === null || root.val === null) return 0 ; 
    else return 1 + max(maxDepth(root.left) , maxDepth(root.right));
};