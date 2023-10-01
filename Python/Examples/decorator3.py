
from time import time


def tictoc(func):
    def wrapper():
        t1 = time()
        func()
        t2 = time() - t1

        print(f'{func.__name__} ran in'
              f' {t2} seconds')

    return wrapper


@tictoc
def do_this():
    time.sleep(1.3)


@tictoc
def do_that():
    time.sleep(.4)


do_this()
do_that()
print('Done')
