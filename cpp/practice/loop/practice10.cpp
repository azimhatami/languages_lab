#include <iostream>

int main() {
	int num, digits, big = 0;
	std::cout << "pls enter a number: ";
	std::cin >> num;

	while (num != 0) {
		digits = num % 10;
		if (digits > big) {
			big = digits;
		}
		num = num / 10;
	}

}
