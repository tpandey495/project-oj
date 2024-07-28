#include <iostream>
int main() {
int num1, num2, sum;
// Ask the user to enter two integers
std::cout << "Enter two integers: ";
std::cin >> num1 >> num2;
// Calculate the sum of the two integers
sum = num1 + num2;
// Display the sum
std::cout << "The sum of " << num1 << " and " << num2 << " is " << sum << std::endl;
return 0;
}