#include <iostream>
#include <iomanip>

int main() {
    // Declaring and initializing float variables
    float smallDecimal = 3.14f;  // 'f' suffix indicates float
    float scientificNotation = 2.5e3f;  // 2.5 × 10^3 = 2500.0

    // Declaring and initializing double variables
    double preciseDecimal = 3.14159265359;
    double largeDecimal = 1.23456789e10;  // 12,345,678,900.0

    // Setting precision for decimal output
    std::cout << std::fixed << std::setprecision(4);

    // Printing float values
    std::cout << "Float Values:" << std::endl;
    std::cout << "Small Decimal: " << smallDecimal << std::endl;
    std::cout << "Scientific Notation: " << scientificNotation << std::endl;

    // Printing double values
    std::cout << "\nDouble Values:" << std::endl;
    std::cout << "Precise Decimal: " << preciseDecimal << std::endl;
    std::cout << "Large Decimal: " << largeDecimal << std::endl;

    return 0;
}
