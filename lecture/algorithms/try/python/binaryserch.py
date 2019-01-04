def bs(arr, key):
    mid = len(arr)/2
    if arr[mid]==key:
        return key
    elif arr[mid]<key and len(arr)>1:
        return bs(arr[mid:],key)
    elif arr[mid]>key and len(arr)>1:
        return bs(arr[0:mid],key)
    else:
        return False

    


a=[1,2,3]

print(bs(a,-1))
print(bs(a,1))
