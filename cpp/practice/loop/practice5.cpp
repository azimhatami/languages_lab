#include <iostream>

int main() {
	int num;
	for (int i = 0; i < 10; i++) {
		std::cout << "please enter a number: ";
		std::cin >> num;

		if (num % 2 == 1) {
			std::cout << "Odd number -> " << num << std::endl;
		}

		
	}

	return 0;
}
