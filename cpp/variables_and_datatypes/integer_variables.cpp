#include <iostream>

int main() {
    // Declaring short integer (typically 2 bytes)
    short smallNumber = 32767;

    // Declaring standard integer (typically 4 bytes)
    int regularNumber = 2147483647;

    // Declaring long integer (typically 4 or 8 bytes)
    long largeNumber = 9223372036854775807L;

    // Printing the values of different integer types
    std::cout << "Short Integer: " << smallNumber << std::endl;
    std::cout << "Regular Integer: " << regularNumber << std::endl;
    std::cout << "Long Integer: " << largeNumber << std::endl;

    return 0;
}
