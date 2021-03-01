// // Array
// //data storage for a list of items
// //all arrays start at 0
// let teachers = ["mellisa","yusif", "laura"];
// console.log(teachers[1])

// //array functions

// teachers.length;  // will return how many items in the array


// // push adds to the end of the array
// // pop removes from the end of the array
// let teachers = ['Assaf', 'Shane'];
// teachers.unshift('Zack'); // ['Zack', Assaf', 'Shane']
// let teacher = teachers.shift(); //teacher == 'Zack', teachers = ['Assaf', Shane']

// //shift adds to the beginning
// //unshift removes from the beginning

// let teachers = ['Assaf', 'Shane'];
// teachers.unshift('Zack'); // ['Zack', Assaf', 'Shane']
// let teacher = teachers.shift(); //teacher == 'Zack', teachers = ['Assaf', Shane']


// // add to a specific postion in the array and replaces existing item in array if postion is filled
// teachers[4] = 'James Taylor'; // ['Assaf', 'Shane', 'Zack', undefined, 'James Taylor'];
// teachers[4] = 'Billy Joel'; // ['Assaf', 'Shane', 'Zack', undefined, 'Billy Joel'];

// template literals
// console.log ( 'my list of students are: ${teachers}');


/// index of finds postion in array
// let a = [10,11,20];
// a.indexOf(11); //1
// a.indexOf(50); //-1


// //creating a new array ( not changing the original)
// let a = [1,2,3,4];
// //Slice - doesn't mutate array, slice(start,end)
// accepts 2 parameters only start and end points
// a.slice(0,2); //[1,2]
// 'abcd'.slice(1,3) // 'bc'
//example
// let animals = [];
// let new animals = animal.slice(2,4);


///this changes the original array
//you can just delete items with out adding or delete and add items
// //Splice - splice(start,numToRemove,...items to add) - this does mutate
// a.splice(1,2,'a','b'); //a is [1,'a','b',4]

// //Iterating over Arrays using for loop and forEach
// let teachers = ['Assaf', 'Shane', 'Zack']
// for(let i = 0; i < teachers.length -1; i++) {
// 	console.log(teachers[i]);
// }



// //Stringifying
// teachers = ['Assaf', 'Shane'];
// teachers.toString(); 'Assaf,Shane';
// teachers.join('&'); 'Assaf&Shane';

//must have extra brackets with sort function .sort()
// let a = [2, 1, 3]
// a.sort(); //[1,2,3]

// a.reverse(); //[3,2,1]

// OBJECTS

// let course= {
// instructer: 'laura',
// ta: ['melissa', 'yusuf'],
// length: 4,
// students 36,
// subject "javascript"
// }

// //accessing items in an object
// let teacher = course.instructer;
// console.log (teacher);
// //or
// console.log (course.instructor);

// typeof = in js is a keyword to find data type
//example
// console.log(typeof 7);