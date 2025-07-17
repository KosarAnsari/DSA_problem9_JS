Recursion in JavaScript

📌 Overview

This project demonstrates the concept of Recursion in JavaScript. A recursive function is a function that calls itself until a specific condition (base case) is met. This approach is widely used in algorithms like factorial, Fibonacci, and tree traversals.


---

✅ Key Concepts

Recursive Function: A function that calls itself.

Base Case: A condition that stops the recursion to avoid infinite loops.

Call Stack: A stack structure that stores function calls during recursion.



---

🧩 Problem Description

Create a recursive function that prints a message "Recursion function" multiple times until a specified limit is reached.


---

💻 Code Implementation

let counter = 1;

function Rec(number) {
    if (counter > number) {
        return; // Base case to stop recursion
    }
    console.log("Recursion function");
    counter++;
    Rec(number); // Recursive call
}

Rec(10); // Calling the function with limit 10


---

▶️ How It Works

1. The function Rec(number) is called with a given number (e.g., 10).


2. It prints "Recursion function" and increments counter.


3. The function calls itself until counter > number.


4. Once the condition is met, recursion stops.




---

🔍 Output

Recursion function
Recursion function
Recursion function
Recursion function
Recursion function
Recursion function
Recursion function
Recursion function
Recursion function
Recursion function


---

✅ Why Recursion?

Simplifies code for problems that can be divided into subproblems.

Useful in divide and conquer algorithms and data structures like trees and graphs.



---

🚀 Next Steps

Implement recursion for Factorial Calculation.

Solve Fibonacci Series using recursion.

Explore Backtracking Problems.



