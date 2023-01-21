console.clear();

function sudetis (pirmas, antras) {
    return pirmas + antras;
}

const s1 = sudetis(7, 5);
console.log(`7 + 5 = ${s1}`);

const s2 = sudetis(17, -8);
console.log(`17 + -8 = ${s2}`);



function arLyginis(skaicius) {
    if (skaicius % 2 === 0) {
        return 'lygnis';
    }
    return 'ne lyginis';
}

const l1 = arLyginis(7);
console.log(`7  yra ${l1}`);

const l2 = arLyginis(7);
console.log(`88  yra ${l2}`);

console.log('-------------'); 

const Petras = [10, 2, 8, 4, 6];
const Maryte = [10, 9, 8, 7];
const Jonas = [2, 3, 4, 5];
const Ona = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

console.log('-------------');

function average(marks) {
    let sum = 0;
    
    for (let i=0; i < marks.length; i++) {
        sum += marks[i];
    }

    return sum / marks.length;
}

console.log('Petras:', average(Petras));
console.log('Maryte:', average(Maryte));
console.log('Jonas:', average(Jonas));
console.log('Ona:', average(Ona));



console.log('-------------');

function skirtumas(a, b) {
    if (typeof a !== 'number') {
        return 'Klaida: pirmas parametras turi buti skaicius.'
    }

    if (typeof b !== 'number') {
        return 'Klaida: antras parametras turi buti skaicius.'
    }
    // jeigu a yra ne skaicius
        // grazinti: klaida... 

    // jeigu b yra ne skaicius
        // grazinti: klaida...

    return a - b;
}

console.log(skirtumas(7, 5));
console.log(skirtumas(17, 5));
console.log(skirtumas(-17, 5));

console.log(skirtumas(true, 5)); // klaida... 
console.log(skirtumas(8, false)); // klaida... 

console.log(skirtumas('labas', 5)); // klaida... 
console.log(skirtumas(8, 'ezys')); // klaida... 

