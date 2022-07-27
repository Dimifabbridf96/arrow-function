/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
//function addTwoNumbers(a, b) {
//    return a + b;
//}
//let sum = addTwoNumbers(1, 3);

//console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(1, 3)
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers(3, 8);
console.log(sum2);
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello')
const Waa = () => console.log('Waa');
Waa();
// Returning Multiple Lines

const returnMultiplelines = () => (
    `<p>
    waaaa mega waaaa

    </p>`
)
console.log(returnMultiplelines());





let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
arr3 = [4, 5, 6]
arr4 = [...arr3];
arr4.push(7);
console.log('Forth array :', arr4);
console.log('Thirdh array :', arr3);
console.log('Second array:', arr2);



let obj1 = {
    a: 1, b: 2, c: 3
};
let obj2 = {
    ...obj1, d: 4
};

let obj3 = {
    ...obj1, b: 3
}
console.log(obj1);
console.log(obj2);
console.log(obj3);



let arr5 = [
    ...arr1, { ...obj1 }, ...arr3, 'x', 'y', 'z'];

console.log(arr5);


const sumAll = (a, b, c) => a + b + c;

let sum3 = sumAll(1, 2, 3);
console.log(sum3);


let sum4 = sumAll(1, 2, 3, 4, 5, 6);
console.log(sum4);

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i
    }
    return sum
}
let sum7 = sumRest(1, 2, 3, 4, 5, 6);
console.log(sum7);


let ages = [30, 26, 27];
let [john, mary, joe] = ages;
console.log(john);
console.log(mary);
console.log(joe);




let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant',
};

let { mike, jill, alicia } = jobs;

console.log(mike, jill, alicia);


let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;

console.log(maryNative, marySecondary);




let languages2 = {
    firstlanguage: 'english',
    secondlanguage: 'french',
    thirdlanguage: 'german',
    fourthlanguage: 'japanese',
};

let {firstlanguage, thirdlanguage} = languages2;

console.log(firstlanguage, thirdlanguage);



let fruits = ['apple', 'orange', 'banana', 'poeach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);


let people = {brian: 'pizza', anna:'pasta', sarah:'vegetarian', andrea: 'steak'};

let{brian, anna, ...rest} = people;

console.log(brian);
console.log(anna);
console.log(rest);
