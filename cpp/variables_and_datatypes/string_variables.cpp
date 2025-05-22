#include <iostream>
#include <string>

int main() {
    // Declaring and initializing string variables
    std::string greeting = "Hello, World!";
    std::string name = "John Doe";
    std::string empty_string;

    // Printing string variables
    std::cout << "Greeting: " << greeting << std::endl;
    std::cout << "Name: " << name << std::endl;

    // String concatenation
    std::string welcome = greeting + " Welcome, " + name;
    std::cout << "Welcome Message: " << welcome << std::endl;

    // String length
    std::cout << "Greeting length: " << greeting.length() << std::endl;

    // Accessing individual characters
    std::cout << "First character of name: " << name[0] << std::endl;

    // Modifying strings
    name = "Jane Smith";
    std::cout << "Updated Name: " << name << std::endl;

    return 0;
}
