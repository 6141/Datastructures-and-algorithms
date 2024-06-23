# multiple pointers

creating pointers or values that corresponding to an index or position
and move towards the begininng or end or middle based on condition

 very efficient for solving problems with minimal space complexity as well

 Example:
 write a function call sumZero which accepts a sorted array of integers
 the function should find the first pair where the sum is zero.return an array that includes both 
 values that sum to zero or undefined if pair doesnt exist

 can be solved using nested arrays but time complexity will be O(n^2)

 function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        }else if(sum > 0){
            right--;
        }else left++;
    }

 }

 # Count unique values of array

 function countUniqueElements(sortedArray) {
    if (sortedArray.length === 0) return 0;

    let uniqueCount = 1; // Start with 1 because the first element is always unique
    let i = 0;

    for (let j = 1; j < sortedArray.length; j++) {
        if (sortedArray[i] !== sortedArray[j]) {
            uniqueCount++;
            i = j; // Move the first pointer to the position of the second pointer
        }
    }

    return uniqueCount;
}

