from functools import *
import time

def gen_not_self_num(num):
    if num >=10:
        num_arr=list(str(num))
        s_num=int(num)+reduce(lambda a,b:int(a)+int(b),num_arr)
        return int(s_num)
    else:
        return int(num)+int(num)


def gen_not_self_num_arr(target):
    n=1
    not_self_num_arr=[]
    while(n<target):
        not_self_num_arr.append(gen_not_self_num(n))
        n+=1
    return not_self_num_arr

def gen_self_num(target):
    arr=gen_not_self_num_arr(target)
    for i in range(1,target):
        if i not in arr:
            print(i)

start = time.time()
gen_self_num(10000)
print("time:", time.time()-start)
