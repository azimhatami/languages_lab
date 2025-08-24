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
    echo "  The current memory usage on ${server_name} is: "
    free -h | sed 's/^/  /'
    echo 
}

cpu_check() {
    echo "  CPU load on ${server_name} is: "
    echo "   │"
    echo "   └ $(uptime -p)"
    echo 
}

tcp_check() {
  echo "  TCP connections on ${server_name}: "
  echo "   │"
  echo "   └ $(cat /proc/net/tcp | wc -l)"
  echo 
}

kernel_check() {
    echo "  Kernel version on ${server_name} is: "
    echo "   │"
    echo "   └ $(uname -r)"
    echo
}

all_checks() {
  memory_check
  cpu_check
  tcp_check
  kernel_check
}

# all_checks

# Color variable
green='\033[1;32m'
blue='\033[1;34m'
red='\e[1;31m'
y='\033[1;33m'
cyan='\033[1;36m'
clear='\e[0m'

# Color Functions
color_green() {
  echo -ne $green$1$clear
}

color_blue() {
  echo -ne $blue$1$clear
}

menu() {
  echo -ne " \
  $y✦ ──── MENU ──── ✦
  $(color_green '1)') Memory usage
  $(color_green '2)') CPU load
  $(color_green '3)') Number of TCP connections
  $(color_green '4)') Kernel version
  $(color_green '5)') Check All
  $(color_green '0)') Exit
  $(color_blue 'Choose an option: ')"
  read a
  echo
  
  case $a in
    1) memory_check ; menu;;
    2) cpu_check ; menu;;
    3) tcp_check ; menu;;
    4) kernel_check ; menu;;
    5) all_checks ; menu;;
    0) echo
       echo -e "${cyan}\t┌───────────────────────────────────────────────┐${clear}"
       echo -e "${cyan}\t│  Thank you for using our system! Goodbye! ❤   │${clear}"
       echo -e "${cyan}\t└───────────────────────────────────────────────┘${clear}"
       echo
       exit 0 ;;
    *) echo -e $red"\tWrong option ✗\n"$clear ; sleep 1 ; menu;;
  esac
}

clear
menu
