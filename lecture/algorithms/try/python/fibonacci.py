def fibonacci_arr(num):
    arr=[]
    for i in range(1,num):
        arr.append(fibonacci(i))
    return arr

def fibonacci(position):
    if position<3:
        return 1
    return fibonacci(position-2)+fibonacci(position-1)

print(fibonacci(8))

print(fibonacci_arr(8))
