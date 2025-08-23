#!/bin/bash

# Bash Functions

# Functions are a great way to reuse code. The structure of a function in bash is quite similar to most languages:

# function function_name() {
#   your_commands
# }

# Example of a "Hello World!" function:

# hello(name) {
#   echo "Hello ${name}"
# }
 
# hello("Azim")

hello() {
  echo "Hello $1!"
}

hello test
