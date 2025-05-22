#include <iostream>

int main() {
	int arr[4];
	int eq;

	for (int i = 0; i < 5; i++) {
		std::cout << "Pls enter a num: ";
		std::cin >> arr[i];
	}

	for (int i = 0; i < 5; i++) {
		std::cout << "Search number: ";
		std::cin >> eq;
		if (eq == arr[i]) {
			std::cout << "number is -> " << eq << std::endl;
			break;
		} else {
			continue;
		}
	}


	return 0;
}
