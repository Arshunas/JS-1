console.clear();

/*
IF (loginis palygnimas)

Sablonai:
if () {}
if () {} else {}

Palyginimo operatoriai: 
- visi: >, <, ==, !=, >=, <=
- naudotini: >, <, >=, <=
- nenaudotini: ==, !=

Loginiai operatoriai:
- && (AND)
- || (OR)

Sablonai: 
if () {}
if () {} else {}
if () {} else if {} 
if () {} else if {} else {}
if () {} else if {} ... else if () {}
if () {} else if {} ... else if () {} else {}

*/

if (4<2) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (7 == 7) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (7 != 8) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (88 >= 9) {
    console.log('daugiau arba lygu');
} else {
    console.log('maziau');
}

if (88 <= 7) {
    console.log('daugiau arba lygu');
} else {
    console.log('daugiau');
}

console.log('-------------- ');

if (4 == '4') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

console.log('-------------- ');

if (Infinity == 'Infinity') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (NaN == 'NaN') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

console.log('-------------- ');

if (0 == false) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (0 == true) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (1 == true) {
    console.log('lygu');
} else {
    console.log('nelygu');
}


console.log('-------------- ');

if (0 == '') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

console.log('-------------- ');

if ('asd' == 'Asd') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if ('Asd' == 'Asd') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

console.log('-------------- ');

if ('a' > 'b') {
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

console.log('-------------- ');

if ('a' > 'A') {
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

console.log('-------------- ');

if (7 === '7') {
    console.log('grieztai lygu');
} else {
    console.log('nelygu');
}

if (7 !== '7') {
    console.log('grieztai lygu');
} else {
    console.log('nelygu');
} 

console.log('-------------- ');

const diena = 3;

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else if (diena === 4) {
    console.log('ketvirtadienis');
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
} else {
    console.log('nezinau tokios dienos...');
}


console.log('-------------- ');
// CODE NESTING - nestinimas 

const day = 4;

if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2) {
        console.log('antradienis');
    } else {
        if (day === 3) {
            console.log('treciaienis');
        } else {
            if (day === 4) { 
                console.log('ketvirtadienis');
            } else {
                if (day === 5) { 
                    console.log('penktadienis');
                } else {
                    if (day === 6) { 
                        console.log('sestadienis');
                    } else {
                        if (day === 7) { 
                            console.log('sekmadienis');
                        } else {
                                console.log('tokios savaiteje dienos nera... ');
                        }
                    }
                }
            }
        }
    }
}

console.log('----------------');

const nuoKadaSilta = 15;
const temperatura = 30;
const arLyja = true;

if (temperatura < nuoKadaSilta) {
    if (arLyja === true) {
        console.log('Nera silta ir lyja: reikia striukes ir skecio');
    } else {
        console.log('Nera silta ir lyja: reikia striukes');
    }
    console.log('Nera silta: reikia striukes');
} else {
    if (arLyja === true) {
        console.log('Sila ir lyja: varom be maikes');
    } else {
        console.log('Silta ir nelyja: varom su maike');
    }
    console.log('Silta: varom su maike');
}

if (temperatura >= nuoKadaSilta && arLyja === false) {
    console.log('Silta ir nelyja: varom su maike');
} else if (temperatura >= nuoKadaSilta && arLyja === true) {
    console.log('Sila ir lyja: varom be maikes');
} else if (temperatura <= nuoKadaSilta && arLyja === true) {
    console.log('Nera silta ir lyja: reikia striukes ir skecio');
} else {
    console.log('Nera silta ir lyja: reikia striukes');
}

console.log('----------------');

