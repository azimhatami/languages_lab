# Question:
# Write a recursive function that will sum all numbers from 1 to n.


def sum_numbers(number: int = 0) -> int:
    '''
        Return the sum all numbers from 1 to n (default: 0).

        n is the argument of the function.
    '''

    if number == 0 or number == 1:
        return number

    sum_num = 0
    for i in range(1, number + 1):
        sum_num += i

    return sum_num


# RECURSIVE

def recursive_sum_numbers(number: int = 0) -> int:
    '''
        Recursive function that return the sum all numbers from 1 to n (defult: 0).

        n is the argument of the function.
    '''

    if number == 0 or number == 1:
        return number

    return recursive_sum_numbers(number - 1) + number


if __name__ == '__main__':
    print(sum_numbers())
    print(recursive_sum_numbers())
