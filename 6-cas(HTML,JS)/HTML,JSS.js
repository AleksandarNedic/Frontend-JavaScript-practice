//Vežbe
// --------
let temperatura = 28;
if (temperatura > 25) {
    console.log('Vruce');
}
else if (temperatura >= 15 && temperatura <= 25) {
    console.log('Umereno');
}
else {
    console.log('Hladno');
}
// --------
let poeni = [45, 78, 90, 62];
for (let i = 0; i < poeni.length; i++) {
    if (poeni[i]  >= 60) {
        console.log('Polozio');
    }
    else console.log('Nedovoljno');
}
//============
let brojevi = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < brojevi.length; i++) {
   if (brojevi[i]%3 === 0) {
       console.log(brojevi[i]);
   }
}
//=============
let imena = ['Ana', 'Marko', 'Jovan', 'Ivana'];
for (let i = 0; i < imena.length; i++) {
    if (imena[i].length >= 4) {
        console.log(imena[i]);
    }
}
//==========
let godine = 2026;
if (godine % 4 === 0) {
    console.log('Godina je prestupna');
}
else {console.log('Godina nije prestupna');}
//=============
let ocene = [5,4, 3, 2, 1, ];
let oceneDva = [];
for (let i = 0; i < ocene.length; i++) {
    if (ocene[i] === 2) {
        oceneDva++

    }
}
console.log(oceneDva);
//============
let dan = 'subota';
switch (dan) {
    case 'subota':
      console.log('vikend');
        break;
    case 'nedelja':
        console.log('vikend');
        break;
    case 'ponedeljak':
        console.log('radni dan');
        break;

}
//============
let statusi = ['online', 'offline', 'offline', 'offline', 'online'];
for (let i = 0; i < statusi.length; i++) {
    switch (statusi[i]) {
        case 'online':
            console.log('Aktivan');
            break;
        case 'offline':
            console.log('Nije Aktivan');
            break;
    }
}
//================
let brojevi2 = [5, 8, 12, 3, ];
let min = brojevi2[0];
for (let i = 0; i < brojevi2.length; i++) {
    if (brojevi2[i] < min) {
        min = brojevi2[i];
    }
}
console.log(min);
//=============
let ocene2 = [5, 3, 4, 2, 5];
let zbir = 0;
for (let i = 0; i < ocene2.length; i++) {
    zbir += ocene2[i];
}
console.log(zbir);
//===========
let vreme = 'jutro';
switch (vreme) {
    case 'jutro':
        console.log('Dobro Jutro!');
        break;
    case 'dan':
        console.log('Dobar Dan!');
        break;
    case 'noc':
        console.log('Laku Noc!');
        break;
}
//============
let jezici = ['JS', 'CSS', 'HTML', 'Python'];
for (let i = 0; i < jezici.length; i++) {
    switch (jezici[i]) {
        case 'JS':
            console.log('JavaScript');
            break;
        case 'CSS':
            console.log('Cascading Style Sheets');
            break;
        case 'HTML':
            console.log('HyperText Markup Language');
            break;
        case 'Python':
            console.log('Python');
            break;

    }
}
//=========
let brojevi3 = [2, 4, 6, 8, 10];
for (let i = 0; i < brojevi3.length; i++) {
     console.log(brojevi3[i]/2);
}
//=======================
let poruke = ['Zdravo','Cao', 'Hello', 'Hi'];
for (let i = 0; i < poruke.length; i++) {
    if (poruke[i].length > 2) {
        console.log(poruke[i]);
    }
}
//===================
let ulogovan = [true, false, true, false];
for (let i = 0; i < ulogovan.length; i++) {
    if (ulogovan[i] === true) {
        console.log('Ulogovan')}
        else {console.log('Nije ulogovan')}

}
//=========
let broj = 15;
if (broj%3 === 0) {
    console.log('Broj je djeljiv sa 0')}
    else {
        console.log('Broj nije djeljiv sa 0')
    }

//==============
let ocene1 = [1, 2, 3, 4, 5];
    for (let i = 0; i < ocene1.length; i++) {
        if (ocene1[i] === 5) {
            console.log('Odlican');
        }
        else if (ocene1[i] === 4  || ocene1[i] === 3) {
            console.log('Dobar');
        }
        else {console.log('Nedovoljan');}
    }
//============
let gradovi = ['Beograd', 'Novi Sad', 'Nis', 'Subotica'];
    for (let i = 0; i < gradovi.length; i++) {
        if(gradovi[i][0] === 'N') {
            console.log(gradovi[i]);
        }
    }
    //=============
let brojevi4 = [1, 2, 3, 4, 5];
let parniZbir = 0
    for (let i = 0; i < brojevi4.length; i++) {
        if (brojevi4[i]%2 === 0) {
            parniZbir += brojevi4[i];
        }
    }
console.log(parniZbir);
//============
let poeni1 = 72;
if (poeni1 >= 65) {
    console.log('Odlican');
}
else if (poeni1 < 65 && poeni1 >= 35) {
    console.log('Dobar');
}
else {
    console.log('Nedovoljan');
}

//===========================
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
//=======================================
let brojevi5 = [3, 7, 2, 8, 5,];
let najveciBroj = brojevi5[0];
for (let i = 0; i < brojevi5.length; i++) {
    if (najveciBroj < brojevi5[i]) {
        najveciBroj  =   brojevi5[i];
    }
}
console.log(najveciBroj);

//==========================
let temperatura1 = [12, 25, 30, 18];
for (let i = 0; i < temperatura1.length; i++) {
    if (temperatura1[i] > 25) {
        console.log('Vruce');
    }
    else if (temperatura1[i] <= 25 && temperatura1[i] >= 15) {
        console.log('Umereno');
    }
    else {console.log('Hladno');}
}
//===========================
let poruke1 = ['Hello', 'World', 'JS', 'Bye'];
let svePoruke = [];
for (let i = 0; i < poruke1.length; i++) {
    svePoruke += poruke1[i];
}
console.log(svePoruke);
//========================
let tip = 'desktop';
switch (tip) {
    case 'desktop':
        console.log('Desktop uredjaj');
        break;
        case 'mobile':
            console.log('Mobile uredjaj');
            break;
}
//=============================
let brojevi6 = [5, 3, 4, 2, 5, 3, 1,];
let cetriPlus = 0;
for (let i = 0; i < brojevi6.length; i++) {
    if ( brojevi6[i] >= 4) {
        cetriPlus++
    }
}
console.log(cetriPlus);
//====================
let brojevi7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < brojevi7.length; i++) {
    console.log(brojevi7[i] * brojevi7[i]);
}
//=====================
let gradovi1 = ['Beograd', 'Novi Sad', 'Nis'];
for (let i = 0; i < gradovi1.length; i++) {
    if (gradovi1[i].toLowerCase().includes('nis')) {
        console.log('Nis pronadjen')
    }
    else {console.log('Nis nije pronadjen')}
}
//========================================
let brojevi8 = [10, 20, 30];
for (let i = 0; i < brojevi8.length; i++) {
    console.log(brojevi8[i] + 5);
}
//=======================
let ocene3 = [5, 3, 4, 2, 5];
for (let i = 0; i < ocene3.length; i++) {
    if (ocene3[i] === 5) {
        console.log('Odlican');
    }
    else if (ocene3[i] ===4 || ocene3[i] === 3) {
        console.log('Dobar');
    }
    else {console.log('Nedovoljan');}
}
