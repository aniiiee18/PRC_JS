//this is how you can creat function 
function sum (num1, num2){
 return num1+num2;
}

// console.log(sum(4,2));



function isLoggedIn(user)
{
    if(!user)
    {
        // console.log("plese enter username");
        return;
    }

    // console.log(`${user} just logged in`)
    return;
}

isLoggedIn("aniket");


const myinfo = {
    name:"aniket",
    class:"7th",
    surname:"panche"
}

function anyobj(obj1)
{
    console.log(`${obj1.name} is in class ${obj1.class}`)
}

anyobj(myinfo);


function values(aray){
    return aray[2];
}

let ans = values([23,45,12,67,89,90]);
console.log(ans);