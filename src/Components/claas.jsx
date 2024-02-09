// **INCLUDE PSUEDOCODE IN YOUR REPONSE, APPROPRIATELY NAMED VARIABLES, AND AT LEAST ONE TEST CASE/EXAMPLE, BE PREPARED TO THOROUGHLY EXPLAIN YOUR CODE**



///need to write a function that takes an array of integers as inputs/ elements
// return a new array
// each element is square
// mulitiple by 2
//subtract by 1
// may need to push the final element

function transformArray(arr){
    // need to initalize an empty array to store the elements
    const transformedArray = [];
    // iterate through element in the input array using a for loop
    for (let i = 0; i < arr.length; i++){
        // get the current element at index i
        const element= arr[i]
        // square the element
        const squaredElement = element ** 2;
        //mulitiple the square element by 2
        const multipliedElement = squaredElement * 2;
        // reduce the multipled element by subtracting 1
        const finalElement = multipliedElement - 1;
        //console.log(finalElement)
        //push the final element to the transformed array
        transformedArray.push(finalElement)
    }
    return transformedArray
}

// test case
const inputArray = [4, 6, 8,10]
const result = transformArray(inputArray)
console.log(result);
// PART 1:
// - Write a function transformArray(arr) that takes an array of integers as an input and returns a new array where each element is squared, then multiplied by 2, and finally reduced by subtracting 1.

// (DO NOT MOVE ON UNTIL PT.1 IS COMPLETE)