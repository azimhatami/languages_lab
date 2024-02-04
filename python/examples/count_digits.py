def count_digits(number):
    count = 0
    while number != 0:
        number //= 10
        count += 1

    return count


if __name__ == '__main__':
    number = int(input('Enter a number: '))
    count_digit = count_digits(number)
    print(count_digit)

