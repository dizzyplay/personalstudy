
n=int(input())


def cycle(num):
    num=int(num)
    if num<10:
        s_num = '0'+str(num)
    else:
        s_num=str(num)
    t=int(s_num[0])+int(s_num[1])
    if int(t)<10:
        t='0'+str(t)
    return s_num[1]+str(t)[1]


count=1
t=cycle(n)
while(1):
    if n==int(t):
        break;
    t=cycle(t)
    count += 1
print(count)
