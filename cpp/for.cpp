#include <iostream>

int main() {
    // Basic counter-controlled for loop
    std::cout << "Counting from 1 to 5:" << std::endl;
    for (int i = 1; i <= 5; i++) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    // For loop with multiple statements in initialization
    std::cout << "Counting even numbers from 0 to 10:" << std::endl;
    for (int j = 0, k = 10; j <= k; j += 2) {
        std::cout << j << " ";
    }
    std::cout << std::endl;

    // For loop with multiplication table
    std::cout << "Multiplication table for 5:" << std::endl;
    for (int m = 1; m <= 10; m++) {
        std::cout << "5 x " << m << " = " << (5 * m) << std::endl;
    }

    return 0;
}
