
def factorial(number):
    """
    The factorial function takes a number and factorial returns that number.
    """
    if number == 0 or number == 1:
        return 1

    return number * factorial(number - 1)


if __name__ == '__main__':
    print(factorial(5))
