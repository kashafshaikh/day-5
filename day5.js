// 30-Day DSA Challenge from Hello Coders Team
// Day 5 Tasks 
//*Question 1: Array Comparison and Manipulation 
// Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:
// 1. *If the lengths of both arrays are the same and all elements are the same:*
//    - Merge both arrays into one array.
//    - Multiply all elements of the merged array to produce a single number.
//    - Return the product.
// 2. *If the lengths of both arrays are different:*
//    - Merge both arrays into one array.
//    - Return the middle element of the merged array.
// 3. *If the lengths of both arrays are the same but elements are different:*
//    - Make the elements of both arrays the same by adding corresponding elements.
//    - Merge the arrays.
//    - Return the sum of the elements of the resulting merged array.
// *Hints:*
// - Use loops to compare elements and calculate new values.
// - Avoid using built-in array methods.
// - Think about how to find the middle element of an array when lengths are different.
// *Example:*
// typescript
// function manipulateArrays(arr1: number[], arr2: number[]): number {
// Your implementation here
// }
// Example Test Cases
// manipulateArrays([1, 2, 3], [1, 2, 3]) should output 216 (product of [1, 2, 3, 1, 2, 3])
// manipulateArrays([1, 2], [3, 4, 5]) should output 3 (middle element of [1, 2, 3, 4, 5])
// manipulateArrays([1, 2], [3, 4]) should output 6 (sum of [1, 2, 1, 2])
function manipulateArrays(arr1, arr2) {
    function areArraysEqual(a, b) {
        if (a.length !== b.length)
            return false;
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    }
    // Case 1: If lengths are same and elements are same
    if (arr1.length === arr2.length && areArraysEqual(arr1, arr2)) {
        // Merge both arrays
        var mergedArray = arr1.concat(arr2);
        // Multiply all elements of merged array
        var product = 1;
        for (var _i = 0, mergedArray_1 = mergedArray; _i < mergedArray_1.length; _i++) {
            var num = mergedArray_1[_i];
            product *= num;
        }
        return product;
    }
    // Case 2: If lengths are different
    if (arr1.length !== arr2.length) {
        // Merge both arrays
        var mergedArray = arr1.concat(arr2);
        // Return the middle element of merged array
        var middleIndex = Math.floor(mergedArray.length / 2);
        return mergedArray[middleIndex];
    }
    // Case 3: If lengths are same but elements are different
    if (arr1.length === arr2.length && !areArraysEqual(arr1, arr2)) {
        var summedArray = [];
        for (var i = 0; i < arr1.length; i++) {
            summedArray.push(arr1[i] + arr2[i]);
        }
        // Sum of all elements in the resulting array
        var sum = 0;
        for (var _a = 0, summedArray_1 = summedArray; _a < summedArray_1.length; _a++) {
            var num = summedArray_1[_a];
            sum += num;
        }
        return sum;
    }
    // Default return in case none of the conditions match
    return 0;
}
console.log(manipulateArrays([1, 2, 3], [1, 2, 3])); // Output: 36
console.log(manipulateArrays([1, 2, 3], [4, 5])); // Output: 3
console.log(manipulateArrays([1, 2], [3, 4])); // Output: 10
// *Question 2: Extract First Letters from String Array*
// Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing the first letter of each name.
// *Hints:*
// - Iterate through each name in the array.
// - Extract the first letter of each name without using built-in methods.
// *Example:*
// typescript
// function extractFirstLetters(names: string[]): string[] {
//     // Your implementation here
// }
// // Example Test Case
// // extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"]) should output ["A", "B", "C", "D", "E"]
function extractFirstLetters(name) {
    var firstLetter = [];
    for (var i = 0; i < name.length; i++) {
        firstLetter.push(name[i][0]);
    }
    return firstLetter;
}
console.log(extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"])); // output ["A", "B", "C", "D", "E"]
// *Hints:*
// - Use loops to compare elements and calculate new values.
// - Avoid using built-in array methods.
// - Think about how to find the middle element of an array when lengths are different.
// *Example:*
// typescript
// function manipulateArrays(arr1: number[], arr2: number[]): number[] | number {
//     // Your implementation here
// }
// // Example Test Cases
// // manipulateArrays([1, 2, 3], [1, 2, 3]) should output [1, 4, 9]
// // manipulateArrays([1, 2], [3, 4, 5]) should output 2
// // manipulateArrays([1, 2, 3], [4, 5, 6]) should output [5, 7, 9]
// ---
// *Question 2: Extract First Letters from String Array*
// Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing the first letter of each name.
// *Hints:*
// - Iterate through each name in the array.
// - Extract the first letter of each name without using built-in methods.
// *Example:*
// typescript
// function extractFirstLetters(names: string[]): string[] {
//     // Your implementation here
// }
// // Example Test Case
// // extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"]) should output ["A", "B", "C", "D", "E"]
