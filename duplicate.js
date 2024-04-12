// 3. Write a function to remove duplicates from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage:
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(`Array with duplicates: ${arrayWithDuplicates}`);
console.log(`Array without duplicates: ${removeDuplicates(arrayWithDuplicates)}`);


