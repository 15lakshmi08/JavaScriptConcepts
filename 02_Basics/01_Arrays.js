// // Basics of Array

// const arr=[8, 9, 10, 11, 12];
// // console.log(arr[0]);

// // const newArr=["Lakshmi","Manu","Radhey"];
// // console.log(newArr[2]);


// // const Arr1=new Array(2,5,8,6);
// // console.log(Arr1[3]);


// // Methods

// // arr.push(4)
// // console.log(arr);

// // arr.pop()

// // arr.unshift(3);
// arr.shift();
// // console.log(arr);

// // console.log(arr.includes(3));
// // console.log(arr.indexOf(3));

// console.log(arr.join());



// Slice and splice method 


const Arr=[2,3,4,5,6,7];
console.log("Origional Array >>>",Arr);

const mn=Arr.slice(1,3);
console.log("Sliced Array >>>",mn);
console.log("ORIGINAL",Arr);


const mn1=Arr.splice(1,3);
console.log("Spliced Array >>>",mn1);
console.log("ORIGINAL",Arr);
