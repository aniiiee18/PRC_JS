const course = {
    coursename:"jscourse hindi",
    price : "3600",
    tutor : "Hitesh"
}

// aam jindagi
console.log(course.coursename);


//by destrucring obj;
const {coursename} = course; 
console.log(coursename);

//ex using react();

const abc = (props) =>{
    const name = props.name;
}

//instead of that we use this method of obj destrucring
const abc1 = ({name}) =>{
 //now use it anywhere by name
}