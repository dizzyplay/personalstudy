function ListNode(v) {
  this.val = v;
  this.next = null;
}

function mergeTwoList(l1, l2) {
  let tail = new ListNode(0);
  let head = tail;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      tail = tail.next;
      l1 = l1.next;
    } else {
      tail.next = l2;
      tail = tail.next;
      l2 = l2.next;
    }
  }
  tail.next = l1 ? l1 : l2;
  return head.next;
}

function log(node) {
  while (node) {
    console.log(node.val);
    node = node.next;
  }
}

l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(5);

log(mergeTwoList(l1, l2));
