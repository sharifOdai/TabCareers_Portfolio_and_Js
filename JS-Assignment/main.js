
function findTheMissingNumber(arr){

    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < n; i++) {
        
        actualSum += arr[i];

    }

    return expectedSum - actualSum;

}

const arr1 = [3, 0, 1]; 
console.log("the missing number is: " + findTheMissingNumber(arr1)); 

const arr2 = [9, 6, 4, 2, 3, 5, 7, 0, 1]; 
console.log("the missing number is: " + findTheMissingNumber(arr2)); 

const arr3 = [2,0,1,3,6,7,5];
console.log("the missing number is: " + findTheMissingNumber(arr3))