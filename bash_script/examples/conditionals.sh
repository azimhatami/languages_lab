#!/bin/bash

# The format of an if statement in Bash is as follows:

# if [[ some_test ]]
# then
#   <commands>
# fi

# read -p "What is your name: " name

# if [[ -z ${name} ]] 
# then
#   echo "Please enter your name!"
# else
#   echo "Hello ${name}"
# fi

# admin="himo"

# read -p "Enter your username? " username

# Check if the username provided is the admin

# if [[ ${username} == ${admin} ]]
# then
#   echo "You are the admin user!"
# else
#   echo "You are NOT the admin user!"
# fi

# if (( $EUID == 0 )); then
#   echo "Please do not ru as root"
#   exit
# fi


# Switch case statements

# The Bash case statement syntax looks like this:
# case $some_variable in
#   pattern_1)
#     commands
#     ;;
# 
#   pattern_2| pattern_3)
#     commands
#     ;;
# 
#   *)
#     default commands
#     ;;
# esac

echo -n "Enter the name of a car brand: "
read car

case $car in
  Tesla)
    echo "${car}'s factory in the USA."
    ;;
  BMW | Mercedes | Audi | Porsche)
    echo "${car}'s factory in Germany"
    ;;
  Toyoda | Mazda | Mitsubishi | Subaru)
    echo "${car}'s factory in Japan."
    ;;
  *)
    echo "${car} is an uknown car brand"
    ;;
esac
