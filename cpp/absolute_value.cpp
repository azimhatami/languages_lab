#include <iostream>

int main() {
	int num;
	std::cout << "Pls enter a number: ";
	std::cin >> num;
	if (num > 0) {
		std::cout << num << std::endl;
	} else {
		std::cout << num * -1 << std::endl;
	}

	return 0;
}
