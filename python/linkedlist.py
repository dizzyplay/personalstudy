class Node:
    def __init__(self,v):
        self.val = v
        self.next = None

class LinkedList:
    def __init__(self):
        self.nodeCount=0
        self.head = None
        self.tail = None
    def __repr__(self):
        if self.nodeCount == 0:
            return "empty"
        s=''
        curr=self.head
        while curr is not None:
            s += repr(curr.val)
            if curr.next is not None:
                s += '->'
            curr = curr.next
        return s
    def getAt(self,pos):
        if pos <= 0 or pos > self.nodeCount:
            return None
        i=1
        curr = self.head
        while(i<pos):
            curr=curr.next
            i +=1
        return curr
    def traverse(self):
        curr =self.head
        arr=[]
        while curr != None:
            arr.append(curr.val)
            curr = curr.next
        return arr
    def insertAt(self,pos,newNode):
        if pos <1 or pos > self.nodeCount+1:
            return False
        if pos ==1 :
            newNode.next=self.head
            self.head= newNode
        else:
            if pos == self.nodeCount+1:
                prev=self.tail
            else:
                prev=self.getAt(pos-1)
            newNode.next=prev.next
            prev.next=newNode
        if pos == self.nodeCount +1:
            self.tail=newNode
        self.nodeCount+=1
        return True

        


list = LinkedList()
n1 = Node('t')
n2 = Node('e')
n3 = Node('s')
n4 = Node('t')

list.insertAt(1,n1)
list.insertAt(2,n2)
list.insertAt(3,n3)



print(list.traverse())
print(list)
