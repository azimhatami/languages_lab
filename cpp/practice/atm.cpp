#include <iostream>

void minCoins(int amount) {
	int tenCoins = amount / 10;
	amount %= 10;
	int twoCoins = amount / 2;
	amount %= 2;
	int oneCoins = amount / 1;
	amount %= 1;

	std::cout << "Ten Coins: " << tenCoins << std::endl;
	std::cout << "One Coins: " << oneCoins << std::endl;
	std::cout << "Two Coins: " << twoCoins << std::endl;
}

int main() {
	int amount;
	std::cout << "Please enter the amount of money: ";
	std::cin >> amount;
	minCoins(amount);
	return 0;
}
