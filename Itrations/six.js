const myArray = [1, 2, 3, 4]

const newval = myArray.reduce((acc, item) => (acc + item), 0);
// console.log(newval) 

const myArray2 = ["H", "E", "L", "L", "O"]
const newval2 = myArray2.reduce((acc, item) => (acc+item),"")
// console.log(newval2);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const newva = shoppingCart.reduce((acc, item) => (acc+" "+item.itemName), "")
console.log(newva)

const newva3 = shoppingCart.reduce((acc, item) => (acc+item.price), 0)
console.log(newva3)