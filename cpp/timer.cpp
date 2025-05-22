#include <iostream>

int calculateTime(int hours, int minutes, int seconds) {
	int total_seconds = (hours * 3600) + (minutes * 60) + seconds;

	return total_seconds;
}

int main() {
	// 1 hour -> 60 min = 3600s
	// 1 min -> 60 second = 60s
	int hour, min, second;

	std::cout << "pls enter a hour: ";
	std::cin >> hour;
	std::cout << "pls enter a minute: ";
	std::cin >> min;
	std::cout << "pls enter a second: ";
	std::cin >> second;
	std::cout << "Total Seconds: " << calculateTime(hour, min, second) << std::endl;

	return 0;

}
