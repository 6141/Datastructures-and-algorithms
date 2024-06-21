// TIME COMPLEXITY

function AdduptoN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

function AdduptoNUsingFormula(n){
    return (n*(n+1))/2
}

//whats does better mean??
// Faster 
// or 
// Less memory intensive
// More readable

let t1 = performance.now()
AdduptoN(1000000000000000000000)
let t2 = performance.now()
console.log(t2-t1) // will give us the difference and in the above case AdduptoNUsingFormula is giving faster solution
// (this always varies)

// But there is problem with time:
// Different machines will record different time
// same machine will record different time
// For fast algorithms, speed measurements may not be precise enough


// rather than counting seconds, which are so variable...
// lets count the simple operations which computer has to perform
// In second AdduptoNUsingFormula() we have only 1 *, 1 +, 1/
// In first method we have so many operations 
// += -- n assignments , n additions
// n comparisions
// i++ n assignments , n additions
// i=1, sum = 0  -- 2 assignments


// Big O notation - Its relationship between input given and increasing it how the runtime is effecting

// we say that algorithm O(fn(n)) is the number of the simple operations the computer has to do
// is eventually less than a constant times f(n), as n increases


// functions can be linear, quadratic, constant or completely different

// AdduptoNUsingFormula for this method as value is almost constant when n is increased - O(1)(always 3 operations)


// AdduptoN In this case Number of operations is eventually bounded by multiple of n(say, 10n) - O(n) -O(5n)==> o(n)

// lets say if i have a function if we have two loops - it willbe O(n)

// lets say i have nested two loops - it will be O(n^2) --> O(n ) inside  O(n) operation

// RULES TO SIMPLIFY WHILE CALCULATING TIME COMPLEXITY
// 1) constants doesnt matter O(n) == O(5n) == O(2n)
// O(500) == O(1) O(13n^2) == O(n^2)
// 2) smaller terms doesnt matter
// O(n+1) == O(n) lets say i have quadratic expression consider only o(n^2)

// Big O shorthands
// 1) Arithmetic operations are constant
// 2)var assignments is also constant
// 3) Accessing elements in Array(by index) or in Object(by key) is constant // finding first item 
// 4) In the loop complexity will be the length of the loop items

function atLeast5(n){
    for(var i =1;i <= Math.max(5, n); i++){
        console.log(i)
    }
}
// O(n) -- as n times loop will be running
function atMost5(n){
    for(var i =1;i <= Math.min(5, n); i++){
        console.log(i)
    }
}
// O(1)  at most 5 times itwill be running


// SPACE COMPLEXITY

// How much additional memory do we need to allocate in order to run the algorithm
// Auxilary space complexity -- space required by algorithm without space taken by inputs
// rules
// 1)most primitives - (booleans,numbers...) takes constant space O(1)
// 2) strings , arrays(n - length) and objects(n - keys) require O(n)


// Logarithms(log is invertion of exponential)
// log8 base 2 = 3 ==> 2^3

// Time complexity -- O(1) < O(log n) < O(n) < O(nlog n) < O(n^2)
// sorting searching recursion algorithms involves logs
