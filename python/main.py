n=int(input())
arr = list(map(int,input().split()))
new_arr=[]
M=max(arr)
sum=0

for idx,i in enumerate(arr):
    new_arr.append(i/M*100)
    sum += new_arr[idx]

print(sum/n)



