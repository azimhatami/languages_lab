#include <iostream>

int main() {
	int min_num, prevmin_num, number; 
	for (int i = 0; i < 3; i++) {
		std::cout << "pls enter a number: ";
		std::cin >> number;
		if (number < min_num) {
			prevmin_num = min_num;
			min_num = number;
		} else if (number < prevmin_num) {
			prevmin_num = number;
		}
	}
	std::cout << "Min number: " << min_num << std::endl;
	std::cout << "Prev min number: " << prevmin_num << std::endl;

	return 0;
}
