
def palindrome(str):
    alphabet = [chr(a) for a in range(ord('a'),ord('z')+1)]
    arr = [s.lower() for s in str.lower() if s in alphabet]
    reverseArr = [s for s in arr[::-1]]

    if "".join(arr) == "".join(reverseArr):
        return True
    else:
        return False

print(palindrome("Maddam is si maddam"))
print(palindrome("my name"))
print(palindrome("it's s ti"))
