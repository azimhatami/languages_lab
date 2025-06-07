#include <iostream>

using namespace std;

int main() {
	int count = 0;

	cout << "4-digit numbers divisible by 5:\n";

	for (int i = 1000; i <= 9999; i++) {
		if (i % 5 == 0) {
			cout << i << " ";
			count++;
		}
	}

	cout << "\n\nTotal count: " << count << endl;

	return 0;
}



