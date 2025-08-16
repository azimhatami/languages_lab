#!/bin/bash

# echo "Argument one is $1"
# echo "Argument two is $2"
# echo "Argument three is $3"

# Save the file and make it executable:
#   chmod +x arguments.sh
#
# Then run the file and pass 3 arguments:
#   ./arguments.sh dog cat bird
#
# The output that you would get would be:
#   Argument one is dog
#   Argument two is cat
#   Argument three is bird

echo "All arguments: $@"

# If you run the script:
#   ./arguments.sh dog cat bird

# You will get the following output:
#   All arguments: dog cat bird
