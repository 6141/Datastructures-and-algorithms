# what is Algorithm?
A process or set of steps to complete some task

# understand the problem
1) can I restate the problem in my own words?
2) what are the inputs going into the problem?
3) what are the outputs that should come from the solution?
4) Do i have enough information to solve the problem
5) How should i label the important pieces of data that are part of problem?

# Explore the examples
* coming up with examples can help you understand better
* Examples also provide sanity checks that your solution works how it should
. start with simple examples
.Progress to more complex examples
.Explore examples with empty inputs
.Explore examples with invalid inputs

# Break it down
* write down the steps u need to take

# simplify/solve
1) try to identify the difficult part
2) temporarily ignore it
3) write a simplified solution
4) then incorperate the difficulty back


function charCount(string) {
    let x = {};
    for (let i = 0; i < string.length; i++) { // make this for(char of string)
        let char = string[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (!x.hasOwnProperty(char)) {
                x[char] = 1;
            } else {
                x[char]++;
            }
        }
    }
    return x;
}

//my approach

function charCount(string) {
    return string.toLowerCase().split('').reduce((acc, curr) => {
        if (/[a-z0-9]/.test(curr)) {
            if (acc.hasOwnProperty(curr)) {
                acc[curr]++;
            } else {
                acc[curr] = 1;
            }
        }
        return acc;
    }, {});
}


