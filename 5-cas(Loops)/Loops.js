let broj = 7;
if (broj > 5) {
    console.log('Broj je veci od 5');
}
let godine = 16;
if (godine > 18) {
    console.log('Punoletan si!')
} else (
    console.log('Maloletan si')
)
let ocene = [5, 3, 4, 2, 5,];
for (let i = 0; i < ocene.length; i++) {
    if (ocene[i] >= 4) {
        console.log(ocene[i]);
    }
}

let brojevi = [1, 2, 3, 4, 5, 6,];
for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] % 2 === 0) {
        console.log(brojevi[i]);
    }
}
let imena = ['Ana', 'Marko', 'Jovan'];
for (let i = 0; i < imena.length; i++) {
    if (imena[i].toLowerCase().startsWith('a')) {
        console.log(imena[i]);
    }
}
let gradovi = ['Beograd', 'Novi Sad', 'Nis'];
for (let i = 0; i < gradovi.length; i++) {
    if (gradovi[i].length > 5) {
        console.log(gradovi[i]);
    }
}
let dan = 3;
switch (dan) {
    case 1:
        console.log('Ponedeljak');
        break;

    case 2:
        console.log('Utorak');
        break;
    case 3:
        console.log('Srijeda');
        break;
    case 4:
        console.log('Cetvrtak');
        break;
}
let boja = 'zelena';
switch (boja) {
    case 'zelena':
        console.log('Kreni');
        break;
    case 'crvena':
        console.log('Stani');
        break;
    case 'zuta':
        console.log('Paznja');
        break;
}
let statusi = ['Online', 'Offline', 'Online'];
for (let i = 0; i < statusi.length; i++) {
    switch (statusi[i]) {
        case 'Online':
            console.log("Korisnik aktivan");
            break;
        case 'Offline':
            console.log('Korisnik nije aktivan');
            break;
    }
}
broj = 10;
if (broj % 2 === 0) {
    console.log('Paran')
} else {
    console.log('Neparan');
}
let rezultati = [45, 70, 90];
for (let i = 0; i < rezultati.length; i++) {
    if (rezultati[i] >= 60) {
        console.log('Polozio');
    } else {
        console.log("Nedovoljno");
    }
}
let zbir = 0;
brojevi = [3, 5, 8, 2];
for (let i = 0; i < brojevi.length; i++) {
    zbir += brojevi[i];

}
console.log(zbir);


let najveciBroj = 0;
brojevi = [1, 2, 3, 4, 5];
for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] > najveciBroj) {
        najveciBroj = brojevi[i];
    }

}
console.log(najveciBroj);

let poruke = ['Hello', 'World', 'JS'];
for (let i = 0; i < poruke.length; i++) {
    if (poruke[i].includes('o')) {
        console.log(poruke[i]);
    }
}
let poeni = 85;
if (poeni >= 80) {
    console.log("Odlican")
} else if (poeni >= 60 && poeni <= 79) {
    console.log('Dobar')
} else if (poeni < 60) {
    console.log('Nedovoljan');
}
let uloge = ['admin', 'user', 'guest'];
for (let i = 0; i < uloge.length; i++) {
    switch (uloge[i]) {
        case 'admin':
            console.log('Admin pristup');
            break;

        case 'user':
            console.log('Korisnik');
            break;

        case 'guest':
            console.log('Gost');
            break;
    }

}

brojevi = [2, 4, 6, 8];
let i = 0;
while (i < brojevi.length) {
    console.log(brojevi[i]);
    i++;
}

let x = 5;
i = 0;
while (x > 0) {
    console.log(x);
    x--;
}

ocene = [5, 4, 3, 2, 1];
zbir = 0;
for (let i = 0; i < ocene.length; i++) {
    zbir += ocene[i];
}
let prosek = zbir / ocene.length;
console.log(prosek);

let jezici = ['JS', 'HTML', 'CSS'];
for (let i = 0; i < jezici.length; i++) {
    switch (jezici[i]) {
        case 'JS':
            console.log('JavaScript jezik');
            break;
        case 'HTML':
            console.log('HTML jezik');
            break;
        case 'CSS':
            console.log('CSS jezik');
            break;

    }

}

let ulogovan = [true, false, true];
for (let i = 0; i < ulogovan.length; i++) {
    if (ulogovan[i] === true) {
        console.log('Ulogovan')
    } else if (ulogovan[i] === false) {
        console.log('Nije ulogovan');
    }

}

let vreme = 'dan';
switch (vreme) {
    case 'noc':
        console.log('Laku noc');
        break;
    case 'dan':
        console.log('Dobar dan');
        break;
    case 'jutro':
        console.log('Dobar jutro');
        break;
}

let cifre = [1, 2, 3, 4, 5];
let zbir1 = 0;
for (let i = 0; i < cifre.length; i++) {
    if (cifre[i] > 3) {
        zbir1 += cifre[i];

    }
}
console.log(zbir1);


let grades = [5, 3, 4, 2, 5];
let count = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] === 5) {
        count++;
    }
}

console.log(`Broj odlicnih ocena je ${count}`);

let cities = ['Beograd', 'Novi Sad', 'Nis'];
for (let i = 0; i < cities.length; i++) {
    if (cities[i] === 'Nis') {
        console.log('Nis pronadjen');
    } else if (cities[i] !== 'Nis') {
        console.log('Nis nije  pronadjen');
    }
}

let numbers = [1, 2, 3, 4, 5];
let noviNiz = [];
for (let i = 0; i < numbers.length; i++) {
    noviNiz.push(numbers[i] + 10);
}
console.log(noviNiz);

let tip = 'mobilni';
switch (tip) {
    case 'mobilni':
        console.log('Mobilni uredjaj');
        break;
    case 'desktop':
        console.log('Desktop uredjaj');
        break;
}

let poruke1 = ['Zdravo', 'Cao', 'Hello'];
let svePoruke = []
for (let i = 0; i < poruke1.length; i++) {
    svePoruke += poruke1[i];
}
console.log(svePoruke);

let brojevi2 = [10, 20, 30];
let podjeljenRezultat = [];
for (let i = 0; i < brojevi2.length; i++) {
    podjeljenRezultat.push(brojevi2[i] / 2);
}
console.log(podjeljenRezultat);

let ocene1 = [5, 3, 4, 2, 5];
for (let i = 0; i < ocene1.length; i++) {
    if (ocene1[i] === 5) {
        console.log('Odlican');
    } else if (ocene1[i] === 3 || ocene1[i] === 4) {
        console.log('Dobar');
    } else if (ocene1[i] >= 2) {
        console.log('Nedovoljan');
    }
}

