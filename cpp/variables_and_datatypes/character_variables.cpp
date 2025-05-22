#include <iostream>

int main() {
    // Declaring and initializing character variables
    char letter = 'A';
    char number = '7';
    char symbol = '$';

    // Printing character values
    std::cout << "Letter: " << letter << std::endl;
    std::cout << "Number: " << number << std::endl;
    std::cout << "Symbol: " << symbol << std::endl;

    // Demonstrating character arithmetic
    char nextLetter = letter + 1;
    std::cout << "Next Letter: " << nextLetter << std::endl;

    // ASCII value of characters
    std::cout << "ASCII value of 'A': " << (int)letter << std::endl;

    return 0;
}
