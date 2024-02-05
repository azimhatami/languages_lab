def fibo():
    nterms = int(input('how many terms: '))

    n1 = 0
    n2 = 1
    count = 0

    if nterms <= 0:
        return 'please enter a number: '
        fibo()
    elif nterms == 1:
        return n1
    else:
        while count < nterms:
            print(n1)
            nth = n1 + n2
            n1 = n2
            n2 = nth
            count += 1


fibo()


def count_digits(number):
    count = 0
    while number != 0:
        number //= 10
        count += 1
    return count

def fibo(n):
    a,b, c, i = 0, 1, 0 , 2
    if n == 1:
        return 0
    elif n == 2:
        return 1
    elif n > 2:
        while(i < n):
            c = a+ b
            a = b
            b = c
            i+=1
        return c

def isEven(n):
    if n % 2 == 0:
        return True
    return False


i = 0
n = 4
while(i < 10):
    if isEven(fibo(n)):
        if isEven(count_digits(fibo(n))):
            print(fibo(n))
            i += 1
    n += 1

