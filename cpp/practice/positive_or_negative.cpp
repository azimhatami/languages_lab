#include <iostream>
using namespace std;

int main () {

	int num;

	cout << "Pls enter a number: ";
	cin >> num;

	if (num > 0) {
		cout << num << " is positive\n";
	} else {
		cout << num << " is negative\n";
	}

	return 0;
}

