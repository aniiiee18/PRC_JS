let arr = [2,4,6,1,8]
let index = 0;
// while(index<arr.length)
// {
//     console.log(arr[index]);
//     index++;
// }

//this is how you can take inputs in js

while(index<arr.length)
{   
    if(arr[index] == 1)
    {
        console.log(`we have reached our target value ${arr[index]}`)
        break
    }
    console.log(arr[index]);
    index++;
}

// do{
//     console.log(arr[index])
//     index++
// }
// while(index<arr.length)