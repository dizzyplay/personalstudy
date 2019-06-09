class ListNode:
    def __init__(self,x):
        self.val=x
        self.next=None
    def push(self,v):
        while(self.next):
            self=self.next
        self.next=ListNode(v)
    def logNode(self):
        while(self):
            print(self.val)
            self=self.next

class Solution:
    def mergeTwoLists(self,l1:ListNode,l2:ListNode)->ListNode:
        tail = ListNode(0)
        head=tail
        while l1!=None and l2!=None:
            if l1.val <= l2.val:
                tail.next = l1
                tail = tail.next
                l1=l1.next
            else:
                tail.next= l2
                tail = tail.next
                l2=l2.next
        tail.next = l1 if l1 else l2
        head=head.next
        return head

def log(node):
    while(node):
        print(node.val)
        node=node.next


l1=ListNode(1)
l1.push(2)
l1.push(2)
l1.push(4)

l2=ListNode(1)
l2.push(3)
l2.push(4)
l2.push(4)
l2.push(5)


s=Solution()
print(log(s.mergeTwoLists(l1,l2)))
