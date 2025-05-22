#include <iostream>

int main() {
	int max_num = 0; 
	int prevMax = max_num;
	for (int i = 0; i < 4; i++) {
		int number;
		std::cout << "pls enter a number: ";
		std::cin >> number;
		if (number > max_num) {
			prevMax = max_num;
			max_num = number;
		} else if (number > prevMax) {
			prevMax = number;
		}
	}
	std::cout << "Max number: " << max_num << std::endl;
	std::cout << "Prevmax number: " << prevMax << std::endl;

	return 0;
}
