import math

def prime(num):
    arr = [True for i in range(num)]
    arr[0]=False
    arr[1]=False
    for i in range(2,math.floor(math.sqrt(num))+1):
        for j in range(2,num):
            if i*j < num:
                arr[i*j]=False
    answer=[]
    for i in range(num):
        if arr[i] is True:
            answer.append(i)
    return answer

#어떤수의 제곱근보다 작은 수와 어떤수의 미만과의 곱은 소수가 아니다
    

print(prime(20))
# 소수를 입력하면 그 수까지 소수 리스트를 반환
