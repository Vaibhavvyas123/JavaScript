//Create a function that receives an array of numbers and returns an array containing only the positive numbers

var numbers=[6,7,4,3,5,-5,-3]

function positiveArray(numbers)
{
    var newArr=numbers.filter((n)=>{
        return n>0;
    }
    return newArr;
}

console.log(positiveArray(Numbers));