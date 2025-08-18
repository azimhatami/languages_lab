#!/bin/bash

# In Bash, conditional expressions are used by the [[ compound
# command and the [built-in commands to test ﬁle attributes and
# perform string and arithmetic comparisons.

# FILE EXPRESSIONS

# True if file exists.
[[ -a ${file} ]]

# True if file exists and is a block special file.
[[ -b ${file} ]]

# True if file exists and is a character special file.
[[ -c ${file} ]]

# True if file exists and is a directory
[[ -d ${file} ]]

# True if file exists.
[[ -e ${file} ]] 

# True if file exists and is a regular file.
[[ -f ${file} ]]

# True if file exists and is a symbolic link.
[[ -h ${file} ]]

# True if file exists and is readable.
[[ -r ${file} ]]

# True if file exists and has a size greater than zero.
[[ -s ${file} ]]

# True if file exists and is writable.
[[ -w ${file} ]]

# True if file exists and is executable.
[[ -x ${file} ]]

# True if file exists and is a symbolic link.
[[ -L ${file} ]]

# STRING EXPRESSIONS

# True if the shell variable varname is set (has been assigned a value).
[[ -v ${varname} ]]

# True if the length of the string is zero
[[ -z ${string} ]]

# True if the length of the string is non-zero
[[ -n ${string} ]]

###
# True if the strings are equal. = should be used with the test
# command for POSIX conformance. When used with the [[
# command, this performs pattern matching as described above (Compound Commands).
###
[[ ${string1} == ${string2} ]]

# True if the strings are not equal.
[[ ${string1} != ${string2} ]]

# True if string1 sorts before string2 lexicographically.
[[ ${string1} < ${string2} ]]

# True if string1 sorts after string2 lexicographically.
[[ ${string1} > ${string2} ]]


# ARITHMETIC OPERATORS

# Returns true if the numbers are equal
[[ ${arg1} -eq ${arg2} ]]

# Returns true if the numbers are not equal
[[ ${arg1} -ne ${arg2} ]]

# Returns true if arg1 is less than arg2
[[ ${arg1} -lt ${arg2}]]

# Returns true if arg1 is less than or equal arg2
[[ ${arg1} -le ${arg2}]]

# Returns true if arg1 is greater than arg2
[[ ${arg1} -gt ${arg2}]]

# Returns true if arg1 is greater than or equal arg2
[[ ${arg1} -ge ${arg2}]]

# As with other programming languages you can use AND & OR conditions:
[[ test_case_1 ]] && [[ test_case_2 ]] # And
[[ test_case_1 ]] || [[ test_case_2 ]] # Or
