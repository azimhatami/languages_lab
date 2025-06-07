#include <iostream>

int main() {
	for (int num = 1; num <= 999; num += 2) {
		std::cout << "Even Number: " << num << "\n";
	}

//	for (int num = 0; num <= 999; num++) {
//		if (num % 2 == 0) {
//			std::cout << "Even Number: " << num << std::endl;
//		}
//	}

	return 0;
}
