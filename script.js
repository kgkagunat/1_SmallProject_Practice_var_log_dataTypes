// Day 1 practice

// 1) Logging
console.log('Hello World!' + ' JavaScript practice');

console.error('This is an error');

console.warn('This is a warning');

console.table({ a: 1, b: 2 });

/* ------------------------------------ */

// 2) Variables
let test = 1;
test = 2;
test = 'string';
test = true;
console.log(test);

const test2 = 3.14;
// test2 = false;
console.log(test2);

const test3 = { name: 'John', age: 20 };
console.log(test3); // Before
test3.name = 'Sarah';
test3.age = 20;
test3.gender = 'female';
console.log(test3); // After

const test4 = ['Las Vegas', 'Tokyo', 'Mexico', 'New Zealand'];
console.log(test4); // Before
test4.push('Star Wars Land');
test4.unshift('Awesome Sauce');
console.log(test4); // After

/* ------------------------------------ */

// 3) Checking value types
const string = 'This is a string';
console.log(
    typeof string + ': ' + string + ' -- Is String?',
    typeof string === 'string'
);

const number = 31;
console.log(
    typeof number + ': ' + number + ' -- Is Number?',
    typeof number === 'number'
);

const bool = true;
console.log(
    typeof bool + ': ' + bool + ' -- Is Boolean?',
    typeof bool === 'boolean'
);

const nullValue = null;
console.log(
    typeof nullValue + ': ' + nullValue + ' -- Is Null?',
    nullValue === null
);

const undefinedValue = undefined;
console.log(
    typeof undefinedValue + ': ' + undefinedValue + ' -- Is Undefined?',
    undefinedValue === undefined
);

const numbers = [20, 98, 56];
console.log(
    typeof numbers + ': ' + numbers + ' -- ' + 'Is array?',
    Array.isArray(numbers)
);

const peoples = { person1: 'Angela', person2: 'John' };
console.log(
    typeof peoples + ': ' + peoples + ' -->' + 'Is array?',
    Array.isArray(peoples)
);

const functionTest = function () {
    console.log('Function Test: Function');
};
console.log(
    'Is "functionTest" a function?',
    typeof functionTest === 'function'
);

function testF() {
    console.log('Second function Test');
}
console.log('Is "testF" a function?', typeof testF === 'function');
