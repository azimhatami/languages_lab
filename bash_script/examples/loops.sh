#!/bin/bash

# For loops

# Here is the structure of a for loop:

# for var in ${list}
# do
#   your_commands
# done

# Example:
# users="Ali Mmd Ftm"
# for user in ${users}
# do
#   echo "$user"
# done

# for num in {1..10}
# do
#   echo ${num}
#   if [[ ${num} -eq 4 ]]; then
#     break
#   fi
# done

# While loops
# The structure of a while loop is quite similar to the for loop:

# while [ your_condition ]
# do
#   your_condition
# done

# Example:

# counter=1
# while [[ $counter -le 10 ]]
# do
#   echo $counter
#   ((counter++))
# done

# Let's create  a script that asks the user for their name and not allow an empty input:

# read -p "What is your name? " name
 
# while [[ -z ${name} ]]
# do
#   echo "Your name can not be blank. Please enter a valid name!"
#   read -p "Enter your name again? " name
# done
 
# echo "Hi there ${name}"

# Until Loops

# Structure:
# until [ your_conditon ]
# do
#   your_commands
# done

# Example:
# count=1
# until [ $count -gt 10 ]
# do
#   echo $count
#   ((count++))
# done


# Continue and Break

# BREAK:
# count=1
# while [[ $count -le 10 ]]; do
#   echo $count
#   if [ $count -eq 3 ]; then
#     echo "Stop after 3"
#     break
#   fi
#   ((count++))
# done

# WHILE:
count=1
while [[ $count -le 10 ]]; do
  ((count++))

  if [ $((count % 2)) -ne 0 ]; then
    continue
  fi

  echo $count
done
