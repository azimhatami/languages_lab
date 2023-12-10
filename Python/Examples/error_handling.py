result = None

def check_num():
    while True:
        user_input = input('Enter your number: ')

        try:
            result = int(user_input)
            return result
        except ValueError:
            try:
                result = float(user_input)
                return result
            except ValueError:
                print('You have to enter a number. Please try again.')

    return f'Result: {result}'


print(check_num())
