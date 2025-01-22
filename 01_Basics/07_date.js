let myDate=new Date();


// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());


// -------------------------------OUTPUT----------------------------------

// 2025-01-22T15:48:00.942Z
// Wed, 22 Jan 2025 15:48:11 GMT
// Wed Jan 22 2025
// 2025-01-22T15:48:37.311Z
// 22/1/2025
// 22/1/2025, 9:18:56 pm
// 9:19:06 pm
// Wed Jan 22 2025 21:19:14 GMT+0530 (India Standard Time)
// 21:19:23 GMT+0530 (India Standard Time)




// declare specific date 

// let newDate=new Date(2024,0,01);
// let newDate=new Date(2024,0,1,4,3);
// let newDate=new Date(2024,0,1,4,3,44);
// let newDate=new Date("2023-01-01");
// let newDate=new Date("01-01-2024");

// console.log(newDate.toLocaleString());



let timeStamp=Date.now();
// console.log(timeStamp);
// console.log(newDate.getTime());

// convert into "seconds" because "date.now" is giving the output in "miliseconds"
// console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth());


console.log(newDate.toLocaleString('default',
    { weekday:"long"}
));