// 1)Write a function to reverse an array in place.


// Function to reverse an array in place
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

// Example 
const myArray = [1, 2, 3, 4, 5];
console.log(`Original array: ${myArray}`);
console.log(`Reversed array: ${reverseArrayInPlace(myArray)}`);
