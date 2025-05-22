#include <iostream>

int main() {
	int arr[3];
	int eq = 0;

	for (int i = 0; i < 4; i++) {
		std::cout << "Pls enter a num: ";
		std::cin >> arr[i];
	}

	for (int i = 0; i < 4; i++) {
		if (eq < arr[i]) {
			eq = arr[i];
			std::cout << "big number is -> " << eq << std::endl;
		}
	}


	return 0;
}
