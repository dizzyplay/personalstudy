class Sol:
    def isValid(self,s):
        open = list('[({')
        close = list('])}')
        arr=[]
        for c in s:
            if c in open:
                arr.append(c)
            else:
                if len(arr) ==0:
                    return False
                if close[self.findIndex(open,arr[-1])] == c:
                    arr.pop()
                else:
                    return False
        return True if len(arr)==0 else False

    def findIndex(self,arr,x):
        for idx,v in enumerate(arr):
            if v == x:
                return idx
        return -1

s = Sol()
print(s.isValid('({{}})'))
