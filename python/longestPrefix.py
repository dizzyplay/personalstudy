from functools import reduce

def sol(strs):
    min_value =len(min(strs))
    answer=''
    temp=[]
    for i in range(min_value):
        for j in range(len(strs)):
            temp.append(strs[j][i])
        temp=reduce(lambda a,b: a==b and a,temp)
        if(temp):
            answer += temp
            temp=[]
        else:
            break;
    return answer

print(sol(['rdog','racecar','rcar']))
