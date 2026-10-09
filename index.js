// Function 1: Calculate 10% tax
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: Convert a string to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: Find the maximum of two numbers
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

// Function 4: Check whether a word is a palindrome
function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

// Function 5: Calculate the discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discount = originalPrice * (discountPercentage / 100);
    return originalPrice - discount;
}
console.log(calculateTax(100));                       
console.log(convertToUpperCase("hello"));             
console.log(findMaximum(10, 20));                    
console.log(isPalindrome("madam"));                   
console.log(isPalindrome("hello"));                   
console.log(calculateDiscountedPrice(100, 20));       