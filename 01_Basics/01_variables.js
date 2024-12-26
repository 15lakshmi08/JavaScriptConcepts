const id=12345;
let email="lakshmi@google.com";
var password="176";
city="Lucknow";
let State;

// let us see the difference between let,var and const

// id=3;  //can't change
email="ls@google.com";  //can be changed
password="22123";   //can be changed
city="Mumbai";   //can be changed

console.table([id,email,password,city,State]);



// The difference between let,var,const is -----------------

// let and var can be reassign the values but const cannot be reassign.
// var can be redeclare but let and const can't be redeclare.

// So not to use var 
// instead of var ,use let and const