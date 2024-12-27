let num="23aaa";

// two method of checking typeof
console.log(typeof num);
console.log(typeof(num));

// explicit conversion which convert string into number
console.log(typeof Number(num));

// If there is "23" it will be convert into 23 but "23aaa" can't . It return NaN
// true convert into 1 and false convert into 0    true=>1 and false=>0   
console.log(Number(num));
console.log(Boolean(num));
console.log(String(num));


// It pass only number not alphabet
console.log(parseInt(num));


