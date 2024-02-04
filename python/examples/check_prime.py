def is_prime(number):
    if number < 0:
        return False

    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
            break

    return True

if is_prime(7):
    print('Prime')
else:
    print('Not Prime')
