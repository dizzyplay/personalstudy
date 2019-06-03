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
        result = ListNode(0)
        head = result
        while l1!=None and l2!=None:
            if l1.val <= l2.val:
                result = self.addTail(result,l1)
                l1=l1.next
            else:
                result = self.addTail(result,l2)
                l2=l2.next
        result.next = l1 if l1 else l2
        return head.next

    def addTail(self, tail,newNode):
        tail.next=newNode
        return tail.next


def log(node):
    while(node):
        print(node.val)
        node=node.next

# addNode(node,newNode) addNode(head,newNode)이런식으로 새로운 노드를 달게되면
# 무한루프에 빠진다 왜? 아마도 l1의 다음인자들까지 모두 붙게되어서인듯.
# 메소드는 인수를 복사하는게 아니라 참조한다???
# 무한 루프에 빠지는 addNode의 문제는 노드를 추가할때마다 모든 노드를 훑어야된다는것
# 그냥 tail을 만들고 tail에 노드를 추가하는식으로 하는것이 훨씬낫다


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
