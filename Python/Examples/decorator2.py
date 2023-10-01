
def mydecorator(func):
    def wrapper(*args, **kwargs):
        print('action 1')
        value = func(*args, **kwargs)
        print('action 2')

        return value

    return wrapper


@mydecorator
def helloworld():
    print('Hello World')


@mydecorator
def print_text(text):
    print(f'print text: {text}')


@mydecorator
def multiply(x, y):
    return x * y


@mydecorator
def sub(x, y):
    return x - y


helloworld()
print_text('Azim')
print(multiply(2, 3))
print(sub(8, 3))
