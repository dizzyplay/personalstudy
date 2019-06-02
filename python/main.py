from functools import reduce
def sol(s):
    Roman={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    arr = list(s)
    numArr = list(map(lambda v:Roman[v], arr))
    for i in range(len(numArr)-1):
        if(numArr[i] < numArr[i+1]):
            numArr[i+1] = numArr[i+1] - numArr[i]
            numArr[i] =0
    answer = reduce(lambda x,y:x+y,numArr)
    print(answer)


sol('IX')
