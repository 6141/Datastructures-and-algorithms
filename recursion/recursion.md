# Recursion

A process that calls itself
Example: JSON.parse , JSON.stringify
document.getElementById and DOM traversal algorithms
Object traversal

# Callstack

whenever new function is executed that will be put(pushed) in the callstack top and whenever its execution is done
that will be poped from the callstack
But in our recursive case new functions will be added up on to the callstack and calling again and again

we need to have some base case to end the recursive function

Invoke the same function with different inputs until base condition is reached

Base case in the sense condition where recursion ends

function countDown(num){
if(num < 0) return
console.log(num)
countDown(num - 1)
}

function sumRange(num){
if(num === 1)return 1;
return num + sumRange(num - 1)
}

function factorial(num){
if(num === 1) return 1
return num \* factorial(num - 1)
}

# Helper method recursion

we will have two functions one is outer function and other is helper function

function collectOdds(arr){
let result = [];

    function helper(arr){
      if(arr.length === 0 ) return
      if(arr[0]%2 !== 0) result.push(arr[0])
      helper(arr.slice(0))

    }
    helper(arr);
    return result

}

# common problems

No base case
if we forget return or return wrong things it will go into infinte loop
and call stack limit will get exceeded

# PURE RECURSION

function collectOdds(arr){
let newArr = [];
if(arr.length === 0 ) return newArr
if(arr[0]%2 !== 0) newArr.push(arr[0])
newArr = newArr.concat(collectOdds(arr.slice(0)))
return newArr

}
 
# Pure recursion tips
* For arrays - use method like slice, the spread operator and the concat that make copies of arrays so 
you do not mutate them
* For strings(immutable) you will need to use methods like slice,substr, or substring to make copies of them
* To make copies of objects use Object.assign, or spread operator