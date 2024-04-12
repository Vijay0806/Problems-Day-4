// 5. Write a function to merge two sorted arrays into a single sorted array.

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}

// Example usage:
const sortedArray1 = [1, 3, 5, 7, 9];
const sortedArray2 = [2, 4, 6, 8, 10];
console.log(`Sorted array 1: ${sortedArray1}`);
console.log(`Sorted array 2: ${sortedArray2}`);
console.log(`Merged sorted array: ${mergeSortedArrays(sortedArray1, sortedArray2)}`);
