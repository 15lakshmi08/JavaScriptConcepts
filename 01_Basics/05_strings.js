const name="Lakshmi Singh";
const id=10;

// console.log(name+count+"Lakshmi");

console.log(`Hello my name is ${name} and my id is ${id}`);

const Name=new String('Lakshmi');  //This method stores the key and value pairs[Strings:"Lakshmi"]
console.log(Name);
console.log(Name[5]);

console.log(Name.__proto__);

// String Methods----------------------------------------------------------------------------------------

// console.log(Name.length);
// console.log(Name.toUpperCase());
// console.log(Name.charAt(5));
// console.log(Name.indexOf(5));


const newStr=Name.substring(0,4)
console.log(newStr);



// In slice method we can give negative index but in substring method we can't give any negative index
const str=Name.slice(-8,3)
console.log(str);

// It remove white spaces
const One="      Lakshmi     ";
console.log(One.trim());


console.log(One.replace("a","A"));
console.log(One.includes("akshmi"));

const Split="M a n u";
console.log(Split.split(" "));
