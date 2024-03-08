# Question:
# Write a recursive function that will find the smallest number in list.

def _min(_list: list[int]) -> int:
    min_number = _list[0]

    for number in _list[1:]:
       if number < min_number:
           min_number = number

    return min_number

# RECURSIVE

def recursive_min(_list: list[int]) -> int:
    if len(_list) == 1:
        return _list[0]

    min_number = recursive_min(_list[1:])

    # Variable first_index is a walrus operator
    if (first_index := _list[0]) < min_number:
        min_number = first_index

    return min_number

    # return min(_list[0], recursive_min(_list[1:]))


if __name__ == '__main__':
    print(_min([23, 82, 94, 73, 18, 59]))
    print(recursive_min([23, 82, 94, 73, 18, 59]))
