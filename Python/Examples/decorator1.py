
def print_args(func):
    def inner_func(*args, **kwargs):
        print(args)
        print(kwargs)

        return func(*args, **kwargs)

    return inner_func


@print_args
def add(num1, num2):
    return num1 + num2


print(add(12, 8))
