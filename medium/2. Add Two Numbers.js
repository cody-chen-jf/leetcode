/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  if (l1 === null || l2 === null) return null

  let dummyHead = new ListNode(0);
  let cur1 = l1;
  let cur2 = l2;
  let cur = dummyHead;
  let carry = 0;

  while (cur1 !== null || cur2 !== null) {
    let val1 = cur1 !== null ? cur1.val : 0;
    let val2 = cur2 !== null ? cur2.val : 0;
    let sum = val1 + val2 + carry

    let newNode = new ListNode(sum % 10)
    carry = sum >= 10 ? 1 : 0;
    cur.next = newNode
    cur = cur.next
    console.log('dummyHead ==== ', dummyHead)

    if (cur1 !== null) {
      cur1 = cur1.next
    }

    if (cur2 !== null) {
      cur2 = cur2.next
    }
  }

  if (carry > 0) {
    cur.next = new ListNode(carry)
  }

  return dummyHead.next
};

let l1 = new ListNode(2)
let temp1 = l1
l1.next = new ListNode(4)
l1 = l1.next
l1.next = new ListNode(3)
l1 = l1.next

let l2 = new ListNode(5)
let temp2 = l2
l2.next = new ListNode(6)
l2 = l2.next
l2.next = new ListNode(4)
l2 = l2.next


const output = function (list) {
  while (list !== null) {
    console.log(list.val)
    list = list.next
  }
}

const res = addTwoNumbers(temp1, temp2)
output(res)

function ListNode(val) {
    this.val = val;
    this.next = null;
}
