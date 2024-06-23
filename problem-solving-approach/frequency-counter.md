# Frequency counter pattern

This pattern uses objects/sets to collect values/frequencies of values
This can avoid nested loop operations O(n^2)operations with arrays and strings


same fnction is given two arrays first one has elements and if second one has sqaure of all the elements in the first return true else false

function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    let obj1 = {};
    let obj2 = {};
    for(let val of arr1){
        obj1[val] = (obj1[val] || 0) +1
    }
    for(let val of arr2){
        obj2[val] = (obj2[val] || 0) +1
    }
    for(let key in obj1){
        if(!key ** 2 in obj2){
            return false
        }
        if(obj2[key ** 2] !== obj1[key]) return false
    }
    return true 

}

# valid Anagram solution:
function same(str1, str2){
    if(str1.length !== str2.length) return false
    let obj1 = {}
    let obj2 = {}
    for(let val of str1){
        obj1[val] =( obj1[val] || 0) + 1
    }
    console.log(obj1)
     for(let val of str2){
        obj2[val] = (obj2[val] || 0) + 1
    }
    console.log(obj2)
    
    for(let key in obj1){
        if(!(key in obj2)){
          return false
        }
        if(obj1[key] !== obj2[key]) return false
    }
    return true
}

 console.log(same('hii', 'ihi '));