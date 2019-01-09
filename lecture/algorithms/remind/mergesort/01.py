def mergeSort(arr):
    mid = len(arr)/2
    firstArr = arr[:mid]
    secondArr = arr[mid:]
    if len(arr)<2: 
        return arr
    else:
        return merge(mergeSort(firstArr),mergeSort(secondArr))


def merge(arr1,arr2):
    answer=[]
    while(len(arr1) and len(arr2)):
        if arr1[0] < arr2[0]:
            temp = arr1.pop(0)
            answer.append(temp)
        else:
            answer.append(arr2.pop(0))
    if len(arr1) or len(arr2):
        arr1.extend(arr2)
        answer.extend(arr1)
    return answer

print(mergeSort([5,4,21,7,4,7,2,4,7,79]))
