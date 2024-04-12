// 2. Write a function to find the common elements between two arrays.


function findCommonElements(arr1, arr2) {
    const commonElements = [];
    const set = new Set(arr1);
    for (const num of arr2) {
        if (set.has(num)) {
            commonElements.push(num);
            set.delete(num);
        }
    }
    return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(`Common elements: ${findCommonElements(array1, array2)}`);
