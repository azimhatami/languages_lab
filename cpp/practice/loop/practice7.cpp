#include <iostream>

int main() {
	int number;
	int max_num = 0;
	for (int i = 0; i < 3; i++) {
		std::cout << "pls enter a number: ";
		std::cin >> number;
	}
	if (number > max_num) {
		max_num = number;
		std::cout << "Max number: " << max_num << std::endl;
	}

	return 0;
}
