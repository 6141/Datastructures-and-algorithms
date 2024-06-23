# sliding window

This pattern involves creating a window which can either be an array or number from one posn to another
Depending on a certain condition,the window either increases or closes(and a new window is created)
Very useful for keeping track of a subset of data in an array/string etc
Examples: finding largest unique substring in a string
* Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the max sum of n consecutive elements in array
 

 function maxSubarraySum(arr, num){
    if(arr.length < num) return null
      let max = -infinity
    for(let i = 0; i < arr.length - num + 1 ; i++){
        let temp = 0 
        for(let j = 0; j < num; j++){
            temp = temp + arr[i+j]
        }
        if(temp > max){
            max = temp
        }
    }
    return max;        // time complexity O(n^2)


 }

 refactor 
 we dont need to add the numbers always we will just subtract the first and add the next

 function maxSubarraySum(arr, num){
    if(arr.length < num) return null
    let temp = 0;
    let max = 0;
    for(let i = 0; i < num ; i++){
      max = max + arr[i]                     // time complexity O(n)
    }
    temp = max

    for(let i = num; i < arr.lentgh ; i++){
        temp = temp - arr[i - num] + arr[i]
        max = Math.max(temp, max)
    }
    return max

 }

