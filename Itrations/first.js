// console.log("commint")\

// for of

let arr = [4,2,7,4,9]

for (const num of arr) {
    // console.log(num);
}

let str = "aniketPanche"
for (const val of str) {
    // console.log(val)
}

const myobj = {
    name:"anket",
    class:"12th",
    age:22,
    color:"brown"
}

for (const key of myobj) {
    // console.log(key)   ------>this is giving an error becous we cant use for of on objects
}

//BUT this is also giving errros
for (const [key, value] of myobj) {
    console.log(key, value)
}