function fibonacci(num) {
    if (num <= 0) {
        return "Input should be a positive integer greater than zero";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        let a = 0, b = 1;
        for (let i = 3; i <= num; i++) {
            [a, b] = [b, a + b];
        }
        return b;
    }
}

// Example usage
// You can add more examples or remove this part
console.log(fibonacci(1));  // Output: 0
console.log(fibonacci(5));  // Output: 3

// Export the function
module.exports = fibonacci;
