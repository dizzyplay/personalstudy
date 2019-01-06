def bubble(arr):
    for i in range(len(arr)-1,-1,-1):
        for j in range(0,i):
            if arr[j]>arr[j+1]:
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
    return arr


print(bubble([34,65,8,1,2]))
