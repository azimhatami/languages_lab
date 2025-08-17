#!/bin/bash

my_array=("value 1" "value 2" "value 3" "value 4")

# Notice: keep in mind that you need to use curly brackets:
# Access a single element, this would output: value 2
echo ${my_array[1]}

# This would return the last element: value 4
echo ${my_array[-1]}

# As with command line arguments using @ will return all arguments in the array, as follows: value 1 value 2 value 3 value 4
echo ${my_array[@]}

# Prepending the array with a hash sign (#) would output the total number of elements in the array, in our case it is 4:
echo ${#my_array[@]}
