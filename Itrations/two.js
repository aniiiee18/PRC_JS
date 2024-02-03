// for in

const myobj = {
    name:"anket",
    class:"12th",
    age:22,
    color:"brown"
}

for (const key in myobj) {
    // console.log(key)   ---->this will only print keys
    // console.log(myobj[key]) ----->and this will only print values
    // console.log(key,`:-`, myobj[key])  -----> right way to print
}

let arr = ["cpp", "rb", "py", "js", "java"]
for (const valued in arr) {
    // console.log(valued)  ----->>this will also print the array
}
