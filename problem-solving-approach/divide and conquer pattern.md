# Divide and conquer pattern
This pattern involves dividing a data set into smaller chunks and then repeating a process with a
subset of data
This pattern can tremendously decrease time complexity

function search(arr, val){
    let min = 0;
    let max = arr.length -1 ;
    while(min <= max){
        let mid = Math.floor((min + max)/2);
        let curr = arr[mid]
        if(curr < val){
            min = mid  + 1
        }else if(arr[mid] > val){
            max = mid - 1
        }else return mid

    }
    return - 1;
    
}