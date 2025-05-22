#include <iostream>

int main() {
	int num;
	std::cout << "pls enter a num: ";
	std::cin >> num;
	if (num % 2 == 0){
		std::cout << "number is even -> " << num << std::endl;
	} else {
		std::cout << "number is odd -> " << num << std::endl;
	}

	return 0;
}
