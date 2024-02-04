const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newval = myArray.map((val)=>(val+10))
// console.log(newval) itrate on every elements in the array 

// you can also use muliple map at once 

const newval = myArray.map((val) => (val+10))
                        .map((val) => (val*10))
                        .map((val) => (val+5))
console.log(newval)