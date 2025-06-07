#include <iostream>
using namespace std;

// int main() {
 
// 	cout << "1+";
 
// 	for (int i = 2; i <= 100; i++) {
// 		cout << "1/" << i << "+";
// 	}
 	
// 	return 0;
// }

//int main() {
//
//	int num, max_num;
//
//	for (int i = 0; i < 4; i++) {
//		cout << "pls enter second number: ";
//		cin >> num;
//		if (num > max_num) {
//			max_num = num;
//		}
//	}
//
//	cout << "Max number: " << max_num << endl;
//
//	return 0;
//}


// int main() {
// 	int num, max_num = 0, prevMax = max_num;
// 	for (int i = 0; i < 3; i++) {
// 		cout << "pls number: ";
// 		cin >> num;
// 
// 		if (num > max_num) {
// 			prevMax = max_num;
// 			max_num = num;
// 		} else if (num > prevMax) {
// 			prevMax = num;
// 		}
// 	}
// 
// 	cout << "Max Number: " << max_num << endl;
// 	cout << "PrevMax Number: " << prevMax << endl;
// 
// 	return 0;
// }

// int main () {
// 	int num, min_num, prevMin;
// 	for (int i = 0; i < 4; i++) {
// 		cout << "Pls number: ";
// 		cin >> num;
// 
// 		if (num < min_num) {
// 			prevMin = min_num;
// 			min_num = num;
// 		} else if (num < prevMin) {
// 			prevMin = num;
// 		}
// 	}
// 
// 	cout << "Min number: " << min_num << endl;
// 	cout << "Prev Min number: " << prevMin << endl;
// 
// 	return 0;
// }

// int main() {
// 
// 	int num, max_num = 0, count_max;
// 
// 	for (int i = 0; i < 4; i++) {
// 		cout << "pls enter second number: ";
// 		cin >> num;
// 		if (num > max_num) {
// 			max_num = num;
// 			count_max = 1;
// 		} else if (num == max_num) {
// 			count_max++;
// 		}
// 	}
// 
// 	cout << "Max number: " << max_num << endl;
// 	cout << "Max count number: " << count_max << endl;
// 
// 	return 0;
// }

// int main() {
// 	int num, c = 0;
// 	cout << "pls enter a number: ";
// 	cin >> num;
// 
// 	while (num != 0) {
// 		num = num / 10;
// 		c++;
// 	}
// 
// 	cout << "digits : " << c;
// 
// 	return 0;
// }

// int main() {
// 	int num, max = 0, rem;
// 	cout << "pls enter a number: ";
// 	cin >> num;
// 
// 	while (num != 0) {
// 		rem = num % 10;
// 		num = num / 10;
// 		if (rem > max) {
// 			max = rem;
// 		}
// 	}
// 
// 	cout << "Max digit: " << max;
// }

// int main() {
// 
// 	int num, a, b;
// 
// 	cout << "pls enter a num: ";
// 	cin >> num;
// 
// 	while (num != 0) {
// 		a = num % 10;
// 		b = b * 10 + a;
// 		num = num /10;
// 	}
// 
// 	cout << b;
// 
// 	return 0;
// }

// int main () {
// 	for (int i = 1; i <= 10; i++) {
// 		cout << endl;
// 		for (int j = 1; j <= 10; j++) {
// 			cout << i * j << "\t";
// 		}
// 	}
// 
// 	return 0;
// }


int main() {

	for(int i = 1; i <= 4; i++) {
		cout << endl;
		for (int j = 1; j <= i; j++) {
			cout << j;
		}
	}

	return 0;
}
