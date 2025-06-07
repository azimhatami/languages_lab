#include <iostream>
using namespace std;

//int main () {
//	int num1, num2;
//
//	cout << "Pls enter a first number: \n";
//	cin >> num1;
//
//	cout << "Pls enter a second number: \n";
//	cin >> num2;
//
//	cout << "Numbers sum: " << num1 + num2 << endl;
//
//	return 0;
//}

// int main () {
// 	int num;
// 
// 	cout << "Pls enter a number: \n";
// 	cin >> num;
// 
// 	cout << "number: " << 100 - num << endl;
// 
// 	return 0;
// }

int main () {
	int num1, num2, sum;

	cout << "Pls enter a first number: \n";
	cin >> num1;

	cout << "Pls enter a second number: \n";
	cin >> num2;

	sum = num1 + num2;

	if (sum > 100) {
		cout << "Number: " << sum << endl;
	} else {
		cout << "Pls try again\n";
	};

	return 0;
}

