def fib(index,cache={}):
    if index in cache.keys():
        return cache[index]
    else:
        if index <3:
            return 1
        else:
            cache[index] = fib(index-1,cache)+fib(index-2,cache)

    return cache[index]

print(fib(50))
