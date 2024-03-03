#!/bin/bash

# echo "What is your name: " 
# read name

# To reduce the code, we could change the ﬁrst echo statement with the
# read -p, the read command used with -p ﬂag will print a message
# before prompting the user for their input:

read -p "What is your name: " name

echo "Hi there $name"
echo "Welcome to bash script"
