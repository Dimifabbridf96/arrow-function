///**
// * To run this file in Gitpod, use the 
// * command node arrow-functions.js in the terminal
// */
//
//// Vanilla JavaScript Function
////function addTwoNumbers(a, b) {
////    return a + b;
////}
////let sum = addTwoNumbers(1, 3);
//
////console.log(sum);
//
//// Arrow Function With Parameters
//const addTwoNumbers = (a, b) => {
//    return a + b;
//}
//let sum = addTwoNumbers(1, 3)
//console.log(sum);
//
//// Single Line Arrow Function With Parameters
//const addTwoNumbers2 = (a, b) => a + b;
//let sum2 = addTwoNumbers(3, 8);
//console.log(sum2);
//// Implicit Returns
//const saySomething = message => console.log(message);
//saySomething('Hello')
//const Waa = () => console.log('Waa');
//Waa();
//// Returning Multiple Lines
//
//const returnMultiplelines = () => (
//    `<p>
//    waaaa mega waaaa
//
//    </p>`
//)
//console.log(returnMultiplelines());
//
//
//
//
//
//let arr1 = [1, 2, 3];
//let arr2 = arr1;
//arr2.push(4);
//arr3 = [4, 5, 6]
//arr4 = [...arr3];
//arr4.push(7);
//console.log('Forth array :', arr4);
//console.log('Thirdh array :', arr3);
//console.log('Second array:', arr2);
//
//
//
//let obj1 = {
//    a: 1, b: 2, c: 3
//};
//let obj2 = {
//    ...obj1, d: 4
//};
//
//let obj3 = {
//    ...obj1, b: 3
//}
//console.log(obj1);
//console.log(obj2);
//console.log(obj3);
//
//
//
//let arr5 = [
//    ...arr1, { ...obj1 }, ...arr3, 'x', 'y', 'z'];
//
//console.log(arr5);
//
//
//const sumAll = (a, b, c) => a + b + c;
//
//let sum3 = sumAll(1, 2, 3);
//console.log(sum3);
//
//
//let sum4 = sumAll(1, 2, 3, 4, 5, 6);
//console.log(sum4);
//
//const sumRest = (a, b, c, ...rest) => {
//    let sum = a + b + c;
//    for (let i of rest) {
//        sum += i
//    }
//    return sum
//}
//let sum7 = sumRest(1, 2, 3, 4, 5, 6);
//console.log(sum7);
//
//
//let ages = [30, 26, 27];
//let [john, mary, joe] = ages;
//console.log(john);
//console.log(mary);
//console.log(joe);
//
//
//
//
//let jobs = {
//    mike: 'designer',
//    jill: 'developer',
//    alicia: 'accountant',
//};
//
//let { mike, jill, alicia } = jobs;
//
//console.log(mike, jill, alicia);
//
//
//let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
//let [johnNative, johnSecondary] = languages;
//console.log(johnNative, johnSecondary);
//
//let [, , maryNative, marySecondary] = languages;
//
//console.log(maryNative, marySecondary);
//
//
//
//
//let languages2 = {
//    firstlanguage: 'english',
//    secondlanguage: 'french',
//    thirdlanguage: 'german',
//    fourthlanguage: 'japanese',
//};
//
//let {firstlanguage, thirdlanguage} = languages2;
//
//console.log(firstlanguage, thirdlanguage);
//
//
//
//let fruits = ['apple', 'orange', 'banana', 'poeach', 'cherry'];
//let [favorite, secondFavorite, ...others] = fruits;
//console.log(favorite);
//console.log(secondFavorite);
//console.log(others);
//
//
//let people = {brian: 'pizza', anna:'pasta', sarah:'vegetarian', andrea: 'steak'};
//
//let{brian, anna, ...rest} = people;
//
//console.log(brian);
//console.log(anna);
//console.log(rest);
//
//
//
//let nums = [1,2,3,4,5];
//let results = [];
//
//for(let num of nums){
//    results.push(num * 2);
//}
//console.log(results);
//
//const multByTwo = function(num){
//    return num *2
//}
//const mapResults = nums.map(num => num *2);
//
//console.log(mapResults);
//
//
//
//const students = [
//    {
//      id: 1,
//      name: 'Mark',
//      profession: 'Developer',
//      skill: 'JavaScript'
//    },
//    {
//      id: 2,
//      name: 'Ariel',
//      profession: 'Developer',
//      skill: 'HTML'
//    },
//    {
//      id: 3,
//      name: 'Jason',
//      profession: 'Designer',
//      skill: 'CSS'
//    },
//  ];
//
//
//  const studentsWhitIds = students.map(student => [student.id, student.name]);
//
//  console.log(studentsWhitIds);
//
//
//
//
//  // Simple Filtering
//const peoplw = [
//    {
//      name: 'Michael',
//      age: 23,
//    },
//    {
//      name: 'Lianna',
//      age: 16,
//    },
//    {
//      name: 'Paul',
//      age: 18,
//    },
//  ];
//
//let r = peoplw.filter( person => person.age >= 21)
//
//  console.log(r);
//
//  const paul = peoplw.filter(person => person.name === 'Paul');
//  
//  console.log(paul)
//  // Complex Filtering
//  const studenti = [
//    {
//      id: 1,
//      name: 'Mark',
//      profession: 'Developer',
//      skills: [
//        { name: 'javascript', yrsExperience: 1 },
//        { name: 'html', yrsExperience: 5 },
//        { name: 'css', yrsExperience: 3 },
//      ]
//    },
//    {
//      id: 2,
//      name: 'Ariel',
//      profession: 'Developer',
//      skills: [
//        { name: 'javascript', yrsExperience: 0 },
//        { name: 'html', yrsExperience: 4 },
//        { name: 'css', yrsExperience: 2 },
//      ]
//    },
//    {
//      id: 3,
//      name: 'Jason',
//      profession: 'Designer',
//      skills: [
//        { name: 'javascript', yrsExperience: 1 },
//        { name: 'html', yrsExperience: 1 },
//        { name: 'css', yrsExperience: 5 },
//      ]
//    },
//  ];
//
//  const has5yearsexp = skill => skill.yrsExperience >= 5;
//const hasStrongSkills = student => student.skills.filter(has5yearsexp).length > 0;
//const candidates = studenti.filter(hasStrongSkills)
//const name = candidates.map(c => c.name);
//console.log(candidates);
//
//
//
//let studenta = [
//    {
//        name: 'John',
//        subjects: ['maths', 'english', 'cad'],
//        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
//        results: {maths: 90, english: 75, cad: 87},
//    },
//    {
//        name: 'Emily',
//        subjects: ['science', 'english', 'art'],
//        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
//        results: {science: 93, english: 80, art: 95},
//    },
//    {
//        name: 'Adam',
//        subjects: ['science', 'maths', 'art'],
//        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
//        results: {science: 84, maths: 97, art: 95},
//    },
//    {
//        name: 'Fran',
//        subjects: ['science', 'english', 'art'],
//        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
//        results: {science: 67, english: 87, art: 95},
//    }
//];
//
//const topMaths = studenta.filter(r => r.results.maths >= 90);
//
//console.log(topMaths);
//
//
//
//
//// Summing an array of numbers:
//const numeri = [0,1,2,3,4];
//let somma = numeri.reduce((acc, curr) => acc + curr, 19);
//console.log('somma:',somma);
//
//const teamMembers = [
//    {
//      name: 'Andrew',
//      profession: 'Developer',
//      yrsExperience: 5
//    },
//    {
//      name: 'Ariel',
//      profession: 'Developer',
//      yrsExperience: 7
//    },
//    {
//      name: 'Michael',
//      profession: 'Designer',
//      yrsExperience: 1
//    },
//    {
//      name: 'Kelly',
//      profession: 'Designer',
//      yrsExperience: 3
//    }
//    {
//        name: 'Dimi',
//        profession: 'Cook',
//        yrsExperience: 7
//      }
//  ];
//
//  
//  
//  // Totaling a specific object property
//  
//let totalYearsExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
//console.log(totalYearsExp)
//  
//  // Grouping by a property, and totaling it too
//
//  let experienceByProfession = teamMembers.reduce((acc,curr) => {
//let key = curr.profession;
//if(!acc[key]){
//    acc[key] = curr.yrsExperience;
//}else{
//    acc[key] += curr.yrsExperience;
//}
//return acc
//  }, {});
//
//  console.log(experienceByProfession);

  let studentu = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];


const biggest = studentu.reduce((acc,curr) =>{
    acc = acc.max > curr.results.english ? acc: {name: curr.name, max: curr.results.english};
    return acc;
    }
, {name: '', max: ''});

console.log(biggest);