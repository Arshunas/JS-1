console.clear();
/*
FOR (ciklas)

for (pradzia; klausimas; pakeitimas) {
    kartojama logika
}

*/

const marks = [10, 2, 8, 4, 6];

let sum = 0;
let index = 0;

sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];
sum += marks[index++];

console.log('Vidurkis:', sum/ marks.length);

//Ispausdinti nuo 0 iki 5.
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//Ispausdinti nuo 100 iki 104.
for (let i = 100; i <= 104; i++) {
    console.log(i);
}

//Ispausdinti nuo 1000 iki 995.
for (let i = 1000; i >= 995; i--) {
    console.log(i);
}


console.log('-------------');
const pazymiai = [2, 4, 6, 8, 10, 10, 8, 6, 4, 2];

let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    console.log(i, '-->', pazymiai[i]);
}

console.log('----------------');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i<numbers.length; i++) {
    console.log(i, '-->', numbers[i]);
}


console.log('----------------');

const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i<numberss.length; i += 2) {
    console.log(i, '-->',numbers[i]);
}

console.log('----------------');

const numbersss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 2; i<numbersss.length; i += 3) {
    console.log(i, '-->',numbers[i]);
}

console.log('----------------');

const abc = 'abcdefghijklmnopqrstuvwxyz'

for (let i=0; i<abc.length; i++) {
    console.log(abc[i]);
}

console.log('----------------');

const abcd = 'abcdefghijklmnopqrstuvwxyz';
let text = '';

for (let i = 0; i < abc.length; i += 5) {
    text += abc[i];
    console.log(i, abc[i], text);
}

console.log('----------------');

const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];

//Sveiki, mano vardas yra [vardas]!

for (let i = 0; i<students.length; i++) {
    const name = students[i];
    const hi = `Sveiki, mano vardas yra ${name}!`;
    console.log(hi);
}