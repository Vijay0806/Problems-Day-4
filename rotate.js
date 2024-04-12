// 4. Write a function to rotate an array to the right by k steps.

function rotateArray(arr, k) {
    k %= arr.length;
    reverseArray(arr, 0, arr.length - 1);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, arr.length - 1);
    return arr;
}

function reverseArray(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const steps = 2;
console.log(`Original array: ${myArray}`);
console.log(`Array rotated by ${steps} steps: ${rotateArray(myArray, steps)}`);
