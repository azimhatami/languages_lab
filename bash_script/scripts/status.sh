#!/bin/bash

# Script that returns the current server status

##
# Bash script that checks:
#   - Memory usage
#   - CPU load
#   - Number of TCP connections
#   - Kernel version
##

server_name=$(hostname)

memory_check() {
    echo "The current memory usage on ${server_name} is: "
    free -h
    echo ""
}

cpu_check() {
    echo "CPU load on ${server_name} is: "
    echo " - $(uptime -p)"
  echo ""
}

tcp_check() {
  echo "TCP connections on ${server_name}: "
  echo " - $(cat /proc/net/tcp | wc -l)"
  echo ""
}

kernel_check() {
    echo "Kernel version on ${server_name} is: "
    echo " - $(uname -r)"
    echo ""
}

all_checks() {
  memory_check
  cpu_check
  tcp_check
  kernel_check
}

all_checks
