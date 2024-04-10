from typing import Optional


def get_full_name(first_name: str, last_name: str):
    full_name = first_name + ' ' + last_name
    return full_name.title()

# print(get_full_name('azim', 'hatami'))

def get_name_with_age(name: str, age: int):
    name_with_age = name + ' is this old: ' + str(age)
    return name_with_age

# print(get_name_with_age('Azim', 20))

def get_items(
    item_a: str, item_b: int, item_c: float, item_d: bool, item_e: bytes
):
    return item_a, item_b, item_c, item_d, item_e


# List
def process_items(items: list[str]):
    for item in items:
        print(item)

# process_items(['a', 'b', '2', 'c'])


# Tuple, Set
def process_items(items_t: tuple[int, int, str], items_s: set[bytes]):
    return items_t, items_s

# print(process_items((2, 3, 'a'), {bytes(4)}))


# Dict
def process_items(prices: dict[str, float]):
    for item_name, item_price in prices.items():
        print(item_name)
        print(item_price)


# process_items(
#     {
#         'shirt': 12.2,
#         'shoe': 21.2,
#         'trousers': 31.3,
#     }
# )


# Union
def process_item(item: int | str):
    print(item)

# process_item('a')

# Possibly None
def say_hi(name: Optional[str] = None):
    if name is not None:
        print(f'Hey {name}!')
    else:
        print('Hello World')

# say_hi('jhon')

def say_hi(name: Optional[str | None] = None):
    if name is not None:
        print(f'Hey {name}!')
    else:
        print('Hello World')

# say_hi()

def say_hi(name: Optional[str]):
    print(f'Hey {name}!')

# This throws an error!
# say_hi()

def say_hi(name: str | None):
    print(f'Hey {name}!')

# say_hi()


# Classes as types

class Person:
    def __init__(self, name: str):
        self.name = name

def get_person_name(one_person: Person):
    return one_person.name

p1 = Person('Azim')
print(get_person_name(p1))

