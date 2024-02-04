// filter in js

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newval = arr.filter((item)=>(item>5));
// console.log(newval)  this will print all the values grater then 5

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const newval = books.filter((val) => (val.genre === "History"))
// console.log(newval) this will print all the books which genre is history

// const newval = books.filter((val) => (val.edition >2000))
// console.log(newval) this will print all the values which editioned is greater then 200

const newval = books.filter((val) => {
    return val.genre === "History" && val.edition>2000
})
// console.log(newval) --->filtering and getting multiple conditions