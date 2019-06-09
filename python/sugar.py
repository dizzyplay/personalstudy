n = int(input())

count =0
if n%5==0:
    count+=round(n/5)
    n=0

while n>=3:
    n-=3
    count+=1
    if n%5==0:
        count += round(n/5)
        n=0

if n==0:
    print(count)
else:
    print("-1")
