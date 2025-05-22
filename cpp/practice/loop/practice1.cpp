#include <iostream>

int main() {
	int num, sum = 0;
	for (int i = 0; i < 3; i++) {
		std::cout << "Pls enter a num: ";
		std::cin >> num;
		sum += num;
	}

	std::cout << "sum: " << sum << std::endl;

	return 0;
}
