#include <iostream>

int main() {
    int multiplicationTable[10][10];

    for (int i = 0; i < 10; ++i) {
        for (int j = 0; j < 10; ++j) {
            multiplicationTable[i][j] = (i + 1) * (j + 1);
        }
    }

    std::cout << "Multiplication Table 10 * 10:\n";
    for (int i = 0; i < 10; ++i) {
        for (int j = 0; j < 10; ++j) {
            if (multiplicationTable[i][j] < 10) {
                std::cout << "   ";
            } else if (multiplicationTable[i][j] < 100) {
                std::cout << "  ";
            } else {
                std::cout << " ";
            }
            std::cout << multiplicationTable[i][j];
        }
        std::cout << "\n";
    }

    return 0;
}
