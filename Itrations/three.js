// for each

let arr = [1,2,3,4,5,6,7,8,9,10]

arr.forEach( (ele) => (console.log(ele*2)) );
// forEach value takes callback function as input

//other way to  print it

function printme(item){
    // console.log(item)
}

arr.forEach(printme); //this is we sent a predifined function


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach(element => {
    console.log(element.languageName ,element.languageFileName)
});