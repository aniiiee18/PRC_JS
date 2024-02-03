// console.log(this) //gives null objects

const obj = {
    name:"aniket",
    class:"7th",
    func:function(){
        console.log(`${this.name}`)
    }
}

// console.log(this.obj); //gives an undefined

// obj.func; 


// Normal way of declaring a function
// const fun =  function(){
//     console.log("printing")
// }

// function abhi(){
//     console.log("this  is also a type")     
// }


// now we will create a arrow function

const arro = ()=>(
    console.log("in this type you don't need to return")
)

// arro()

const arr02 = ()=>{
    console.log("in this you have to return")
}
// arr02()

// ex

//no return type required
const fun1 = (num1, num2)=>(
    num1+num2
)
console.log(fun1(4,5));

//this willl give a undifined value if return is not used
const fun2 = (num1, num2)=>{
    return num1+num2
}
console.log(fun2(6,7));


