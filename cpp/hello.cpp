// #include <iostream>
// using namespace std;
// 
// int main() {
// 	int a;
// 	char test = "Hello";
// 	std::cout << "Hello, World!" << std::endl;
// 	std::cin >> a;
// 	std::cout << a;
// 	cout << "Hello, World!" << endl;
// 	cin >> a;
// 	cout << a << endl;
// 	return 0;
// }

#include <iostream>


int main() {
	int A, B, sum=0;
	std::cout << "Pls enter a number A: ";
	std::cin >> A;
	std::cout << "Pls enter a number B: ";
	std::cin >> B;
	sum = A + B;
	if (sum > 50) {
		std::cout << "sum is greater than fifty!\n";
	} else {
		std::cout << "sum is less than fifty!!!\n";
	}
	// std::cout << A + B << std::endl;
	return 0;
}
